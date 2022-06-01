import React, {
    Component
} from "react";
import {
    Card,
    CardHeader,
    CardText
} from "material-ui/Card";
import {
    formatNum
} from "../../../lib/helpers";
import LfoItem from "./LfoItem";
import "./LfoGroup.css";

const styles = {
    cardHeader: {
        backgroundColor: "#E0E0E0",
        borderBottom: "1px solid black"
    },
    cardTitle: {
        fontWeight: "600"
    },
    cardText: {
        padding: 0
    }
};

class LfoGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: true
        };
    }

    handleClick = () => {
        const {
            title
        } = this.props;
        const expanded = !this.state.expanded;
        window.woopra.track("expand_lfo_group", {
            group_title: title,
            expanded: expanded
        });

        this.setState({
            expanded
        });
    };

    render() {
        const {
            expanded
        } = this.state;
        const {
            title,
            type,
            lfos,
            updateLFO,
            minWage,
            minWageType,
            updateState
        } = this.props;
        const groupSum = lfos
            .filter(lfo => lfo.impose && !lfo.suspend && !lfo.defer && lfo.setAmount)
            .map(lfo => lfo.setAmount)
            .reduce((a, b) => a + b, 0);

        return ( <
            Card className = "lfo-group"
            expanded = {
                expanded
            }
            containerStyle = {
                {
                    paddingBottom: 0
                }
            } >
            <
            CardHeader onClick = {
                this.handleClick
            }
            style = {
                styles.cardHeader
            }
            titleStyle = {
                styles.cardTitle
            }
            title = {
                `${title} ($${formatNum(groupSum)})`
            }
            showExpandableButton = {
                true
            }
            /> <
            CardText expandable = {
                true
            }
            style = {
                styles.cardText
            } > {
                lfos.map((lfo, index) => {
                    return ( <
                        LfoItem key = {
                            lfo.name
                        }
                        lfo = {
                            lfo
                        }
                        type = {
                            type
                        }
                        index = {
                            index
                        }
                        updateLFO = {
                            updateLFO
                        }
                        minWage = {
                            minWage
                        }
                        minWageType = {
                            minWageType
                        }
                        updateState = {
                            updateState
                        }
                        />
                    );
                })
            } <
            /CardText> <
            /Card>
        );
    }
}

export default LfoGroup;



// WEBPACK FOOTER //
// ./src/components/Calculator/LfoGroup/LfoGroup.js