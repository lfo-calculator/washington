import React, {
    Component
} from "react";
import {
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import {
    formatNum,
    calcSuspendedBaseFine
} from "../../../lib/helpers";

const styles = {
    columnAlignCenter: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        textAlign: "center"
    },
    columnAlignLeft: {
        textAlign: "left",
        whiteSpace: "normal",
        wordWrap: "break-word"
    },
    columnGrey: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        backgroundColor: "#F5F5F5",
        textAlign: "center"
    }
};

class LfoRow extends Component {
    render() {
        const {
            lfo,
            minWage,
            chargeType,
            totalCaseFines
        } = this.props;
        const orderedToPay = (!lfo.suspend && !lfo.defer && lfo.setAmount) || 0;
        let suspendedAmount = ((lfo.suspend || lfo.defer) && lfo.setAmount) || 0;
        let displayName = lfo.name;

        if (lfo.name === "Base Fine") {
            suspendedAmount = calcSuspendedBaseFine(lfo, chargeType, totalCaseFines);
        }

        if (lfo.valueTbd) {
            displayName = lfo.name + (lfo.suspend ? " Waived" : " (TBD by DOC)");
        }

        return ( <
            TableRow hoverable = {
                true
            } >
            <
            TableRowColumn style = {
                styles.columnAlignLeft
            } > {
                displayName
            } <
            /TableRowColumn> <
            TableRowColumn style = {
                styles.columnGrey
            } >
            $ {
                orderedToPay
            } <
            /TableRowColumn> <
            TableRowColumn style = {
                styles.columnGrey
            } >
            $ {
                suspendedAmount
            } <
            /TableRowColumn> <
            TableRowColumn style = {
                styles.columnAlignCenter
            } > {
                lfo.csh && `${formatNum(lfo.setAmount / minWage)} CSH`
            } {
                lfo.defer && "Deferred"
            } {
                lfo.type === "fine" &&
                    "This is a fine that is subtracted from max fine allowed."
            } <
            /TableRowColumn> <
            /TableRow>
        );
    }
}

export default LfoRow;



// WEBPACK FOOTER //
// ./src/components/Summary/LfoTables/LfoRow.js