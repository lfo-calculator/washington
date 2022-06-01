import React, {
    Component
} from "react";
import "./MiniCalcSummary.css";

class MiniCalcSummary extends Component {
    render() {
        const {
            psea,
            total,
            duration,
            payment,
            hidden,
            court,
            totalWithThirdPartyFees
        } = this.props;
        const durationUnit = duration.units.charAt(0);
        return ( <
            div id = "mini-calc-summary"
            className = {
                `${hidden ? "hidden" : ""} dark-grey`
            } >
            <
            div className = "mini-summary-section" >
            <
            div >
            <
            div className = "mini-summary-section-row" > {
                `${
              court === "clj" ? "PSEA" : ""
            }`
            } < /div> <
            div className = "mini-summary-section align-right" > {
                `${
              court === "clj" ? psea : ""
            }`
            } < /div> <
            /div> <
            div >
            <
            div className = "mini-summary-section-row" > Total < /div> <
            div className = "mini-summary-section align-right" > $ {
                total
            } < /div> <
            /div> <
            div >
            <
            div className = "mini-summary-section-row" > {
                " "
            }
            Total w / Third - Party Fees <
            /div> <
            div className = "mini-summary-section align-right" >
            $ {
                totalWithThirdPartyFees
            } <
            /div> <
            /div> <
            /div> <
            div className = "mini-summary-section white" >
            <
            div >
            <
            div className = "mini-summary-section-row empty" > ... < /div> <
            div className = "mini-summary-section align-right empty" > ... < /div> <
            /div> <
            div >
            <
            div className = "mini-summary-section-row" > Duration < /div> <
            div className = "mini-summary-section align-right" > {
                duration.value
            } {
                durationUnit
            } <
            /div> <
            /div> <
            div >
            <
            div className = "mini-summary-section-row" > Payment < /div> <
            div className = "mini-summary-section align-right" > $ {
                payment
            } < /div> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default MiniCalcSummary;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/MiniCalcSummary/MiniCalcSummary.js