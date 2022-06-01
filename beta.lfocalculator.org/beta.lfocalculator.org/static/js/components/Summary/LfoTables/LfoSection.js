import React, {
    Component
} from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import LfoRow from "./LfoRow";
import "./LfoSection.css";

const styles = {
    tableHeader: {
        backgroundColor: "#E0E0E0",
        boxSizing: "border-box",
        outline: "1px solid black"
    },
    ColumnAlignCenter: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        textAlign: "center",
        color: "black"
    },
    ColumnAlignLeft: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        textAlign: "left",
        color: "black"
    }
};

class LfoSection extends Component {
    render() {
        const {
            lfos,
            title,
            minWage,
            chargeType,
            suspendedLabel,
            totalCaseFines
        } = this.props;
        return ( <
            div className = "lfo-section" >
            <
            Table style = {
                {
                    minWidth: "500px"
                }
            }
            bodyStyle = {
                {
                    minWidth: "500px"
                }
            } >
            <
            TableHeader displaySelectAll = {
                false
            }
            adjustForCheckbox = {
                false
            }
            style = {
                styles.tableHeader
            } >
            <
            TableRow >
            <
            TableHeaderColumn style = {
                styles.ColumnAlignLeft
            } > {
                title
            } <
            /TableHeaderColumn> <
            TableHeaderColumn style = {
                styles.ColumnAlignCenter
            } >
            Ordered to Pay <
            /TableHeaderColumn> <
            TableHeaderColumn style = {
                styles.ColumnAlignCenter
            } > {
                suspendedLabel
            } <
            /TableHeaderColumn> <
            TableHeaderColumn style = {
                styles.ColumnAlignCenter
            } >
            Notes <
            /TableHeaderColumn> <
            /TableRow> <
            /TableHeader> <
            TableBody showRowHover = {
                true
            }
            displayRowCheckbox = {
                false
            }
            stripedRows = {
                true
            } >
            {
                lfos.length ? (
                    lfos.map(lfo => ( <
                        LfoRow key = {
                            lfo.name
                        }
                        chargeType = {
                            chargeType
                        }
                        minWage = {
                            minWage
                        }
                        lfo = {
                            lfo
                        }
                        totalCaseFines = {
                            totalCaseFines
                        }
                        />
                    ))
                ) : ( <
                    TableRow >
                    <
                    TableRowColumn colSpan = "4"
                    style = {
                        styles.ColumnAlignCenter
                    } >
                    No LFOs Imposed <
                    /TableRowColumn> <
                    /TableRow>
                )
            } <
            /TableBody> <
            /Table> <
            /div>
        );
    }
}

export default LfoSection;



// WEBPACK FOOTER //
// ./src/components/Summary/LfoTables/LfoSection.js