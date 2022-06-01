import React, {
    Component
} from "react";
import Toggle from "material-ui/Toggle";
import Checkbox from "material-ui/Checkbox";
import TextField from "material-ui/TextField";
import {
    formatNum
} from "../../../../lib/helpers";
import "./LfoItem.css";

const styles = {
    toggle: {
        marginBottom: 5,
        fontSize: "small"
    },
    labelStyle: {
        fontWeight: "bold"
    },
    textField: {
        width: 50,
        marginLeft: "15px"
    },
    inputStyle: {
        fontSize: "small"
    },
    hintStyle: {
        fontSize: "small"
    }
};

class LfoItem extends Component {
    constructor(props) {
        super(props);

        const {
            lfo
        } = this.props;
        const initialState = {
            collapse: false
        };
        const state =
            localStorage.getItem(lfo.name) && !lfo.impose ?
            JSON.parse(localStorage.getItem(lfo.name)) :
            initialState;

        this.state = state;
    }

    trackLinkClick = authority => {
        const {
            name
        } = this.props.lfo;
        window.woopra.track("authority_link", {
            name: name,
            link_type: "lfo",
            authority_num: authority
        });
    };

    handleImpose = event => {
        const {
            lfo,
            type,
            index,
            updateLFO
        } = this.props;
        const {
            collapse
        } = this.state;
        const key = event.target.name;

        if (collapse) {
            window.woopra.track("lfo_action", {
                lfo_name: lfo.name,
                action: "collapse_toggle",
                value: false
            });

            this.setState({
                collapse: false
            }, () => {
                localStorage.setItem(lfo.name, JSON.stringify(this.state));
            });
        } else {
            lfo[key] = !lfo[key];
            lfo.setAmount = lfo[key] ? lfo.default : 0;

            window.woopra.track("lfo_action", {
                lfo_name: lfo.name,
                action: "impose_toggle",
                value: lfo.impose
            });

            updateLFO(lfo, type, index);
        }
    };

    handleToggle = event => {
        const {
            lfo,
            type,
            index,
            updateLFO
        } = this.props;
        const key = event.target.name;

        lfo[key] = !lfo[key];

        window.woopra.track("lfo_action", {
            lfo_name: lfo.name,
            action: `${key}_toggle`,
            value: lfo[key]
        });

        updateLFO(lfo, type, index);
    };

    handleChange = event => {
        const {
            lfo,
            type,
            index,
            updateLFO
        } = this.props;
        const setAmount = event.target.value || 0;

        lfo.setAmount = parseFloat(setAmount);
        updateLFO(lfo, type, index);
    };

    handleBlurAmount = e => {
        const {
            lfo
        } = this.props;
        window.woopra.track("lfo_action", {
            lfo_name: lfo.name,
            action: "dollar_amount",
            value: lfo.setAmount
        });
    };

    handleCollapseToggle = event => {
        this.setState(
            prevState => {
                return {
                    collapse: !prevState.collapse
                };
            },
            () => {
                const {
                    lfo,
                    type,
                    index,
                    updateLFO
                } = this.props;
                const {
                    collapse
                } = this.state;

                if (collapse && lfo.impose) {
                    lfo.impose = false;
                    updateLFO(lfo, type, index);
                }

                window.woopra.track("lfo_action", {
                    lfo_name: lfo.name,
                    action: "collapse_toggle",
                    value: collapse
                });

                localStorage.setItem(lfo.name, JSON.stringify(this.state));
            }
        );
    };

    render() {
        const {
            collapse
        } = this.state;
        const {
            lfo,
            minWage,
            updateState
        } = this.props;
        const cshHours = formatNum(lfo.setAmount / minWage);
        const disabled = lfo.disable && "disabled";
        const showdisabled = lfo.showdisabled;
        const toPay =
            (lfo.impose && !lfo.suspend && !lfo.defer && lfo.setAmount) || 0;

        if (collapse || (disabled && !showdisabled)) {
            return ( <
                div className = {
                    `lfo-item ${disabled}`
                } >
                <
                div className = "flex-wrapper" >
                <
                div className = "lfo-info" >
                <
                Checkbox label = {
                    this.props.lfo.name
                }
                labelStyle = {
                    styles.labelStyle
                }
                style = {
                    styles.checkbox
                }
                name = "impose"
                disabled = {
                    lfo.disable
                }
                onCheck = {
                    this.handleImpose
                }
                checked = {
                    lfo.impose
                }
                /> <
                /div> <
                /div> <
                /div>
            );
        }

        return ( <
            div className = {
                `lfo-item ${disabled}`
            } >
            <
            div className = "flex-wrapper" >
            <
            div className = "lfo-info" >
            <
            Checkbox label = {
                this.props.lfo.name
            }
            labelStyle = {
                styles.labelStyle
            }
            name = "impose"
            disabled = {
                lfo.disable
            }
            onCheck = {
                this.handleImpose
            }
            checked = {
                lfo.impose
            }
            /> {
                lfo.rcws && lfo.rcws.length && ( <
                    p className = {
                        `lfo-rcw ${disabled}`
                    } >
                    RCW {
                        lfo.rcws.map((rcw, index) => {
                            if (index === lfo.rcws.length - 1) {
                                return ( <
                                    a className = {
                                        `lfo-rcw ${disabled}`
                                    }
                                    key = {
                                        index
                                    }
                                    href = {
                                        rcw.url
                                    }
                                    target = "_blank"
                                    onClick = {
                                        () => this.trackLinkClick(rcw.num)
                                    } >
                                    {
                                        " "
                                    } {
                                        rcw.num
                                    } {
                                        " "
                                    } <
                                    /a>
                                );
                            } else {
                                return ( <
                                    a className = {
                                        `lfo-rcw ${disabled}`
                                    }
                                    key = {
                                        index
                                    }
                                    href = {
                                        rcw.url
                                    }
                                    target = "_blank"
                                    onClick = {
                                        () => this.trackLinkClick(rcw.num)
                                    } >
                                    {
                                        " "
                                    } {
                                        rcw.num
                                    }; {
                                        " "
                                    } <
                                    /a>
                                );
                            }
                        })
                    } <
                    /p>
                )
            } <
            p className = "lfo-notes"
            dangerouslySetInnerHTML = {
                {
                    __html: this.props.lfo.notes
                }
            } > < /p> <
            /div> <
            div className = "lfo-manipulation" >
            <
            div className = "lfo-entry-container desktop" > {!lfo.valueTbd ? < span > $ < /span> : <span>Amount TBD by DOC</span >
            } {
                !lfo.valueTbd && ( <
                    input className = {
                        `lfo-entry ${disabled}`
                    }
                    onChange = {
                        this.handleChange
                    }
                    onBlur = {
                        this.handleBlurAmount
                    }
                    placeholder = {
                        lfo.default || ""
                    }
                    disabled = {!lfo.impose || lfo.suspend
                    }
                    value = {
                        lfo.setAmount || ""
                    }
                    type = "number" /
                    >
                )
            } <
            /div> <
            div className = "toggles" > {
                lfo.suspendable && ( <
                    Toggle onToggle = {
                        this.handleToggle
                    }
                    name = "suspend"
                    label = "suspend"
                    toggled = {
                        lfo.suspend
                    }
                    disabled = {!lfo.impose || lfo.defer
                    }
                    style = {
                        styles.toggle
                    }
                    />
                )
            } {
                lfo.waiveable && ( <
                    Toggle onToggle = {
                        this.handleToggle
                    }
                    name = "suspend"
                    label = "waived"
                    toggled = {
                        lfo.suspend
                    }
                    disabled = {!lfo.impose || lfo.defer
                    }
                    style = {
                        styles.toggle
                    }
                    />
                )
            } {
                lfo.deferrable && ( <
                    Toggle onToggle = {
                        this.handleToggle
                    }
                    name = "defer"
                    label = "defer"
                    toggled = {
                        lfo.defer
                    }
                    disabled = {!lfo.impose || lfo.suspend
                    }
                    style = {
                        styles.toggle
                    }
                    />
                )
            } {
                lfo.cshAccepted && ( <
                    Toggle onToggle = {
                        this.handleToggle
                    }
                    name = "csh"
                    label = "convert to csh"
                    toggled = {
                        lfo.csh
                    }
                    disabled = {!lfo.impose || lfo.suspend || lfo.defer
                    }
                    style = {
                        styles.toggle
                    }
                    />
                )
            } {
                lfo.collapsible && ( <
                    Toggle onToggle = {
                        this.handleCollapseToggle
                    }
                    name = "collapse"
                    label = "collapse"
                    toggled = {
                        collapse
                    }
                    style = {
                        styles.toggle
                    }
                    />
                )
            }

            {
                lfo.csh && ( <
                    div className = "csh-container" >
                    <
                    TextField type = "number"
                    hintText = {
                        formatNum(minWage)
                    }
                    value = {
                        minWage
                    }
                    floatingLabelText = "$/h"
                    floatingLabelFixed = {
                        true
                    }
                    hintStyle = {
                        styles.hintStyle
                    }
                    style = {
                        styles.textField
                    }
                    inputStyle = {
                        styles.inputStyle
                    }
                    onChange = {
                        e => updateState({
                            minWage: e.target.value
                        })
                    }
                    /> <
                    TextField type = "number"
                    floatingLabelText = "Hours"
                    floatingLabelFixed = {
                        true
                    }
                    value = {
                        cshHours
                    }
                    style = {
                        styles.textField
                    }
                    inputStyle = {
                        styles.inputStyle
                    }
                    /> <
                    /div>
                )
            } <
            /div> <
            /div> <
            /div> <
            div >
            <
            div className = "lfo-entry-container mobile" >
            <
            span > $ < /span> <
            input className = {
                `lfo-entry ${disabled}`
            }
            onChange = {
                this.handleChange
            }
            placeholder = {
                lfo.default || ""
            }
            disabled = {!lfo.impose || lfo.suspend
            }
            value = {
                lfo.setAmount || ""
            }
            type = "number" /
            >
            <
            /div> <
            div className = "lfo-to-pay" > {
                lfo.valueTbd ? ( <
                    span > Amount TBD by DOC < /span>
                ) : ( <
                    span > To Pay: $ {
                        toPay
                    } < /span>
                )
            } <
            /div> <
            /div> <
            /div>
        );
    }
}

export default LfoItem;



// WEBPACK FOOTER //
// ./src/components/Calculator/LfoGroup/LfoItem/LfoItem.js