import React, {
    Component
} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Warning extends Component {
    render() {
        const {
            open,
            handleClose
        } = this.props;
        const actions = [ <
            FlatButton label = "Close"
            primary = {
                true
            }
            onClick = {
                handleClose
            }
            />
        ];

        return ( <
            Dialog title = "Are you sure the crime you are searching for is not listed?"
            actions = {
                actions
            }
            modal = {
                false
            }
            open = {
                open
            }
            onRequestClose = {
                handleClose
            }
            autoScrollBodyContent = {
                true
            } >
            <
            div >
            <
            p >
            If you wish to check again please remove your custom crime and search again.You may type either the name of the crime(
                for degrees of crime use roman numerals such as“ IV” instead of “4”) or the RCW
            for the crime(numbers only, no“ RCW”).Any crime that contains the word you have typed will appear in a dropdown list. {
                " "
            } <
            span className = "bold" > SELECT FROM THE DROPDOWN LIST BEFORE < /span>{" "}
            hitting“ ENTER” or“ NEXT, ”otherwise the correct LFOs
            for your particular crime may not appear.You should only hit "ENTER"
            after typing in a name of a crime on your keyboard without selecting from the dropdown list
            if the crime does NOT appear in the list.It would be very unusual
            for your crime not to be included in the list.Note that
            if the LFOs are not different between a crime and the attempted version of that crime, both will be listed together in the dropdown list. <
            /p> <
            /div> <
            /Dialog>
        );
    }
}

export default Warning;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/Warning.js