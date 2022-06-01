import caseLFOs from "../lib/LFOs";
import _ from "lodash";

const initialState = {
    causeId: "",
    stepIndex: 0,
    pcr: false,
    dv: false,
    court: "clj",
    charges: [],
    lfos: {
        case: _.cloneDeep(caseLFOs.clj)
    },
    indigent: false,
    mentalIllness: false,
    affordLFOs: false,
    statedPayment: "",
    duration: {
        value: 12,
        units: "months"
    },
    probation: {
        enabled: false,
        types: {
            monthsActve: {},
            monitored: {},
            recordsCheck: {}
        }
    },
    minWage: "14.49",
    minWageType: "hourly",
    cr: false,
    thirdPartyPayments: {
        enabled: false,
        setUpFee: 0,
        monthlyFee: 0
    },
    showSaveOptions: false,
    showSaveConfirmation: false,
    showSaveError: false
};

export default initialState;



// WEBPACK FOOTER //
// ./src/lib/initialState.js