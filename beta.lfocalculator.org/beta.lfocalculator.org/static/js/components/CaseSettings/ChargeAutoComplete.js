import React, {
    Component
} from "react";
import _ from "lodash";
import AutoComplete from "material-ui/AutoComplete";
import fines from "../../lib/LFOs/fines";

const styles = {
    inputStyle: {
        textAlign: "center",
        transform: "translateY(-50%)"
    },
    hintStyle: {
        position: "relative",
        bottom: "-12px",
        textAlign: "center"
    },
    listStyle: {
        maxHeight: 200,
        overflow: "auto",
        width: "1500px"
    }
};

const dataSourceConfig = {
    text: "textKey",
    rcws: "rcws",
    charge: "charge",
    index: "index"
};

class ChargeAutoComplete extends Component {
    addCharge = (chosenRequest, index) => {
        const {
            availableCharges,
            handleShowWarning
        } = this.props;
        this.refs[`autocomplete`].setState({
            searchText: ""
        });
        if (index === -1) {
            chosenRequest = chosenRequest
                .replace(/\s+/g, " ")
                .trim()
                .toUpperCase();
            index = _.findIndex(availableCharges, {
                name: chosenRequest
            });
        }

        if (index === -1) {
            handleShowWarning();

            setTimeout(() => {
                const selectedCharge = {
                    id: new Date().getTime(),
                    name: chosenRequest.toUpperCase(),
                    lfos: [_.cloneDeep(fines[0])],
                    type: "S",
                    other: true
                };
                this.props.addCharge(selectedCharge);
            }, 0);
        } else {
            setTimeout(() => {
                const chargeIndex = index;
                const selectedCharge = _.cloneDeep(availableCharges[chargeIndex]);
                selectedCharge.id = new Date().getTime();
                this.props.addCharge(selectedCharge);
            }, 0);
        }
    };

    filter = (InputedText, name, dataSource) => {
        const compareString = name.toLowerCase();
        const compareRcws = dataSource.charge.rcws ? dataSource.charge.rcws : [];
        const matchedRcws = compareRcws.filter(
            rcw => rcw.num.indexOf(InputedText) !== -1
        );
        const compareWacs = dataSource.charge.wacs ? dataSource.charge.wacs : [];
        const matchedWacs = compareWacs.filter(
            wac => wac.num.indexOf(InputedText) !== -1
        );
        InputedText = InputedText.toLowerCase()
            .replace(/\s+/g, " ")
            .trim();
        return (
            compareString.indexOf(InputedText) !== -1 ||
            matchedRcws.length > 0 ||
            matchedWacs.length > 0
        );
    };

    render() {
        const {
            availableCharges,
            chargesAdded
        } = this.props;
        const charges = availableCharges.map((charge, index) => {
            return {
                textKey: charge.name,
                charge: charge,
                index: index
            };
        });

        return ( <
            AutoComplete ref = {
                "autocomplete"
            }
            hintText = {
                chargesAdded ? "Add Another Crime" : "Type a Crime or RCW"
            }
            filter = {
                this.filter
            }
            openOnFocus = {
                true
            }
            dataSource = {
                charges
            }
            dataSourceConfig = {
                dataSourceConfig
            }
            fullWidth = {
                true
            }
            onNewRequest = {
                this.addCharge
            }
            inputStyle = {
                styles.inputStyle
            }
            hintStyle = {
                styles.hintStyle
            }
            listStyle = {
                styles.listStyle
            }
            menuCloseDelay = {
                100
            }
            />
        );
    }
}

export default ChargeAutoComplete;



// WEBPACK FOOTER //
// ./src/components/CaseSettings/ChargeAutoComplete.js