import React, {
    Component
} from "react";

class AbilityToPayAlert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false
        };
        this.statedPaymentInput = null;
    }

    handleChange = (e, value) =>
        this.props.updateState({
            statedPayment: e.target.value
        });

    handleBlur = () => {
        const {
            statedPayment
        } = this.props;

        window.woopra.track("defendant_ability_to_pay", {
            ability_to_pay: statedPayment,
            component: "calculator page"
        });

        this.setState({
            editable: false
        });
    };

    focusStatedPaymentField = input => {
        input.focus();
    };

    switchToEditable = () => {
        this.setState({
            editable: true
        });
        setTimeout(
            function() {
                this.statedPaymentInput.focus();
            }.bind(this),
            300
        );
    };

    render() {
        const {
            editable
        } = this.state;
        const {
            payment,
            showColorAlert
        } = this.props;
        const statedPayment = this.props.statedPayment || 0;
        const tooHigh = parseFloat(payment) > parseFloat(statedPayment);
        const color = tooHigh ? "red-alert" : "green-alert";

        return ( <
            div className = "summary-component black-border dark-grey"
            id = {
                showColorAlert ? color : ""
            } >
            Ability to Pay per Month is $ {
                !editable ? ( <
                    span > {
                        statedPayment
                    } {
                        " "
                    } <
                    span className = "edit"
                    onClick = {
                        () => this.switchToEditable()
                    } >
                    edit <
                    /span> <
                    /span>
                ) : ( <
                    input type = "number"
                    value = {
                        statedPayment || ""
                    }
                    className = "input-edit"
                    name = "statedPayment"
                    onChange = {
                        this.handleChange
                    }
                    onBlur = {
                        this.handleBlur
                    }
                    ref = {
                        input => (this.statedPaymentInput = input)
                    }
                    />
                )
            } <
            /div>
        );
    }
}

export default AbilityToPayAlert;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/AbilityToPayAlert/AbilityToPayAlert.js