import React, {
    Component
} from "react";

class IndigencyInfo extends Component {
    pcrSRA = () => {
        const {
            linkStyle,
            trackLinkClick,
            court
        } = this.props;

        if (court === "superior")
            return ( <
                div >
                <
                p >
                Under the Sentencing Reform Act(SRA), in determining whether the offender has the current ability to pay, the court shall inquire into and consider:
                <
                /p> <
                div > (i) The offender 's income and assets; </div> <
                div >
                (ii) the offender 's basic living costs as defined by{" "} <
                a style = {
                    linkStyle
                }
                href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.101.010"
                target = "_blank"
                rel = "noopener noreferrer"
                onClick = {
                    () => trackLinkClick("10.101.010", "pcr_info")
                } >
                RCW 10.101 .010 <
                /a>{" "}
                and other liabilities including child support and other legal financial obligations; and {
                    " "
                } <
                /div> <
                div >
                (iii) the offender 's bona fide efforts to acquire additional
                resources.An offender who is indigent as defined by {
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
                RCW 10.101 .010(3)(a) through(c) <
                /a>{" "}
                is presumed to lack the current ability to pay. <
                /div> <
                div >
                <
                a style = {
                    linkStyle
                }
                href = "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94B.040"
                target = "_blank"
                rel = "noopener noreferrer"
                onClick = {
                    () => trackLinkClick("9.94B.040", "pcr_info")
                } >
                RCW 9.94 B .040 <
                /a>, {
                    " "
                } <
                a style = {
                    linkStyle
                }
                href = "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.6333"
                target = "_blank"
                rel = "noopener noreferrer"
                onClick = {
                    () => trackLinkClick("9.94A.6333", "pcr_info")
                } >
                9.94 A .6333 <
                /a> <
                /div> <
                /div>
            );
    };

    statement = () => {
        const {
            pcr,
            linkStyle,
            trackLinkClick
        } = this.props;

        if (pcr) {
            return ( <
                p >
                The defendant is presumed to lack the current ability to pay
                if the defendant is indigent as defined in {
                    " "
                } <
                a style = {
                    linkStyle
                }
                href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.101.010"
                target = "_blank"
                rel = "noopener noreferrer"
                onClick = {
                    () => trackLinkClick("10.101.010(3)", "indigent_info")
                } >
                RCW 10.101 .010(3) <
                /a>{" "}
                by receiving any of the following:
                <
                /p>
            );
        } else {
            return ( <
                p >
                Is the defendant indigent as defined in {
                    " "
                } <
                a style = {
                    linkStyle
                }
                href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.101.010"
                target = "_blank"
                rel = "noopener noreferrer"
                onClick = {
                    () => trackLinkClick("10.101.010(3)", "indigent_info")
                } >
                RCW 10.101 .010(3) <
                /a>{" "}
                by receiving any of the following ? (Even
                    if defendant does not meet the definition of indigency under {
                        " "
                    } <
                    a style = {
                        linkStyle
                    }
                    href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.101.010"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    onClick = {
                        () =>
                        trackLinkClick("10.101.010(3)(a)-(c)", "indigent_info")
                    } >
                    RCW 10.101 .010(3)(a) - (c) <
                    /a>, courts shall take into account the financial resources of the defendant and the nature of the burden that payment of costs will impose.) <
                /p>
            );
        }
    };

    render() {
        const {
            pcr,
            linkStyle,
            trackLinkClick
        } = this.props;

        return ( <
            div > {
                this.statement()
            } <
            ul className = "indigent-list" >
            <
            li > Temporary assistance
            for needy families < /li> <
            li > Aged, blind, or disabled assistance benefits < /li> <
            li >
            Medical Care Benefits under {
                " "
            } <
            a style = {
                linkStyle
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=74.09.035"
            target = "_blank"
            rel = "noopener noreferrer"
            onClick = {
                () => trackLinkClick("74.09.035", "indigent_info")
            } >
            RCW 74.09 .035 <
            /a> <
            /li> <
            li > Pregnant women assistance benefits < /li> <
            li > Poverty - related veterans ' benefits</li> <
            li > Food stamps or food stamp benefits transferred electronically < /li> <
            li > Refugee resettlement benefits < /li> <
            li > Medicaid < /li> <
            li > Supplemental security income < /li> <
            li > Involuntarily committed to a public mental health facility < /li> <
            li >
            Annual income, after taxes, of 125 % or less of the current federally established poverty level.(Enter data income / household data to determine poverty level.) <
            /li> <
            /ul> {
                pcr && ( <
                    div >
                    <
                    p >
                    Even
                    if defendant does not meet the definition of indigency under {
                        " "
                    } <
                    a style = {
                        linkStyle
                    }
                    href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.101.010"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    onClick = {
                        () =>
                        trackLinkClick("10.101.010(3)(a)-(c)", "indigent_info")
                    } >
                    RCW 10.101 .010(3)(a) - (c) <
                    /a>, courts shall take into account the financial resources of the defendant and the nature of the burden that payment of costs will impose. <
                    /p> {
                        this.pcrSRA()
                    } <
                    p > Is the defendant indigent ? < /p> <
                    /div>
                )
            } <
            /div>
        );
    }
}

export default IndigencyInfo;



// WEBPACK FOOTER //
// ./src/components/ScreeningPage/IndigencyInfo.js