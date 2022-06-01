import React, {
    Component
} from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import {
    Card
} from "material-ui/Card";
import ChargeOptions from "./ChargeOptions";
import "./ChargeCard.css";

const styles = {
    link: {
        fontSize: "small",
        color: "#1FBCD3",
        textDecoration: "none"
    },
    dropDownMenu: {
        marginLeft: "-24px"
    }
};

class ChargeCard extends Component {
    trackLinkClick = authority => {
        const {
            name
        } = this.props.charge;
        window.woopra.track("authority_link", {
            name: name,
            link_type: "charge",
            authority_num: authority
        });
    };

    updateType = (event, typeIndex, value) => {
        const {
            updateCharge,
            charge,
            index
        } = this.props;
        charge.type = value;

        window.woopra.track("change_charge_type", {
            charge: charge.name,
            type: charge.type,
            other: charge.other
        });
        updateCharge(charge, index);
    };

    renderRCWS = () => {
        const {
            rcws
        } = this.props.charge;

        if (rcws && rcws.length) {
            return rcws.map((rcw, index) => {
                return ( <
                    a style = {
                        styles.link
                    }
                    href = {
                        rcw.url
                    }
                    key = {
                        index
                    }
                    target = "_blank"
                    onClick = {
                        () => this.trackLinkClick(rcw.num)
                    } >
                    {
                        index === 0 ? "RCW" : ";"
                    } {
                        rcw.num
                    } <
                    /a>
                );
            });
        }
    };

    renderWACs = () => {
        const {
            wacs
        } = this.props.charge;

        if (wacs && wacs.length) {
            return wacs.map((wac, index) => {
                return ( <
                    a style = {
                        styles.link
                    }
                    href = {
                        wac.url
                    }
                    key = {
                        index
                    }
                    target = "_blank"
                    onClick = {
                        () => this.trackLinkClick(wac.num)
                    } >
                    {
                        index === 0 ? "WAC" : ";"
                    } {
                        wac.num
                    } <
                    /a>
                );
            });
        }
    };

    renderOptions = () => {
        const {
            charge,
            index,
            updateCharge
        } = this.props;
        if (charge.options) {
            return ( <
                ChargeOptions charge = {
                    charge
                }
                updateCharge = {
                    updateCharge
                }
                chargeIdx = {
                    index
                }
                />
            );
        }
    };

    renderTypeSelector = () => {
        const {
            charge,
            court
        } = this.props;

        if (charge.other) {
            return ( <
                DropDownMenu value = {
                    charge.type
                }
                onChange = {
                    this.updateType
                }
                style = {
                    styles.dropDownMenu
                }
                underlineStyle = {
                    styles.underlineStyle
                } >
                <
                MenuItem value = "S"
                primaryText = "Simple" / >
                <
                MenuItem value = "G"
                primaryText = "Gross" / > {
                    court === "superior" && < MenuItem value = "F"
                    primaryText = "Felony" / >
                } <
                /DropDownMenu>
            );
        }
    };

    render() {
        const {
            charge,
            deleteCharge,
            index
        } = this.props;

        return ( <
            Card style = {
                {
                    marginBottom: "20px",
                    padding: "16px"
                }
            } >
            <
            div className = "charge-header" >
            <
            h2 style = {
                {
                    fontSize: "16px",
                    fontWeight: "normal",
                    paddingRight: "10px",
                    margin: 0
                }
            } >
            {
                charge.name
            } <
            /h2> {
                this.renderRCWS()
            } {
                this.renderWACs()
            } <
            /div> <
            div className = "delete-charge"
            onClick = {
                () => deleteCharge(index)
            } >
            X <
            /div> {
                this.renderOptions()
            } {
                this.renderTypeSelector()
            } <
            /Card>
        );
    }
}

export default ChargeCard;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/ChargeCard/ChargeCard.js