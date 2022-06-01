import React, {
    Component
} from "react";
import _ from "lodash";
import Toggle from "material-ui/Toggle";
import {
    calculateProbation
} from "../../../../lib/helpers";
import "./ProbationCalc.css";

const styles = {
    toggleStyle: {
        padding: "10px 0 0px 10px"
    },
    labelStyle: {
        fontWeight: "bold"
    },
    link: {
        textDecoration: "none",
        color: "#1FBCD2",
        display: "table",
        height: "20px",
        left: "55px",
        position: "relative"
    }
};

class ProbationCalculator extends Component {
    handleToggle = e => {
        const {
            probation,
            updateState
        } = this.props;
        probation.enabled = !probation.enabled;
        window.woopra.track("probation_calculator", {
            enabled: probation.enabled
        });
        updateState({
            probation
        });
    };

    handleChange = e => {
        const {
            probation,
            updateState
        } = this.props;
        const key = e.target.name;
        const value = e.target.value || 0;
        _.set(probation, key, value);
        updateState({
            probation
        });
    };

    render() {
        const {
            probation
        } = this.props;
        const {
            enabled,
            types,
            costEntry
        } = probation;
        const {
            monthsActve,
            monitored,
            recordsCheck
        } = types;
        const probationTotal = calculateProbation(probation);

        return ( <
            div id = "probation-calculator"
            className = "summary-component black-border" >
            <
            Toggle toggled = {
                enabled
            }
            onToggle = {
                this.handleToggle
            }
            label = "Include Probation"
            labelPosition = "right"
            labelStyle = {
                styles.labelStyle
            }
            style = {
                styles.toggleStyle
            }
            /> <
            a style = {
                styles.link
            }
            href = "http://app.leg.wa.gov/rcw/default.aspx?cite=10.64.120"
            rel = "noopener noreferrer"
            target = "_blank" >
            (RCW 10.64 .120) <
            /a> {
                enabled && ( <
                    div >
                    <
                    div className = "probation-calculation" >
                    <
                    span > Months Active < /span> <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        monthsActve.rate || ""
                    }
                    className = "probation-entry"
                    name = "types.monthsActve.rate"
                    type = "number"
                    placeholder = "$/month" /
                    >
                    <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        monthsActve.time || ""
                    }
                    className = "probation-entry"
                    name = "types.monthsActve.time"
                    type = "number"
                    placeholder = "months" /
                    >
                    <
                    /div> <
                    div className = "probation-calculation" >
                    <
                    span > Monitored < /span> <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        monitored.rate || ""
                    }
                    className = "probation-entry"
                    name = "types.monitored.rate"
                    type = "number"
                    placeholder = "$/year" /
                    >
                    <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        monitored.time || ""
                    }
                    className = "probation-entry"
                    name = "types.monitored.time"
                    type = "number"
                    placeholder = "years" /
                    >
                    <
                    /div> <
                    div className = "probation-calculation" >
                    <
                    span > Records Check < /span> <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        recordsCheck.rate || ""
                    }
                    className = "probation-entry"
                    name = "types.recordsCheck.rate"
                    type = "number"
                    placeholder = "$/year" /
                    >
                    <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        recordsCheck.time || ""
                    }
                    className = "probation-entry"
                    name = "types.recordsCheck.time"
                    type = "number"
                    placeholder = "years" /
                    >
                    <
                    /div> <
                    div className = "probation-calculation" >
                    <
                    span > Enter Cost < /span> <
                    input onChange = {
                        this.handleChange
                    }
                    value = {
                        costEntry || ""
                    }
                    className = "probation-entry"
                    name = "costEntry"
                    type = "number"
                    placeholder = "$" /
                    >
                    <
                    input className = "probation-entry probation-hide"
                    disabled = {
                        true
                    }
                    /> <
                    /div> <
                    div className = "probation-to-pay" >
                    <
                    span > To Pay: $ {
                        probationTotal
                    } < /span> <
                    /div> <
                    /div>
                )
            } <
            /div>
        );
    }
}

export default ProbationCalculator;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/ProbationCalc/ProbationCalc.js