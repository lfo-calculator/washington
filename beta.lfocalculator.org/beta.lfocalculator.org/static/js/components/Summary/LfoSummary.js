import React, {
    Component
} from "react";
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import {
    calculateTotal,
    calculateSuspendedTotal,
    calculateProbation,
    calculatePSEA,
    formatNum,
    calcRemainingBalance,
    calcYearsToPayoff,
    calcCshTotal
} from "../../lib/helpers";

const styles = {
    table: {
        whiteSpace: "normal",
        wordWrap: "break-word"
    },
    tableRowColumnAlignLeft: {
        textAlign: "left",
        whiteSpace: "normal",
        wordWrap: "break-word"
    },
    tableRowColumnAlignCenter: {
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        whiteSpace: "normal",
        wordWrap: "break-word"
    },
    totalRow: {
        borderTop: "2px solid black",
        fontWeight: "bold",
        backgroundColor: "#F5F5F5"
    }
};

class LfoSummary extends Component {
    render() {
        const {
            charges,
            lfos,
            minWage,
            minWageType,
            probation,
            court,
            cr,
            duration,
            thirdPartyPayments,
            statedPayment
        } = this.props;

        const total = formatNum(calculateTotal(charges, lfos, probation, court));
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
        const suspendedTotal = formatNum(calculateSuspendedTotal(lfos));
        const probationTotal = formatNum(calculateProbation(probation));
        const psea = court === "clj" ? formatNum(calculatePSEA(charges, lfos)) : 0;
        const payment = formatNum(
            total / duration.value +
            (thirdPartyPayments.enabled ? thirdPartyPayments.monthlyFee : 0)
        );
        const adjustedPayment =
            statedPayment >= thirdPartyPayments.monthlyFee ?
            statedPayment - thirdPartyPayments.monthlyFee :
            0;
        const actualPayment = thirdPartyPayments.enabled ?
            adjustedPayment :
            statedPayment;
        const balance = calcRemainingBalance(actualPayment, lfos, duration);
        const yearsToPayoff =
            calcYearsToPayoff(12, lfos, actualPayment) || "Infinte";
        const cshTotal = calcCshTotal(lfos, total);
        const csh = minWage && formatNum(Math.round((cshTotal / minWage) * 2) / 2);

        return ( <
            div >
            <
            Table style = {
                styles.table
            }
            selectable = {
                false
            }
            bodyStyle = {
                {
                    minWidth: "500px"
                }
            } >
            <
            TableBody displayRowCheckbox = {
                false
            }
            showRowHover = {
                true
            } > {
                probation.enabled && ( <
                    TableRow >
                    <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignLeft
                    } >
                    Probation <
                    /TableRowColumn> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    } >
                    $ {
                        probationTotal
                    } <
                    /TableRowColumn> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    } >
                    $0 <
                    /TableRowColumn> <
                    TableRowColumn / >
                    <
                    /TableRow>
                )
            } {
                psea && ( <
                    TableRow >
                    <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignLeft
                    } >
                    PSEA <
                    /TableRowColumn> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    } >
                    $ {
                        psea
                    } <
                    /TableRowColumn> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    } >
                    $0 <
                    /TableRowColumn> <
                    TableRowColumn / >
                    <
                    /TableRow>
                )
            } <
            TableRow style = {
                styles.totalRow
            } >
            <
            TableRowColumn style = {
                styles.tableRowColumnAlignLeft
            } >
            Total <
            /TableRowColumn> <
            TableRowColumn style = {
                styles.tableRowColumnAlignCenter
            } >
            $ {
                total
            } <
            /TableRowColumn> <
            TableRowColumn style = {
                styles.tableRowColumnAlignCenter
            } >
            $ {
                suspendedTotal
            } <
            /TableRowColumn> <
            TableRowColumn style = {
                styles.tableRowColumnAlignCenter
            } > {
                cr &&
                `Equates to ` +
                csh +
                " community service " +
                (minWageType === "daily" ? "days" : "hours") +
                "*"
            } <
            /TableRowColumn> <
            /TableRow> {
                thirdPartyPayments.enabled && ( <
                    TableRow style = {
                        styles.totalRow
                    } >
                    <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignLeft
                    } >
                    Total w / Third - Party Fees <
                    /TableRowColumn> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    } >
                    $ {
                        totalWithThirdPartyFees
                    } <
                    /TableRowColumn> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    }
                    /> <
                    TableRowColumn style = {
                        styles.tableRowColumnAlignCenter
                    }
                    /> <
                    /TableRow>
                )
            } <
            /TableBody> <
            /Table> {
                court === "clj" && ( <
                    div id = "clj-summary" > {
                        thirdPartyPayments.enabled ? ( <
                            p >
                            Min monthly payment required in order to pay total w /
                            third - party fees in {
                                `${duration.value} ${duration.units}`
                            }
                            is $ {
                                payment
                            }
                            with a set - up fee of $ {
                                thirdPartyPayments.setUpFee
                            }. <
                            /p>
                        ) : ( <
                            p >
                            Min monthly payment required in order to pay total in {
                                " "
                            } {
                                `${duration.value} ${duration.units}`
                            }: $ {
                                payment
                            } <
                            /p>
                        )
                    } <
                    /div>
                )
            } {
                court === "superior" && ( <
                    div id = "table-summary" >
                    <
                    p > Note that 12 % interest applies to restitution only. < /p> <
                    p >
                    Number of years to pay off the total owed with $ {
                        statedPayment || 0
                    }
                    monthly payments is {
                        yearsToPayoff
                    }
                    years. <
                    /p> <
                    p >
                    Balance remaining after monthly payments of $ {
                        statedPayment || 0
                    } {
                        " "
                    }
                    for {
                        duration.value
                    } {
                        duration.units
                    }
                    is $ {
                        balance
                    }. <
                    /p> <
                    /div>
                )
            } {
                cr && ( <
                    p id = "csh-note" >
                    *
                    Excludes restitution {
                        court === "superior" && " and victim penalty assessment"
                    }. <
                    /p>
                )
            } <
            /div>
        );
    }
}

export default LfoSummary;



// WEBPACK FOOTER //
// ./src/components/Summary/LfoSummary.js