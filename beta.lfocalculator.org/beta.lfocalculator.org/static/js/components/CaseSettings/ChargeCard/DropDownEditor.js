import React, {
    Component
} from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
    selectField: {
        width: "100%"
    }
};

class DropDownEditor extends Component {
    handleChange = (e, index, value) => {
        const {
            updateOption,
            optionIdx
        } = this.props;
        updateOption(value, optionIdx);
    };

    render() {
        const {
            option
        } = this.props;

        return ( <
            SelectField floatingLabelText = {
                option.label
            }
            value = {
                option.value
            }
            style = {
                styles.selectField
            }
            onChange = {
                this.handleChange
            } >
            {
                option.menuItems.map(item => ( <
                    MenuItem key = {
                        item
                    }
                    value = {
                        item
                    }
                    primaryText = {
                        item
                    }
                    />
                ))
            } <
            /SelectField>
        );
    }
}

export default DropDownEditor;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/ChargeCard/DropDownEditor.js