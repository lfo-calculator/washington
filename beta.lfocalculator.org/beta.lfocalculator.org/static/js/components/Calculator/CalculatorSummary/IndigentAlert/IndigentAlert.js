import React, {
    Component
} from "react";

class IndigentAlert extends Component {
    render() {
        const {
            indigent
        } = this.props;

        if (!indigent) return null;

        return ( <
            div className = "summary-component black-border indigent-red" >
            <
            span > Defendant is indigent. < /span> <
            /div>
        );
    }
}

export default IndigentAlert;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/IndigentAlert/IndigentAlert.js