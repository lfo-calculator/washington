import React, {
    Component
} from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import "./ThirdPartyCalc.css";

const styles = {
    textField: {
        width: 90,
        margin: "0 10px"
    },
    inputStyle: {
        fontSize: "small"
    },
    labelStyle: {
        width: "65%"
    }
};

class ThirdPartyCalc extends Component {
    handleCheck = e => {
        const {
            thirdPartyPayments,
            updateState
        } = this.props;
        thirdPartyPayments.enabled = !thirdPartyPayments.enabled;
        updateState({
            thirdPartyPayments
        });
    };

    handleChange = e => {
        const {
            thirdPartyPayments,
            updateState
        } = this.props;
        const key = e.target.name;
        const value = e.target.value ? parseFloat(e.target.value) : 0;
        thirdPartyPayments[key] = value;
        updateState({
            thirdPartyPayments
        });
    };

    render() {
        const {
            thirdPartyPayments
        } = this.props;

        return ( <
            div id = "third-party-calculator"
            className = "summary-component black-border" >
            <
            div className = "checkbox" >
            <
            Checkbox label = "Third-Party Payment Plan Fees"
            checked = {
                thirdPartyPayments.enabled
            }
            labelStyle = {
                styles.labelStyle
            }
            onCheck = {
                this.handleCheck
            }
            /> <
            /div> {
                thirdPartyPayments.enabled && ( <
                    div >
                    <
                    TextField type = "number"
                    name = "setUpFee"
                    value = {
                        thirdPartyPayments.setUpFee || ""
                    }
                    floatingLabelText = "Set-up Fee"
                    floatingLabelFixed = {
                        true
                    }
                    style = {
                        styles.textField
                    }
                    inputStyle = {
                        styles.inputStyle
                    }
                    onChange = {
                        this.handleChange
                    }
                    /> <
                    TextField type = "number"
                    name = "monthlyFee"
                    value = {
                        thirdPartyPayments.monthlyFee || ""
                    }
                    floatingLabelText = "Monthly Fee"
                    floatingLabelFixed = {
                        true
                    }
                    style = {
                        styles.textField
                    }
                    inputStyle = {
                        styles.inputStyle
                    }
                    onChange = {
                        this.handleChange
                    }
                    /> <
                    /div>
                )
            } <
            /div>
        );
    }
}

export default ThirdPartyCalc;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/ThirdPartyCalc/ThirdPartyCalc.js