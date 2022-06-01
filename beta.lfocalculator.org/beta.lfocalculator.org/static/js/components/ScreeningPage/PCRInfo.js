import React from "react";

function pcrCosts(props) {
    const {
        linkStyle,
        trackLinkClick
    } = props;
    return ( <
        li className = "post-conviction" >
        <
        strong > Costs < /strong> <
        span >
        Defendant who is not in contumacious
        default in the payment thereof may at any time after release from total confinement petition the sentencing court
        for remission of the payment of cost or any unpaid portion thereof. {
            " "
        } <
        a style = {
            linkStyle
        }
        href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        target = "_blank"
        rel = "noopener noreferrer"
        onClick = {
            () => trackLinkClick("10.01.160", "pcr_info")
        } >
        RCW 10.01 .160(4) <
        /a> <
        /span> <
        /li>
    );
}

function pcrInterest(props) {
    const {
        linkStyle,
        trackLinkClick
    } = props;
    return ( <
        li className = "post-conviction" >
        <
        strong > Interest < /strong> <
        span >
        Offender may, following release from total confinement, motion to reduce or waive the interest on LFOs levied as a result of a criminal conviction as follows:
        <
        div >
        (a) The court shall waive all interest on the portions of the LFOs that are not restitution that accrued prior to June 7, 2018; <
        /div> <
        div >
        (b) The court may reduce interest on the restitution portion of the LFOs only
        if the principal has been paid in full. {
            " "
        } <
        a style = {
            linkStyle
        }
        href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.82.090"
        target = "_blank"
        rel = "noopener noreferrer"
        onClick = {
            () => trackLinkClick("10.82.090", "pcr_info")
        } >
        RCW 10.82 .090(2) <
        /a> <
        /div> <
        /span> <
        /li>
    );
}

function pcrOtherLFOs(props) {
    const {
        linkStyle,
        trackLinkClick,
        court
    } = props;
    if (court === "clj")
        return ( <
            li className = "post-conviction last" >
            <
            strong > Other LFOs < /strong> <
            span >
            District court[s] may at the time of sentencing or at any time thereafter suspend a portion of all of a fine or penalty. {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=3.62.010"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("3.62.010", "pcr_info")
            } >
            RCW 3.62 .010 <
            /a> <
            div >
            Municipal Courts may suspend all or a portion of a defendant’ s sentence. {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=35.20.255"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("35.20.255", "pcr_info")
            } >
            RCW 35.20 .255(1) <
            /a>, {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=3.50.320"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("3.50.320", "pcr_info")
            } >
            RCW 3.50 .320 <
            /a> <
            /div> <
            div >
            Any time before entering an order terminating probation, the court may revoke or modify its order suspending the imposition or execution of the sentence. {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=3.66.069"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("3.66.069", "pcr_info")
            } >
            RCW 3.66 .069 <
            /a>
            . <
            /div> <
            /span> <
            /li>
        );
}

function PCRInfo(props) {
    const {
        pcr,
        linkStyle,
        trackLinkClick,
        court
    } = props;

    if (pcr) {
        return ( <
            div >
            <
            p > When can defender motion
            for post - conviction relief of LFOs ? < /p> {
                pcrCosts(props)
            } {
                pcrInterest(props)
            } {
                pcrOtherLFOs(props)
            } <
            p >
            If defendant is homeless or mentally ill, as defined in {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=71.24.025"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("71.24.025", "pcr_info")
            } >
            RCW 71.24 .025 <
            /a>, failure to pay LFOs is not willful contempt and the court shall not subject the defendant to penalties.— {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.180"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("10.01.180(3)(c)", "pcr_info")
            } >
            RCW 10.01 .180(3)(c) <
            /a>
            . <
            /p> <
            p >
            If
            default of payment of fines, penalty, assessment {
                court === "superior" && " (except victim penalty assessment)"
            }, fee or costs is not willful, courts can :
            <
            /p> <
            ul >
            <
            li > Allow additional time
            for payment < /li> <
            li > Reduce the amount thereof or of each installment < /li> <
            li >
            Revoke the fine, penalty, assessment, fee, or costs or the unpaid portion thereof in whole or in part <
            /li> <
            li >
            Convert the unpaid fine, penalty, assessment, fee, or costs to community restitution hours,
            if the jurisdiction operates a community restitution program, at the rate of no less than the state minimum wage
            for each hour of community restitution <
            /li> <
            /ul>

            <
            p > When should the court consider remission ? < /p> <
            div > “If a person has no present or future ability to pay amounts that will actually pay off their LFOs, remission in accordance with {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("10.01.160", "pcr_info")
            } >
            RCW 10.01 .160(4) <
            /a>{" "}
            is a more appropriate and just option.”City of Richland v.Wakefield,
            186 Wn .2 d 596(2016) <
            /div> <
            /div>
        );
    } else {
        return null;
    }
}

export default PCRInfo;



// WEBPACK FOOTER //
// ./src/components/ScreeningPage/PCRInfo.js