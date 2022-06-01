import React, {
    Component
} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class SaveConfirmation extends Component {
    render() {
        const actions = [ <
            FlatButton
            label = "Close"
            primary = {
                true
            }
            onClick = {
                this.props.handleClose
            }
            />
        ];

        return ( <
            Dialog title = "Oops!"
            actions = {
                actions
            }
            modal = {
                false
            }
            open = {
                this.props.open
            }
            onRequestClose = {
                this.props.handleClose
            } >
            <
            p > Looks like there was an error saving the
            case .Please
            try again. < /p> <
            /Dialog>
        );
    }
}

export default SaveConfirmation;



// WEBPACK FOOTER //
// ./src/components/Summary/SaveErrorModal.js