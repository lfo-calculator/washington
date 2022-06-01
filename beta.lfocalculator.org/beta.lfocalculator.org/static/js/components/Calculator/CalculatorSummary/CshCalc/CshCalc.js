import React, {
    Component
} from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import {
    formatNum,
    calcCshTotal
} from "../../../../lib/helpers";
import "./CshCalc.css";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
    textField: {
        width: "30%",
        margin: "0 15px",
        verticalAlign: "top"
    },
    inputStyle: {
        fontSize: "small",
        lineHeight: "15px"
    },
    hintStyle: {
        fontSize: "small"
    },
    labelStyle: {
        width: "65%"
    },
    dropdownField: {
        width: "40%",
        margin: "0 15px",
        fontSize: "small",
        verticalAlign: "top"
    }
};

class CshCalculator extends Component {
    handleCheck = e => {
        const {
            cr,
            updateState
        } = this.props;
        window.woopra.track("csh_calculator", {
            enabled: !cr
        });
        updateState({
            cr: !cr
        });
    };

    updateMinWage = (e, value) => {
        const {
            updateState
        } = this.props;
        const minWage = value || 0;
        updateState({
            minWage
        });
    };

    handleMinWageBlur = e => {
        const {
            minWageType,
            minWage
        } = this.props;
        window.woopra.track("update_csh_rate", {
            rate: minWage,
            rate_type: minWageType,
            component: "main csh component"
        });
    };

    updateWageType = (e, index, value) => {
        const {
            updateState
        } = this.props;
        const minWageType = value;
        updateState({
            minWageType
        });
    };

    render() {
        const {
            lfos,
            total,
            court,
            minWage,
            minWageType,
            cr
        } = this.props;
        const cshTotal = calcCshTotal(lfos, total);
        const hours =
            minWage && formatNum(Math.round((cshTotal / minWage) * 2) / 2);

        return ( <
            div id = "cr-calculator"
            className = "summary-component black-border" >
            <
            div className = "checkbox" >
            <
            Checkbox label = {
                `See Total LFOs as CSHs (excluding restitution${
              court === "superior" ? " and victim penalty" : ""
            })`
            }
            checked = {
                cr
            }
            labelStyle = {
                styles.labelStyle
            }
            onCheck = {
                this.handleCheck
            }
            /> <
            /div> {
                cr && ( <
                    div >
                    <
                    div >
                    <
                    SelectField value = {
                        minWageType
                    }
                    onChange = {
                        this.updateWageType
                    }
                    floatingLabelText = "Rate type"
                    floatingLabelFixed = {
                        true
                    }
                    style = {
                        styles.dropdownField
                    } >
                    <
                    MenuItem value = "hourly"
                    primaryText = "$ / h"
                    menuStyle = {
                        styles.inputStyle
                    }
                    /> <
                    MenuItem value = "daily"
                    primaryText = "$ / day"
                    menuStyle = {
                        styles.inputStyle
                    }
                    /> <
                    /SelectField> <
                    TextField type = "number"
                    hintText = {
                        "14.49"
                    }
                    value = {
                        minWage || ""
                    }
                    floatingLabelText = "Rate"
                    floatingLabelFixed = {
                        true
                    }
                    hintStyle = {
                        styles.hintStyle
                    }
                    style = {
                        styles.textField
                    }
                    inputStyle = {
                        styles.inputStyle
                    }
                    onChange = {
                        this.updateMinWage
                    }
                    onBlur = {
                        this.handleMinWageBlur
                    }
                    /> <
                    /div> <
                    div id = "csh-total" >
                    Total: {
                        " "
                    } <
                    span className = "align-right" > {
                        hours
                    } {
                        minWageType === "daily" ? "days" : "hours"
                    } <
                    /span> <
                    /div> <
                    /div>
                )
            } <
            /div>
        );
    }
}

export default CshCalculator;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/CshCalc/CshCalc.js