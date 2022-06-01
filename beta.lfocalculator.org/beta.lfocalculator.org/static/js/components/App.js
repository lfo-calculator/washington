import React, {
    Component
} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import HorizontalStepper from "./HorizontalStepper";
import FlatButton from "material-ui/FlatButton";
import htmlpage from "../assets/aboutus.htm";
import logo from "../assets/mjc-logo.png";
import "./App.css";

const styles = {
    link: {
        fontSize: "small",
        color: "#1FBCD3",
        textDecoration: "none",
    },
};

class App extends Component {
    constructor(props) {
        super(props);

        window.woopra.config({
            domain: process.env.REACT_APP_WOOPRA_DOMAIN,
        });
        window.woopra.track();

        const isIE = !!navigator.userAgent.match(/Trident/g) ||
            !!navigator.userAgent.match(/MSIE/g);

        this.state = {
            open: isIE,
        };
    }

    handleClose = () => this.setState({
        open: false
    });

    handleAboutUsClick = () => {
        window.woopra.track("help_link", {
            link_name: "about_us"
        });
    };

    handleFeedbackClick = () => {
        window.woopra.track("help_link", {
            link_name: "feedback"
        });
    };

    handleReloadClick = () => {
        window.location.reload();
    };

    render() {
        const actions = [ <
            FlatButton label = "Close"
            primary = {
                true
            }
            onClick = {
                this.handleClose
            }
            />,
        ];

        return ( <
            MuiThemeProvider >
            <
            div >
            <
            div id = "lfo-version" > 1.2 .7 < /div> <
            header className = "App-header" >
            <
            div className = "logo-container hidden" >
            <
            img src = {
                logo
            }
            id = "logo"
            alt = "logo"
            height = "20%" / >
            <
            /div> <
            a className = "title-grouping"
            href = "https://www.lfocalculator.org/" >
            <
            h1 className = "App-title" > LFO Calculator < /h1> <
            h2 > (State of Washington) < /h2> <
            /a> <
            div id = "new-ver-notify" >
            A new version of this app is available.Click {
                " "
            } <
            FlatButton label = "here"
            onClick = {
                this.handleReloadClick
            }
            /> to
            update. <
            /div> <
            /header> <
            Dialog title = "Browser Compatibility"
            actions = {
                actions
            }
            modal = {
                false
            }
            open = {
                this.state.open
            }
            onRequestClose = {
                this.handleClose
            } >
            <
            p >
            Oops!It looks like you are using Internet Explorer and this is not a supported browser.Please use Microsoft Edge, Google Chrome,
            Apple Safari or Mozilla Firefox.If you would like to download and install Google Chrome, please follow the instructions {
                " "
            } <
            a style = {
                styles.link
            }
            rel = "noopener noreferrer"
            href = "http://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en"
            target = "_blank" >
            HERE <
            /a>
            . <
            /p> <
            /Dialog> <
            HorizontalStepper / >
            <
            footer id = "footer" >
            <
            FlatButton label = "Home"
            primary = {
                true
            }
            href = "https://www.lfocalculator.org/" /
            >
            <
            FlatButton label = "About Us / FAQs"
            primary = {
                true
            }
            href = {
                htmlpage
            }
            target = "_blank"
            onClick = {
                this.handleAboutUsClick
            }
            /> <
            FlatButton label = "Feedback"
            primary = {
                true
            }
            href = "mailto:feedback@lfocalculator.org"
            onClick = {
                this.handleFeedbackClick
            }
            /> <
            /footer> <
            /div> <
            /MuiThemeProvider>
        );
    }
}

export default App;



// WEBPACK FOOTER //
// ./src/components/App.js