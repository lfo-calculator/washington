import React, {
    Component
} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Colloquy extends Component {
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

        const {
            linkStyle,
            trackLinkClick
        } = this.props;

        return ( <
            Dialog title = "Where Do I Start?"
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
            }
            autoScrollBodyContent = {
                true
            } >
            <
            h3 > LFO Colloquy Starting Point < /h3> <
            p >
            May be directed to defense attorney
            if defendant wishes to remain silent during sentencing. <
            /p> <
            ul >
            <
            li > Are you working ? < /li> <
            li > When was the last time you held a paid job ? Doing what ? < /li> <
            li > What,
            if any, is your source of income ? < /li> <
            li > Are you on any type of State assistance ? < /li> <
            li >
            Is there anything
            else that the court should know about that would
            impact your ability to pay your legal financial obligations ?
            <
            /li> <
            /ul> <
            h3 > Courts MUST consider : < /h3> <
            ul >
            <
            li > Incarceration < /li> <
            li > Other Debts < /li> <
            li >
            Whether defendant is statutorily indigent per General Rule 34, {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.101.010"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("10.101.010", "pcr_info")
            } >
            RCW 10.101 .010(3) <
            /a>{" "}
            State v.Ramirez, 191 Wn .2 d 732(2018) <
            /li> <
            /ul> <
            h3 >
            Other important factors to consider in determining a person’ s ability to pay <
            /h3> <
            ul >
            <
            li > Income < /li> <
            li > Assets < /li> <
            li > Other financial resources < /li> <
            li > Only source of income is social security disability < /li> <
            li >
            Suffers from a mental health condition that prevents the defendant from participating in gainful employment <
            /li> <
            li >
            Receives assistance from a needs - based, means - tested assistance program, such as Social Security or food stamps <
            /li> <
            li > Work history < /li> <
            li > Future ability to hold a job < /li> <
            li > Education < /li> <
            li > Length of incarceration < /li> <
            li > Outstanding debts, including restitution < /li> <
            li >
            Ability to meet defendant’ s own basic needs(food, shelter, basic medical expenses) <
            /li> <
            li >
            Household income falls below 125 percent of the federal poverty guideline <
            /li> <
            li >
            Payment of the amount due in costs will impose manifest hardship on the defendant or the defendant’ s immediate family <
            /li> <
            /ul> <
            /Dialog>
        );
    }
}

export default Colloquy;



// WEBPACK FOOTER //
// ./src/components/ScreeningPage/Colloquy.js