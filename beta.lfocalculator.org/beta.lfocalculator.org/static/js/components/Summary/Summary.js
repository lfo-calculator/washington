import React, {
    Component
} from "react";
import SaveConfirmation from "./saveConfirmation";
import SaveOptionsModal from "./saveOptionsModal";
import SaveErrorModal from "./SaveErrorModal";
import LfoTables from "./LfoTables";
import LfoSummary from "./LfoSummary";
import "./Summary.css";

class Summary extends Component {
    handleClose = () => {
        this.props.updateState({
            showSaveConfirmation: false,
            showSaveOptions: false,
            showSaveError: false
        });
    };

    handleSaveCase = () => {
        window.woopra.track("save_as_new");
        this.handleClose();
        this.props.upsertCase(true);
    };

    handleUpdateCase = () => {
        window.woopra.track("update_case");
        this.handleClose();
        this.props.upsertCase();
    };

    render() {
        const {
            lfos,
            charges,
            minWage,
            minWageType,
            probation,
            cr,
            court,
            duration,
            thirdPartyPayments,
            statedPayment,
            showSaveOptions,
            showSaveError,
            showSaveConfirmation
        } = this.props;

        if (!charges.length) {
            return ( <
                div >
                <
                h3 className = "tab-header" > Summary < /h3> <
                div className = "no-charges-message" >
                <
                p > No Charges Have Been Selected. < /p> <
                p > Please Return to Step 1 to Add Charges < /p> <
                /div> <
                /div>
            );
        }

        return ( <
            div id = "summary" >
            <
            h3 className = "tab-header" > Summary < /h3> <
            SaveConfirmation open = {
                showSaveConfirmation
            }
            causeId = {
                this.props.causeId
            }
            handleClose = {
                this.handleClose
            }
            /> <
            SaveOptionsModal open = {
                showSaveOptions
            }
            save = {
                this.handleSaveCase
            }
            update = {
                this.handleUpdateCase
            }
            handleClose = {
                this.handleClose
            }
            /> <
            SaveErrorModal open = {
                showSaveError
            }
            handleClose = {
                this.handleClose
            }
            /> <
            LfoTables charges = {
                charges
            }
            lfos = {
                lfos
            }
            minWage = {
                minWage
            }
            /> <
            LfoSummary charges = {
                charges
            }
            lfos = {
                lfos
            }
            minWage = {
                minWage
            }
            minWageType = {
                minWageType
            }
            probation = {
                probation
            }
            thirdPartyPayments = {
                thirdPartyPayments
            }
            court = {
                court
            }
            cr = {
                cr
            }
            duration = {
                duration
            }
            statedPayment = {
                statedPayment
            }
            /> <
            /div>
        );
    }
}

export default Summary;



// WEBPACK FOOTER //
// ./src/components/Summary/Summary.js