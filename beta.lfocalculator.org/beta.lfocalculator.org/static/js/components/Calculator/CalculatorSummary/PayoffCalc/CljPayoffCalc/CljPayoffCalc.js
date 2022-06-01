import React, {
    Component
} from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import "./CljPayoffCalc.css";

const styles = {
    link: {
        textDecoration: "none",
        color: "#1FBCD2"
    },
    floatingLabelStyle: {
        color: "black"
    },
    customWidth: {
        width: 140
    }
};

class CljPayoffCalc extends Component {
    handleChange = (e, index, value) => {
        const {
            updateState
        } = this.props;
        const duration = {
            value,
            units: "months"
        };

        window.woopra.track("clj_payoff_calculator", {
            payoff_duration: `${duration.value} months`
        });
        updateState({
            duration
        });
    };

    render() {
        const {
            total,
            duration,
            payment,
            psea,
            thirdPartyPayments,
            totalWithThirdPartyFees
        } = this.props;

        return ( <
            div >
            <
            div className = "summary-component light-grey blue-border" >
            <
            div className = "pull-left" >
            PSEA {
                " "
            } <
            a style = {
                styles.link
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=3.62.090"
            rel = "noopener noreferrer"
            target = "_blank" >
            (RCW 3.62 .090) <
            /a> <
            /div> <
            div className = "pull-right" > $ {
                psea
            } < /div>

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
            /div>

            <
            div className = "summary-component black-border" >
            <
            span className = "bold" > Payoff Payment Calculator < /span> <
            div >
            <
            SelectField value = {
                duration.value
            }
            onChange = {
                this.handleChange
            }
            floatingLabelText = "Estm. Time to Pay"
            floatingLabelStyle = {
                styles.floatingLabelStyle
            }
            style = {
                styles.customWidth
            } >
            <
            MenuItem value = {
                12
            }
            primaryText = "12 months" / >
            <
            MenuItem value = {
                24
            }
            primaryText = "24 months" / >
            <
            MenuItem value = {
                36
            }
            primaryText = "36 months" / >
            <
            MenuItem value = {
                48
            }
            primaryText = "48 months" / >
            <
            MenuItem value = {
                60
            }
            primaryText = "60 months" / >
            <
            /SelectField> <
            /div> <
            div id = "monthly-payment" >
            <
            span >
            Min Monthly Payment {
                " "
            } <
            span className = "align-right" > $ {
                payment
            } < /span> <
            /span> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default CljPayoffCalc;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/PayoffCalc/CljPayoffCalc/CljPayoffCalc.js