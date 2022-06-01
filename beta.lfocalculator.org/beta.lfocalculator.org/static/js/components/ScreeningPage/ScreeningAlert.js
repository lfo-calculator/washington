import React, {
    Component
} from "react";
import {
    formatNum
} from "../../lib/helpers";
import Snackbar from "material-ui/Snackbar";
import "./ScreeningAlert.css";

const styles = {
    link: {
        color: "black"
    }
};

class ScreeningAlert extends Component {
    render() {
        const {
            householdSize,
            povertyLevel,
            monthlyIncome,
            mentalIllness,
            indigent,
            trackLinkClick
        } = this.props;
        //Multiplying with -1 to adopt rounding to the one used in public documents
        const monthlyPovertyLevel = formatNum(
            Math.round((povertyLevel * -1) / 12) * -1
        );
        return ( <
            div id = "indigent-alert" >
            <
            div className = "snackbar" >
            <
            Snackbar open = {
                true
            }
            message = "Scroll Down to See Alert"
            autoHideDuration = {
                4000
            }
            /> <
            /div> {
                mentalIllness ? ( <
                    div className = "alert" >
                    <
                    p >
                    Courts may not impose mandatory  or discretionary LFOs  except restitution or victim penalty assessment. <
                    /p> <
                    p >
                    State v.Tedder, 194 Wn.App 753(2016); {
                        ` `
                    } <
                    a style = {
                        styles.link
                    }
                    href = "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.777"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    onClick = {
                        () =>
                        trackLinkClick("9.94A.777", "mental_illness_info")
                    } >
                    RCW 9.94 A .777 <
                    /a>
                    . <
                    /p> <
                    p >
                    Note: DOC supervision fees are discretionary. {
                        " "
                    } <
                    a style = {
                        styles.link
                    }
                    href = "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.703"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    onClick = {
                        () =>
                        trackLinkClick("9.94A.703", "supervision_fees_info")
                    } >
                    RCW 9.94 A .703 <
                    /a>
                    . <
                    /p> <
                    /div>
                ) : indigent ? ( <
                    div className = "alert" >
                    <
                    p > Defendant is indigent. < /p> <
                    /div>
                ) : ( <
                    div >
                    <
                    p > State Poverty Level
                    for family of {
                        householdSize
                    }
                    is: < /p> <
                    p > $ {
                        povertyLevel
                    }
                    annually or < /p> <
                    p > $ {
                        monthlyPovertyLevel
                    }
                    monthly < /p> <
                    hr / >
                    <
                    div className = "alert" >
                    <
                    span >
                    Defendant 's monthly income is{" "} <
                    span className = "bold underline" >
                    $ {
                        formatNum(monthlyPovertyLevel - monthlyIncome)
                    }
                    lower <
                    /span>{" "}
                    than state 's poverty level. <
                    /span> <
                    /div> <
                    /div>
                )
            } <
            /div>
        );
    }
}

export default ScreeningAlert;



// WEBPACK FOOTER //
// ./src/components/ScreeningPage/ScreeningAlert.js