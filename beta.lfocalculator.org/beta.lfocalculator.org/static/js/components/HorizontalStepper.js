import React, {
    Component
} from "react";
import _ from "lodash";
import axios from "axios";
import {
    Step,
    Stepper,
    StepButton
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import CaseSettings from "./CaseSettings";
import ScreeningPage from "./ScreeningPage";
import Calculator from "./Calculator/";
import Summary from "./Summary";
import {
    addDvLfo,
    addDocFee,
    removeDvLfo,
    removeDna,
    determineVPA,
    determineDuiMins,
    addTagLFOs,
    deleteTagLFOs,
    modifyCaseLfos,
    waiveAllCostsAndConvictionFee,
    waiveAllFees,
    resetLFOs,
    woopraIdentify,
    getUserPreferences,
    previousVersionCleanup
} from "../lib/helpers";
import caseLFOs from "../lib/LFOs";
import initialState from "../lib/initialState";

previousVersionCleanup();

const styles = {
    button: {
        marginRight: "5px",
        marginLeft: "5px"
    }
};

class HorizontalStepper extends Component {
    constructor(props) {
        super(props);
        sessionStorage.clear();

        const id = window.location.pathname.substring(1);
        if (id.length) this.fetchCase(id);

        const state = getUserPreferences();
        woopraIdentify(state);
        this.state = state;
    }

    updateState = state => this.setState(state);

    checkForApplicationUpdate = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistrations().then(registrationArray => {
                if (registrationArray.length > 0) registrationArray[0].update();
            });
        }
    };

    ////// Page 1 Methods ////////
    updatePCR = () => {
        const pcr = !this.state.pcr;
        // Reset affordLFOs when pcr is selected (temp fix)
        const affordLFOs = false;
        window.woopra.track("pcr", {
            checked: pcr
        });
        this.setState({
            pcr,
            affordLFOs
        });
    };

    updateDv = () => {
        const {
            charges,
            mentalIllness
        } = this.state;
        const dv = !this.state.dv;
        let lfos = _.cloneDeep(this.state.lfos);

        if (dv) {
            addDvLfo(charges, lfos);
        } else {
            removeDvLfo(charges, lfos);
        }

        if (mentalIllness) {
            waiveAllFees(lfos);
        }

        addDocFee(charges, lfos);

        window.woopra.track("case_dv_flag", {
            is_dv: dv
        });

        this.setState({
            dv,
            lfos
        });
    };

    updateCourt = selectedCourt => {
        const currCourt = this.state.court;

        if (currCourt !== selectedCourt) {
            const state = _.cloneDeep(initialState);

            state.court = selectedCourt;
            state.lfos = {
                case: _.cloneDeep(caseLFOs[selectedCourt])
            };
            state.charges = [];
            state.pcr = this.state.pcr;
            sessionStorage.clear();

            this.setState(state);
        }
    };

    addCharge = charge => {
        const {
            court,
            indigent,
            mentalIllness,
            dv
        } = this.state;
        const charges = [...this.state.charges, charge];
        let lfos = { ...this.state.lfos
        };

        lfos[`charge-${charge.id}`] = charge.lfos;

        if (charge.tags) {
            addTagLFOs(charges, charge, lfos);
        }

        if (court === "superior") {
            determineVPA(charges, lfos);
        }

        if (dv) {
            addDvLfo(charges, lfos);
        }

        if (mentalIllness) {
            waiveAllFees(lfos);
        }

        if (indigent) {
            waiveAllCostsAndConvictionFee(lfos);
        }

        addDocFee(charges, lfos);

        window.woopra.track("add_charge", {
            charge_name: charge.name
        });
        this.setState({
            charges,
            lfos
        });
    };

    deleteCharge = index => {
        const {
            court,
            dv,
            indigent
        } = this.state;
        const charges = _.cloneDeep(this.state.charges);
        let lfos = _.cloneDeep(this.state.lfos);
        const charge = charges.splice(index, 1)[0];
        delete lfos[`charge-${charge.id}`];

        if (charge.dui) {
            modifyCaseLfos(court, lfos, [{
                name: "Conviction Fee",
                type: "add"
            }]);
        }

        if (charge.tags) {
            deleteTagLFOs(court, dv, charges, charge, lfos);
        }

        if (court === "superior") {
            determineVPA(charges, lfos);
        }

        if (charge.name === "ASSAULT IV" && dv) {
            removeDna(charges, lfos);
        }

        if (indigent) {
            waiveAllCostsAndConvictionFee(lfos);
        }

        window.woopra.track("delete_charge", {
            charge_name: charge.name
        });

        this.setState({
            charges,
            lfos
        });
    };

    updateCharge = (charge, index) => {
        const charges = [...this.state.charges];
        const {
            court,
            indigent,
            mentalIllness
        } = this.state;
        let lfos = _.cloneDeep(this.state.lfos);

        charges[index] = charge;

        if (court === "superior") {
            determineVPA(charges, lfos);
        }

        if (charge.dui) {
            determineDuiMins(court, charges, lfos);
        }

        if (mentalIllness) {
            waiveAllFees(lfos);
        }

        if (indigent) {
            waiveAllCostsAndConvictionFee(lfos);
        }

        this.setState({
            charges,
            lfos
        });
    };

    ////// PAGE 2 //////
    updateMentalIllness = () => {
        const mentalIllness = !this.state.mentalIllness;
        let lfos = _.cloneDeep(this.state.lfos);

        if (mentalIllness) {
            waiveAllFees(lfos);
        } else {
            resetLFOs(lfos);
        }

        window.woopra.track("defendant_mentalIllness", {
            has_mentalIllness: mentalIllness
        });

        this.setState({
            mentalIllness,
            lfos
        });
    };

    updateIndigent = () => {
        const indigent = !this.state.indigent;
        let lfos = _.cloneDeep(this.state.lfos);

        if (indigent) {
            waiveAllCostsAndConvictionFee(lfos);
        } else {
            resetLFOs(lfos);
        }

        window.woopra.track("defendant_indigence", {
            is_indigent: indigent
        });

        this.setState({
            indigent,
            lfos
        });
    };

    ////// PAGE 3 //////
    updateLFO = (lfo, key, index) => {
        const lfos = _.cloneDeep(this.state.lfos);
        lfos[key][index] = lfo;
        this.setState({
            lfos
        });
    };

    // Button Actions
    handleStepper = stepIndex => {
        this.checkForApplicationUpdate();

        const prevStepIndex = this.state.stepIndex;

        window.woopra.track("navigation", {
            action_type: "slider_nav",
            transition_to: stepIndex + 1,
            transition_from: prevStepIndex + 1
        });

        this.setState({
            stepIndex
        });
    };

    handleNext = () => {
        this.checkForApplicationUpdate();

        const {
            stepIndex
        } = this.state;

        if (stepIndex < 3) {
            window.woopra.track("navigation", {
                action_type: "next_button",
                transition_to: stepIndex + 2,
                transition_from: stepIndex + 1
            });

            this.setState({
                stepIndex: stepIndex + 1
            });
        }
    };

    handlePrev = () => {
        this.checkForApplicationUpdate();

        const {
            stepIndex
        } = this.state;

        if (stepIndex > 0) {
            window.woopra.track("navigation", {
                action_type: "prev_button",
                transition_to: stepIndex,
                transition_from: stepIndex + 1
            });

            this.setState({
                stepIndex: stepIndex - 1
            });
        }
    };

    handleSave = () => {
        if (this.state.causeId) {
            this.setState({
                showSaveOptions: true
            });
        } else {
            this.upsertCase();
        }

        window.woopra.track("save_button");
    };

    handleReset = () => {
        const reset = _.cloneDeep(initialState);
        sessionStorage.clear();
        reset.minWage = this.state.minWage;
        reset.minWageType = this.state.minWageType;

        window.woopra.track("reset_button");
        this.setState(reset);
    };

    fetchCase = id => {
        const self = this;
        const data = {
            causeId: id
        };

        axios({
                method: "post",
                url: "https://lfo-calculator-service.azure-api.net/Calculator/SelectCause/",
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_SUBSCRIPTION_KEY,
                    "Ocp-Apim-Trace": "true",
                    "Cache-Control": "no-cache"
                }
            })
            .then(function(response) {
                const data = response.data[0];
                const {
                    financialInfo
                } = data;

                window.woopra.track("fetch_case", {
                    cause_id: data.causeId
                });

                data.stepIndex = 3;
                sessionStorage.setItem("financialInfo", JSON.stringify(financialInfo));
                self.setState(_.omit(data, ["financialInfo"]));
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    upsertCase = saveAsNew => {
        const self = this;
        const financialInfo = JSON.parse(sessionStorage.getItem("financialInfo"));

        let data = {
            cause: _.omit(this.state, [
                "showSaveOptions",
                "showSaveConfirmation",
                "stepIndex",
                "isSaving",
                "showSaveError"
            ])
        };

        if (financialInfo) {
            data.cause.financialInfo = financialInfo;
        }

        if (saveAsNew) {
            data.cause.causeId = "";
        }

        this.setState({
            isSaving: true
        });

        axios({
                method: "post",
                url: "https://lfo-calculator-service.azure-api.net/Calculator/AddCause/",
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_SUBSCRIPTION_KEY,
                    "Ocp-Apim-Trace": "true",
                    "Cache-Control": "no-cache"
                }
            })
            .then(function(response) {
                self.setState({
                    causeId: response.data,
                    showSaveConfirmation: true,
                    isSaving: false
                });
            })
            .catch(function(error) {
                self.setState({
                    showSaveError: !!error,
                    isSaving: false
                });
                console.log(error);
            });
    };

    getStepContent = stepIndex => {
        switch (stepIndex) {
            case 0:
                return ( <
                    CaseSettings court = {
                        this.state.court
                    }
                    updateCourt = {
                        this.updateCourt
                    }
                    occupation = {
                        this.state.occupation
                    }
                    updateState = {
                        this.updateState
                    }
                    pcr = {
                        this.state.pcr
                    }
                    updatePCR = {
                        this.updatePCR
                    }
                    dv = {
                        this.state.dv
                    }
                    updateDv = {
                        this.updateDv
                    }
                    charges = {
                        this.state.charges
                    }
                    addCharge = {
                        this.addCharge
                    }
                    deleteCharge = {
                        this.deleteCharge
                    }
                    updateCharge = {
                        this.updateCharge
                    }
                    lfos = {
                        this.state.lfos
                    }
                    />
                );
            case 1:
                return ( <
                    ScreeningPage indigent = {
                        this.state.indigent
                    }
                    mentalIllness = {
                        this.state.mentalIllness
                    }
                    updateMentalIllness = {
                        this.updateMentalIllness
                    }
                    updateIndigent = {
                        this.updateIndigent
                    }
                    charges = {
                        this.state.charges
                    }
                    court = {
                        this.state.court
                    }
                    pcr = {
                        this.state.pcr
                    }
                    affordLFOs = {
                        this.state.affordLFOs
                    }
                    statedPayment = {
                        this.state.statedPayment
                    }
                    updateState = {
                        this.updateState
                    }
                    />
                );
            case 2:
                return ( <
                    Calculator court = {
                        this.state.court
                    }
                    charges = {
                        this.state.charges
                    }
                    lfos = {
                        this.state.lfos
                    }
                    updateLFO = {
                        this.updateLFO
                    }
                    minWage = {
                        this.state.minWage
                    }
                    minWageType = {
                        this.state.minWageType
                    }
                    duration = {
                        this.state.duration
                    }
                    thirdPartyPayments = {
                        this.state.thirdPartyPayments
                    }
                    statedPayment = {
                        this.state.statedPayment
                    }
                    updateState = {
                        this.updateState
                    }
                    indigent = {
                        this.state.indigent
                    }
                    mentalIllness = {
                        this.state.mentalIllness
                    }
                    probation = {
                        this.state.probation
                    }
                    cr = {
                        this.state.cr
                    }
                    />
                );
            case 3:
                return ( <
                    Summary minWage = {
                        this.state.minWage
                    }
                    minWageType = {
                        this.state.minWageType
                    }
                    court = {
                        this.state.court
                    }
                    charges = {
                        this.state.charges
                    }
                    lfos = {
                        this.state.lfos
                    }
                    duration = {
                        this.state.duration
                    }
                    thirdPartyPayments = {
                        this.state.thirdPartyPayments
                    }
                    showSaveConfirmation = {
                        this.state.showSaveConfirmation
                    }
                    showSaveOptions = {
                        this.state.showSaveOptions
                    }
                    showSaveError = {
                        this.state.showSaveError
                    }
                    updateState = {
                        this.updateState
                    }
                    causeId = {
                        this.state.causeId
                    }
                    upsertCase = {
                        this.upsertCase
                    }
                    probation = {
                        this.state.probation
                    }
                    cr = {
                        this.state.cr
                    }
                    statedPayment = {
                        this.state.statedPayment
                    }
                    />
                );
            default:
                return "Oops! There was an error. You're a long way from home sonny jim!";
        }
    };

    render() {
        const {
            stepIndex,
            charges
        } = this.state;
        const contentStyle = {
            margin: "auto",
            padding: "0 20px 0",
            maxWidth: 900
        };

        return ( <
            div >
            <
            div id = "stepper" >
            <
            Stepper style = {
                {
                    width: "100%",
                    maxWidth: 700,
                    margin: "auto"
                }
            }
            linear = {
                false
            }
            activeStep = {
                stepIndex
            } >
            <
            Step >
            <
            StepButton onClick = {
                () => this.handleStepper(0)
            }
            /> <
            /Step> <
            Step >
            <
            StepButton onClick = {
                () => this.handleStepper(1)
            }
            /> <
            /Step> <
            Step >
            <
            StepButton onClick = {
                () => this.handleStepper(2)
            }
            /> <
            /Step> <
            Step >
            <
            StepButton onClick = {
                () => this.handleStepper(3)
            }
            /> <
            /Step> <
            /Stepper> <
            /div> <
            div style = {
                contentStyle
            } >
            <
            div > {
                this.getStepContent(stepIndex)
            } < /div> <
            div style = {
                {
                    textAlign: "center",
                    marginTop: 50,
                    marginBottom: 50
                }
            } > {
                stepIndex > 0 && ( <
                    RaisedButton backgroundColor = "#E8E8E8"
                    label = "Back"
                    disabled = {
                        stepIndex === 0
                    }
                    onClick = {
                        this.handlePrev
                    }
                    style = {
                        styles.button
                    }
                    />
                )
            } {
                stepIndex < 3 && ( <
                    RaisedButton label = {
                        "Next"
                    }
                    disabled = {
                        stepIndex === 3
                    }
                    primary = {
                        true
                    }
                    onClick = {
                        this.handleNext
                    }
                    style = {
                        styles.button
                    }
                    />
                )
            } {
                stepIndex === 3 && charges.length > 0 && ( <
                    RaisedButton label = {
                        this.state.isSaving ? "Saving..." : "Finish"
                    }
                    primary = {
                        true
                    }
                    disabled = {
                        this.state.isSaving
                    }
                    onClick = {
                        this.handleSave
                    }
                    style = {
                        styles.button
                    }
                    />
                )
            } {
                charges.length > 0 && ( <
                    RaisedButton backgroundColor = "#E8E8E8"
                    label = "RESET"
                    onClick = {
                        this.handleReset
                    }
                    style = {
                        styles.button
                    }
                    />
                )
            } {
                stepIndex === 3 && this.state.charges.length ? ( <
                    div id = "password-container" >
                    <
                    input id = "password"
                    type = "password"
                    value = {
                        this.state.password
                    }
                    onChange = {
                        e => this.updateState({
                            password: e.target.value
                        })
                    }
                    /> <
                    /div>
                ) : null
            } <
            /div> <
            /div> <
            /div>
        );
    }
}

export default HorizontalStepper;



// WEBPACK FOOTER //
// ./src/components/HorizontalStepper.js