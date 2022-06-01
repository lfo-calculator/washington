import React, {
    Component
} from "react";
import {
    getImposedLfos,
    calculateCaseFines
} from "../../../lib/helpers";
import LfoSection from "./LfoSection";

class TableSummary extends Component {
    render() {
        const {
            charges,
            lfos,
            minWage
        } = this.props;
        const caseFines = calculateCaseFines(lfos.case);

        return ( <
            div > {
                charges.map(charge => {
                    const {
                        id
                    } = charge;
                    return ( <
                        LfoSection key = {
                            id
                        }
                        minWage = {
                            minWage
                        }
                        chargeType = {
                            charge.type
                        }
                        title = {
                            `CRIME LFOs: ${charge.name}`
                        }
                        suspendedLabel = {
                            "Imposed but Suspended (unless deferred when allowed) when max fine imposed."
                        }
                        totalCaseFines = {
                            caseFines
                        }
                        lfos = {
                            getImposedLfos(lfos[`charge-${id}`])
                        }
                        />
                    );
                })
            } <
            LfoSection minWage = {
                minWage
            }
            title = {
                "CASE LFOs"
            }
            suspendedLabel = {
                "Imposed but Suspended (unless deferred when allowed)"
            }
            lfos = {
                getImposedLfos(lfos.case)
            }
            /> <
            /div>
        );
    }
}

export default TableSummary;



// WEBPACK FOOTER //
// ./src/components/Summary/LfoTables/LfoTables.js