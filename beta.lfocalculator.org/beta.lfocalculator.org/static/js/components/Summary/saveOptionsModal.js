import React, {
    Component
} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class SaveOptionsModal extends Component {
    render() {
        const actions = [ <
            FlatButton label = "Save New"
            primary = {
                true
            }
            onClick = {
                this.props.save
            }
            />, <
            FlatButton label = "Update"
            primary = {
                true
            }
            onClick = {
                this.props.update
            }
            />
        ];

        return ( <
            Dialog title = "Save Options"
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
            Would you like to save a new
            case or update the current
            case ?
            <
            /Dialog>
        );
    }
}

export default SaveOptionsModal;



// WEBPACK FOOTER //
// ./src/components/Summary/saveOptionsModal.js