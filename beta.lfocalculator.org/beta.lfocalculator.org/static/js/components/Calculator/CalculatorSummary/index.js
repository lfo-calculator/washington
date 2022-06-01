import React, {
    Component
} from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
    calculateTotal,
    calculatePSEA,
    formatNum
} from "../../../lib/helpers";
import ProbationCalc from "./ProbationCalc";
import PayoffCalc from "./PayoffCalc";
import AbilityToPayAlert from "./AbilityToPayAlert";
import IndigentAlert from "./IndigentAlert";
import CshCalc from "./CshCalc";
import ThirdPartyCalc from "./ThirdPartyCalc";
import MiniCalcSummary from "./MiniCalcSummary";
import "./styles.css";

class CalculatorSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            miniCalcVisible: false
        };
    }

    handleVisibility = isVisible =>
        this.setState({
            miniCalcVisible: !isVisible
        });

    render() {
        const {
            charges,
            lfos,
            court,
            duration,
            statedPayment,
            updateState,
            indigent,
            probation,
            minWage,
            minWageType,
            cr,
            thirdPartyPayments
        } = this.props;

        const total = formatNum(
            calculateTotal(
                charges,
                lfos,
                probation,
                court,
                thirdPartyPayments,
                duration,
                false
            )
        );
        const totalWithThirdPartyFees = formatNum(
            calculateTotal(
                charges,
                lfos,
                probation,
                court,
                thirdPartyPayments,
                duration,
                true
            )
        );
        const payment = formatNum(
            total / duration.value +
            (thirdPartyPayments.enabled ? thirdPartyPayments.monthlyFee : 0)
        );
        const psea = formatNum(calculatePSEA(charges, lfos));
        const showColorAlert = court === "clj";

        return ( <
            div id = "calculator-summary" > {
                court === "clj" && ( <
                    ProbationCalc probation = {
                        probation
                    }
                    updateState = {
                        updateState
                    }
                    />
                )
            } <
            PayoffCalc court = {
                court
            }
            lfos = {
                lfos
            }
            psea = {
                psea
            }
            total = {
                total
            }
            thirdPartyPayments = {
                thirdPartyPayments
            }
            totalWithThirdPartyFees = {
                totalWithThirdPartyFees
            }
            statedPayment = {
                statedPayment
            }
            payment = {
                payment
            }
            duration = {
                duration
            }
            updateState = {
                updateState
            }
            /> <
            AbilityToPayAlert showColorAlert = {
                showColorAlert
            }
            statedPayment = {
                statedPayment
            }
            updateState = {
                updateState
            }
            total = {
                total
            }
            payment = {
                payment
            }
            duration = {
                duration
            }
            /> <
            VisibilitySensor onChange = {
                this.handleVisibility
            }
            /> <
            IndigentAlert indigent = {
                indigent
            }
            /> <
            CshCalc minWage = {
                minWage
            }
            minWageType = {
                minWageType
            }
            updateState = {
                updateState
            }
            total = {
                total
            }
            lfos = {
                lfos
            }
            court = {
                court
            }
            cr = {
                cr
            }
            /> <
            ThirdPartyCalc updateState = {
                updateState
            }
            thirdPartyPayments = {
                thirdPartyPayments
            }
            /> <
            MiniCalcSummary hidden = {!this.state.miniCalcVisible
            }
            totalWithThirdPartyFees = {
                totalWithThirdPartyFees
            }
            court = {
                court
            }
            psea = {
                psea
            }
            total = {
                total
            }
            payment = {
                payment
            }
            duration = {
                duration
            }
            /> <
            /div>
        );
    }
}

export default CalculatorSummary;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/index.js