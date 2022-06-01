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
            Dialog title = "Thank You!"
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
            p >
            Your results have been saved.You may share the link below to
            return to this
            case :
            <
            /p> <
            div >
            <
            input disabled = {
                true
            }
            style = {
                {
                    fontSize: "medium",
                    width: "70%"
                }
            }
            value = {
                `${process.env.REACT_APP_LFO_URL}/${this.props.causeId}`
            }
            /> <
            /div> <
            /Dialog>
        );
    }
}

export default SaveConfirmation;



// WEBPACK FOOTER //
// ./src/components/Summary/saveConfirmation.js