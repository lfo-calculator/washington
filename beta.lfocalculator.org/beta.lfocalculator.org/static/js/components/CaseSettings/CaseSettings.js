import React, {
    Component
} from "react";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import ChargeAutoComplete from "./ChargeAutoComplete";
import ChargeCard from "./ChargeCard";
import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import Instructions from "./Instructions";
import Warning from "./Warning";
import charges from "../../lib/charges/index";
import {
    savePreference
} from "../../lib/helpers";
import "./CaseSettings.css";

const styles = {
    paper: {
        marginTop: "20px",
        padding: "20px",
        boxSizing: "border-box",
        border: "1px solid #E0E0E0",
        backgroundColor: "#F5F5F5"
    },
    checkbox: {
        textAlign: "center",
        margin: "0 auto",
        marginTop: "20px",
        marginBottom: "20px",
        width: 350
    },
    menuItemStyle: {
        textAlign: "center"
    },
    inputStyle: {
        width: "312px"
    },
    labelStyle: {
        textAlign: "center",
        paddingLeft: "56px"
    },
    outerLabelStyle: {
        color: "rgba(0, 0, 0, 0.54)",
        margin: "0 auto 12px",
        display: "table"
    }
};

class CaseSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInstructions: false,
            showWarning: false,
            availableCharges: this.fetchCharges(this.props.court)
        };
    }

    componentDidUpdate = prevProps => {
        if (this.props.court !== prevProps.court) {
            const availableCharges = this.fetchCharges(this.props.court);
            this.setState({
                availableCharges
            });
        }
    };

    fetchCharges = court => {
        const availableCharges = charges
            .filter(charge => {
                const {
                    type
                } = charge;
                if (charge.other) return false;
                return court === "clj" ? type !== "F" : true;
            })
            .sort(this.compare);

        return availableCharges;
    };

    handleShowInstructions = () => {
        window.woopra.track("help_link", {
            link_name: "instructions"
        });
        this.setState({
            showInstructions: true
        });
    };

    handleCloseInstructions = () => this.setState({
        showInstructions: false
    });

    handleShowWarning = () => this.setState({
        showWarning: true
    });

    handleCloseWarning = () => this.setState({
        showWarning: false
    });

    handleCourtChange = (event, index, value) => {
        const {
            updateCourt
        } = this.props;
        savePreference("court", value);
        window.woopra.identify({
            court_type: value
        }).push();
        updateCourt(value);
    };

    handleOccupation = (event, index, value) => {
        const {
            updateState
        } = this.props;
        const occupation = value;
        savePreference("occupation", value);
        window.woopra.identify({
            role: value
        }).push();
        updateState({
            occupation
        });
    };

    compare = (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    };

    render() {
        const {
            availableCharges
        } = this.state;
        const {
            court,
            occupation,
            pcr,
            updatePCR,
            dv,
            updateDv,
            charges,
            addCharge,
            deleteCharge,
            updateCharge
        } = this.props;

        return ( <
            div id = "case-settings" >
            <
            h3 className = "tab-header" > Case Settings < /h3> <
            Instructions open = {
                this.state.showInstructions
            }
            handleClose = {
                this.handleCloseInstructions
            }
            /> <
            Warning open = {
                this.state.showWarning
            }
            handleClose = {
                this.handleCloseWarning
            }
            /> <
            FlatButton label = "Instructions"
            primary = {
                true
            }
            fullWidth = {
                true
            }
            onClick = {
                this.handleShowInstructions
            }
            /> <
            Checkbox label = "Hearing is for post-conviction relief"
            style = {
                styles.checkbox
            }
            checked = {
                pcr
            }
            onCheck = {
                updatePCR
            }
            /> <
            Paper style = {
                styles.paper
            } >
            <
            label style = {
                styles.outerLabelStyle
            } > Select Court Level < /label> <
            div id = "center-dropdown" >
            <
            SelectField style = {
                styles.inputStyle
            }
            labelStyle = {
                styles.labelStyle
            }
            menuItemStyle = {
                styles.menuItemStyle
            }
            value = {
                court
            }
            onChange = {
                this.handleCourtChange
            }
            hintText = "Please identify your occupation" >
            <
            MenuItem value = "clj"
            primaryText = "Court of Limited Jurisdiction" /
            >
            <
            MenuItem value = "superior"
            primaryText = "Superior Court" / >
            <
            /SelectField> <
            /div> <
            /Paper> <
            Paper style = {
                styles.paper
            } >
            <
            label style = {
                styles.outerLabelStyle
            } > Select your occupation < /label> <
            div id = "center-dropdown" >
            <
            SelectField style = {
                styles.inputStyle
            }
            labelStyle = {
                styles.labelStyle
            }
            menuItemStyle = {
                styles.menuItemStyle
            }
            value = {
                occupation
            }
            hintStyle = {
                {
                    marginLeft: "40px"
                }
            }
            onChange = {
                this.handleOccupation
            }
            hintText = "Please identify your occupation" >
            <
            MenuItem value = "judge"
            primaryText = "Judge" / >
            <
            MenuItem value = "prosecutor"
            primaryText = "Prosecutor" / >
            <
            MenuItem value = "defense attorney"
            primaryText = "Defense Attorney" /
            >
            <
            MenuItem value = "defendant"
            primaryText = "Defendant" / >
            <
            MenuItem value = "advocate"
            primaryText = "Advocate" / >
            <
            MenuItem value = "other"
            primaryText = "Other" / >
            <
            /SelectField> <
            /div> <
            /Paper> <
            Paper style = {
                styles.paper
            } >
            <
            label style = {
                styles.outerLabelStyle
            } > Select charges < /label> <
            Checkbox label = "Case involves domestic violence"
            style = {
                styles.checkbox
            }
            checked = {
                dv
            }
            onCheck = {
                updateDv
            }
            /> <
            div > {
                charges.map((charge, index) => {
                    return ( <
                        ChargeCard key = {
                            charge.id
                        }
                        index = {
                            index
                        }
                        deleteCharge = {
                            deleteCharge
                        }
                        updateCharge = {
                            updateCharge
                        }
                        court = {
                            court
                        }
                        charge = {
                            charge
                        }
                        />
                    );
                })
            } <
            /div> {
                charges.length > 0 && < hr / >
            } <
            ChargeAutoComplete chargesAdded = {
                charges.length > 0
            }
            handleShowWarning = {
                this.handleShowWarning
            }
            court = {
                court
            }
            availableCharges = {
                availableCharges
            }
            addCharge = {
                addCharge
            }
            /> <
            /Paper> <
            /div>
        );
    }
}

export default CaseSettings;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/CaseSettings.js