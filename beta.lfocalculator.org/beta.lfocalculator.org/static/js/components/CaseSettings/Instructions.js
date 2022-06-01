import React, {
    Component
} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Instructions extends Component {
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
            Dialog title = "Instructions"
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
            h3 > Step 1 < /h3> <
            ul >
            <
            li >
            If the hearing relates to post - conviction relief, select the box indicating so. <
            /li> <
            /ul> <
            /div> <
            div >
            <
            h3 > Step 2 < /h3> <
            ul >
            <
            li >
            You must identify the proper level of court to trigger the correct LFOs in the calculator. <
            /li> <
            /ul> <
            /div> <
            div >
            <
            h3 > Step 3 < /h3> <
            ul >
            <
            li > Please identify your occupation. < /li> <
            /ul> <
            /div> <
            div >
            <
            h3 > Step 4 < /h3> <
            ul >
            <
            li >
            If
            case involves domestic violence, check the box indicating so. <
            /li> <
            li >
            Either enter key word in name of crime or RCW(use roman numerals
                for degree of crime).Common acronyms are recognized(i.e.DWLS). <
            /li> <
            li > All crimes with the key word will appear in dropdown list. < /li> <
            li >
            Select from dropdown list BEFORE hitting“ ENTER” or“ NEXT.”
            (Otherwise correct LFOs may not appear.) <
            /li> <
            li >
            Note that
            if LFOs are not different between a crime and attempted version of that crime, both crimes will be listed together in
            dropdown list. <
            /li> <
            /ul> <
            /div> <
            /Dialog>
        );
    }
}

export default Instructions;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/Instructions.js