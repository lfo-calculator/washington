import React, {
    Component
} from "react";
import _ from "lodash";
import OptionInput from "./OptionInput";

class ChargeOptions extends Component {
    updateOption = (val, optionIdx) => {
        const {
            updateCharge,
            chargeIdx
        } = this.props;
        const charge = _.cloneDeep(this.props.charge);

        charge.options[optionIdx].value = val;

        window.woopra.track("edit_charge_option", {
            charge: charge.name,
            option: charge.options[optionIdx].label,
            value: val
        });

        updateCharge(charge, chargeIdx);
    };

    render() {
        const {
            charge
        } = this.props;

        return ( <
            div > {
                charge.options.map((option, index) => {
                    return ( <
                        OptionInput key = {
                            index
                        }
                        option = {
                            option
                        }
                        optionIdx = {
                            index
                        }
                        updateOption = {
                            this.updateOption
                        }
                        />
                    );
                })
            } <
            /div>
        );
    }
}

export default ChargeOptions;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/ChargeCard/ChargeOptions.js