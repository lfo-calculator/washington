import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "UNLAWFUL RECREATIONAL FISH I",
        type: "G",
        lfos: [fines[0], csFees[0]],
        rcws: [{
            num: "77.15.370",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.370",
        }, ],
    },
    {
        name: "TAKING PROTECTED FISH/WILDLIFE",
        type: "S",
        lfos: [fines[0], csFees[0]],
        rcws: [{
            num: "77.15.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.130",
        }, ],
    },
    {
        name: "DISTURB SURVEY MONUMENT",
        type: "G",
        lfos: [fines[0], csFees[1]],
        rcws: [{
            num: "58.04.015",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=58.04.015",
        }, ],
    },
    {
        name: "LITTER 1 CUBIC YARD OR MORE",
        type: "G",
        lfos: [fines[0], csFees[2]],
        rcws: [{
            num: "70A.200.060(2)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.200.060",
        }, ],
    },
    {
        name: "DUMP SOLID WASTE 1 CUBIC YARD OR MORE",
        type: "G",
        lfos: [fines[130], csFees[3]],
        rcws: [{
            num: "70A.205.195(3)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.205.195",
        }, ],
    },
    {
        name: "STORING/TRANSPORTING TIRES WITHOUT LICENSE",
        type: "G",
        lfos: [fines[0], csFees[4]],
        rcws: [{
            num: "70A.205.445",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.205.445",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING OF WILD BIRDS I",
        type: "G",
        lfos: [fines[0], csFees[5]],
        rcws: [{
            num: "77.15.400(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.400",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING BIG GAME II",
        type: "G",
        lfos: [fines[0], csFees[6]],
        rcws: [{
            num: "77.15.410(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.410",
        }, ],
    },
    {
        name: "SPOTLIGHTING BIG GAME II",
        type: "G",
        lfos: [fines[0], csFees[6]],
        rcws: [{
            num: "77.15.450(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.450",
        }, ],
    },
    {
        name: "INDECENT EXPOSURE TO PERSON <14",
        type: "G",
        lfos: [fines[0], csFees[7]],
        rcws: [{
            num: "9A.88.010(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.010",
        }, ],
    },
    {
        name: "PROSTITUTION",
        type: "S",
        lfos: [fines[0], csFees[7]],
        rcws: [{
            num: "9A.88.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.030",
        }, ],
    },
    {
        name: "LITTER GREATER THAN 1 CUBIC FOOT BUT LESS THAN 1 CUBIC YARD",
        type: "S",
        lfos: [fines[0], csFees[9]],
        rcws: [{
            num: "70A.200.060(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.200.060",
        }, ],
    },
    {
        name: "DUMP SOLID WASTE 1 CUBIC FOOT - 1 YARD",
        type: "S",
        lfos: [fines[130], csFees[10]],
        rcws: [{
            num: "70A.205.195(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.205.195",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING OF WILD BIRDS II",
        type: "S",
        lfos: [fines[0], csFees[11]],
        rcws: [{
            num: "77.15.400(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.400",
        }, ],
    },
    {
        name: "REIMBURSEMENT OF INSPECTION COST",
        type: "S",
        lfos: [fines[130], csFees[12]],
        rcws: [{
            num: "81.54.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.54.030",
        }, ],
    },
    {
        name: "PERMIT PROSTITUTION - NO PRIORS",
        type: "S",
        lfos: [fines[0], csFees[13]],
        rcws: [{
            num: "9A.88.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.090",
        }, ],
    },
    {
        name: "PERMIT PROSTITUTION - 2 OR MORE PRIORS",
        type: "S",
        lfos: [fines[0], csFees[14]],
        rcws: [{
            num: "9A.88.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.090",
        }, ],
    },
    {
        name: "PERMIT PROSTITUTION - ONE PRIOR",
        type: "S",
        lfos: [fines[0], csFees[15]],
        rcws: [{
            num: "9A.88.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.090",
        }, ],
    },
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/csFee.js