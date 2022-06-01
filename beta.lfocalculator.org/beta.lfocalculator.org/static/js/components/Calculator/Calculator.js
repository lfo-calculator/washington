import React, {
    Component
} from "react";
import LfoGroup from "./LfoGroup";
import CalculatorSummary from "./CalculatorSummary";
import "./Calculator.css";
import StickyBox from "react-sticky-box";

class Calculator extends Component {
    render() {
        const {
            lfos,
            court,
            charges,
            updateLFO,
            minWage,
            minWageType,
            duration,
            statedPayment,
            updateState,
            indigent,
            probation,
            cr,
            thirdPartyPayments
        } = this.props;

        if (!charges.length) {
            return ( <
                div >
                <
                h3 className = "tab-header" > Calculate LFOs < /h3> <
                div className = "no-charges-message" >
                <
                p > No Charges Have Been Selected. < /p> <
                p > Please Return to Step 1 to Add Charges < /p> <
                /div> <
                /div>
            );
        }

        return ( <
            div id = "calculate-lfos" >
            <
            h3 className = "tab-header" > Calculate LFOs < /h3> <
            div className = "calculator-wrapper" >
            <
            form id = "calculator" > {
                charges.map((charge, index) => {
                    const {
                        id
                    } = charge;
                    return ( <
                        LfoGroup key = {
                            id
                        }
                        title = {
                            charge.name
                        }
                        lfos = {
                            lfos[`charge-${id}`]
                        }
                        type = {
                            `charge-${id}`
                        }
                        updateLFO = {
                            updateLFO
                        }
                        minWage = {
                            minWage
                        }
                        minWageType = {
                            minWageType
                        }
                        updateState = {
                            updateState
                        }
                        />
                    );
                })
            } <
            LfoGroup title = {
                "CASE LFOs"
            }
            lfos = {
                lfos.case
            }
            type = {
                "case"
            }
            updateLFO = {
                updateLFO
            }
            minWage = {
                minWage
            }
            minWageType = {
                minWageType
            }
            updateState = {
                updateState
            }
            /> <
            /form> <
            StickyBox offsetTop = {
                72
            }
            offsetBottom = {
                0
            }
            className = "calculator-summary-wrapper" >
            <
            CalculatorSummary charges = {
                charges
            }
            lfos = {
                lfos
            }
            court = {
                court
            }
            duration = {
                duration
            }
            thirdPartyPayments = {
                thirdPartyPayments
            }
            statedPayment = {
                statedPayment
            }
            updateState = {
                updateState
            }
            indigent = {
                indigent
            }
            probation = {
                probation
            }
            minWage = {
                minWage
            }
            minWageType = {
                minWageType
            }
            cr = {
                cr
            }
            /> <
            /StickyBox> <
            /div> <
            /div>
        );
    }
}

export default Calculator;



// WEBPACK FOOTER //
// ./src/components/Calculator/Calculator.js