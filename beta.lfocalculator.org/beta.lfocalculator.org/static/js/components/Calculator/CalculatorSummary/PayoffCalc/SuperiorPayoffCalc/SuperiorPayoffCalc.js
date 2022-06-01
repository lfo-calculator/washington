import React, {
    Component
} from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import {
    RadioButton,
    RadioButtonGroup
} from "material-ui/RadioButton";
import TextField from "material-ui/TextField";
import {
    calcMonthlyPayment,
    calcYearsToPayoff,
    calcRemainingBalance,
    includesRestitution
} from "../../../../../lib/helpers";
import "./SuperiorPayoffCalc.css";

const styles = {
    customWidth: {
        width: 140
    },
    iconStyle: {
        width: "15px"
    },
    hiddenRadioButton: {
        display: "none"
    },
    textField: {
        width: "55%",
        marginBottom: "10px",
        verticalAlign: "bottom"
    },
    floatingLabelStyle: {
        color: "black"
    },
    selectField: {
        width: "45%",
        marginBottom: "10px"
    }
};

class SuperiorPayoffCalc extends Component {
    constructor(props) {
        super(props);

        const initialState = {
            calculation: "calcPayment"
        };
        const state = sessionStorage.getItem("calculation") ?
            JSON.parse(sessionStorage.getItem("calculation")) :
            initialState;

        this.state = state;
    }

    handleDurationValue = (e, value) => {
        const {
            updateState
        } = this.props;
        const {
            units
        } = this.props.duration;
        const duration = {
            value,
            units
        };
        window.woopra.track("superior_payoff_calculator", {
            payoff_duration: `${duration.value} ${duration.units}`,
            calculation: this.state.calculation
        });
        updateState({
            duration
        });
    };

    handleDurationUnit = (e, index, value) => {
        const {
            updateState,
            duration
        } = this.props;
        const units = value;
        const durValue = duration.value;

        if (units === duration.units) return;

        const newDuration =
            units === "months" ?
            Math.ceil(durValue * 12) :
            Math.ceil((100 * durValue) / 12) / 100;

        window.woopra.track("superior_payoff_calculator", {
            payoff_duration: `${newDuration} ${units}`,
            calculation: this.state.calculation
        });

        updateState({
            duration: {
                value: newDuration,
                units
            }
        });
    };

    handleCalculation = (e, value) => {
        const {
            duration
        } = this.props;
        const calculation = value;

        window.woopra.track("superior_payoff_calculator", {
            payoff_duration: `${duration.value} ${duration.units}`,
            calculation: calculation
        });

        this.setState({
            calculation
        }, this.saveCalculation);
    };

    saveCalculation = () => {
        sessionStorage.setItem("calculation", JSON.stringify(this.state));
    };

    render() {
        const {
            lfos,
            statedPayment,
            total,
            duration,
            thirdPartyPayments,
            totalWithThirdPartyFees
        } = this.props;
        const {
            calculation
        } = this.state;
        const adjustedPayment =
            statedPayment >= thirdPartyPayments.monthlyFee ?
            statedPayment - thirdPartyPayments.monthlyFee :
            0;
        const actualPayment = thirdPartyPayments.enabled ?
            adjustedPayment :
            statedPayment;
        const monthlyPaymentNoInterest = calcMonthlyPayment(
            0,
            lfos,
            duration,
            thirdPartyPayments
        );
        const yearsToPayOffNoInterest =
            calcYearsToPayoff(0, lfos, actualPayment) || "Never";
        const yearsToPayOffInterest =
            calcYearsToPayoff(12, lfos, actualPayment) || "Never";
        const balanceNoPayments = calcRemainingBalance(0, lfos, duration);
        const balancePayments = calcRemainingBalance(actualPayment, lfos, duration);
        const restitutionImposed = includesRestitution(lfos);

        if (restitutionImposed && calculation === "calcPayment") {
            this.setState({
                calculation: "calcTime"
            }, this.saveCalculation);
        }
        return ( <
            div >
            <
            div className = "summary-component light-grey blue-border" >
            <
            div className = "pull-left" > Total < /div> <
            div className = "pull-right" > $ {
                total
            } < /div> {
                thirdPartyPayments.enabled && ( <
                    div >
                    <
                    div className = "pull-left" > Total w / Third - Party Fees < /div> <
                    div className = "pull-right" > $ {
                        totalWithThirdPartyFees
                    } < /div> <
                    /div>
                )
            } <
            /div> <
            div className = "summary-component black-border" >
            <
            span className = "bold" > Estimated Payoff Payment Calculator < /span> <
            p > (12 % interest only applied to restitution) < /p> <
            div id = "radio-button-group" >
            <
            RadioButtonGroup name = "interestCalculation"
            valueSelected = {
                calculation
            }
            onChange = {
                this.handleCalculation
            } >
            <
            RadioButton value = "calcPayment"
            label = "Calculate Payment"
            iconStyle = {
                styles.iconStyle
            }
            style = {
                restitutionImposed ? styles.hiddenRadioButton : {}
            }
            /> <
            RadioButton value = "calcTime"
            label = "Calculate Time"
            iconStyle = {
                styles.iconStyle
            }
            /> <
            RadioButton value = "calcBalance"
            label = "Calculate Balance"
            iconStyle = {
                styles.iconStyle
            }
            /> <
            /RadioButtonGroup> <
            /div> <
            hr / >
            <
            div > {
                calculation !== "calcTime" && ( <
                    div >
                    <
                    TextField type = "number"
                    name = "duration"
                    floatingLabelText = "Estm. Time to Pay"
                    floatingLabelFixed = {
                        true
                    }
                    floatingLabelStyle = {
                        styles.floatingLabelStyle
                    }
                    style = {
                        styles.textField
                    }
                    value = {
                        duration.value || ""
                    }
                    hintText = "0"
                    min = {
                        0
                    }
                    onChange = {
                        this.handleDurationValue
                    }
                    /> <
                    SelectField value = {
                        duration.units
                    }
                    floatingLabelStyle = {
                        styles.floatingLabelStyle
                    }
                    style = {
                        styles.selectField
                    }
                    onChange = {
                        this.handleDurationUnit
                    } >
                    <
                    MenuItem value = "months"
                    primaryText = "months" / >
                    <
                    MenuItem value = "years"
                    primaryText = "years" / >
                    <
                    /SelectField> <
                    /div>
                )
            } <
            /div> <
            div > {
                calculation === "calcPayment" && ( <
                    div >
                    <
                    span className = "bold" > Min Monthly Payment Calculations < /span> <
                    div className = "wrapper" >
                    <
                    p className = "pull-left" > Interest waived < /p> <
                    p className = "pull-right" > $ {
                        monthlyPaymentNoInterest
                    } < /p> <
                    /div> <
                    /div>
                )
            } {
                calculation === "calcTime" && ( <
                    div >
                    <
                    span className = "bold" > Time to Payoff Calculations < /span> <
                    div className = "wrapper" >
                    <
                    p className = "pull-left" > Interest waived < /p> <
                    p className = "pull-right" > {
                        yearsToPayOffNoInterest
                    }
                    years < /p> <
                    /div> {
                        restitutionImposed && ( <
                            div className = "wrapper" >
                            <
                            p className = "pull-left" > 12 % Interest < /p> <
                            p className = "pull-right" > {
                                yearsToPayOffInterest
                            }
                            years < /p> <
                            /div>
                        )
                    } <
                    /div>
                )
            } {
                calculation === "calcBalance" && ( <
                    div >
                    <
                    span className = "bold" > Remaining Balance Calculations < /span> <
                    div className = "wrapper" >
                    <
                    p className = "pull-left" >
                    No monthly payments {
                        restitutionImposed && "(12%)"
                    } <
                    /p> <
                    p className = "pull-right" > $ {
                        balanceNoPayments
                    } < /p> <
                    /div> <
                    div className = "wrapper" >
                    <
                    p className = "pull-left" >
                    Monthly Payments {
                        restitutionImposed && "(12%)"
                    } <
                    /p> <
                    p className = "pull-right" > $ {
                        balancePayments
                    } < /p> <
                    /div> <
                    /div>
                )
            } <
            /div> <
            /div> <
            /div>
        );
    }
}

export default SuperiorPayoffCalc;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/PayoffCalc/SuperiorPayoffCalc/SuperiorPayoffCalc.js