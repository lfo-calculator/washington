import React, {
    Component
} from "react";
import DropDownEditor from "./DropDownEditor";

class OptionInput extends Component {
    renderDropdownEditor = () => {
        const {
            option,
            updateOption,
            optionIdx
        } = this.props;

        return ( <
            DropDownEditor option = {
                option
            }
            optionIdx = {
                optionIdx
            }
            updateOption = {
                updateOption
            }
            />
        );
    };

    renderDefault = () => < p > Error Loading Options < /p>;

    render() {
        const {
            type
        } = this.props.option;
        let renderEditor;

        switch (type) {
            case "dropdown":
                renderEditor = this.renderDropdownEditor;
                break;
            default:
                renderEditor = this.renderDefault;
                break;
        }

        return <div > {
            renderEditor()
        } < /div>;
    }
}

export default OptionInput;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/ChargeCard/OptionInput.js