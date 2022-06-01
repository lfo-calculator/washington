import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "PATRONIZING A PROSTITUTE - NO PRIORS",
        type: "S",
        lfos: [fines[0], csFees[13]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.110",
        }, ],
    },
    {
        name: "PATRONIZING A PROSTITUTE - 2 OR MORE PRIORS",
        type: "S",
        lfos: [fines[0], csFees[14]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.110",
        }, ],
    },
    {
        name: "PATRONIZING A PROSTITUTE - ONE PRIOR",
        type: "S",
        lfos: [fines[0], csFees[15]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.110",
        }, ],
    },
    {
        name: "ANIMAL CRUELTY I",
        type: "F",
        lfos: [fines[0], csFees[16]],
        tags: ["DNA"],
        rcws: [{
            num: "16.52.205",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.205",
        }, ],
    },
    {
        name: "TRAFFICKING I",
        type: "F",
        lfos: [fines[0], csFees[17]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.40.100(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.100",
        }, ],
    },
    {
        name: "TRAFFICKING II",
        type: "F",
        lfos: [fines[0], csFees[17]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.40.100(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.100",
        }, ],
    },
    {
        name: "PROMOTING PROSTITUTION I - 2 OR MORE PRIORS",
        type: "F",
        lfos: [fines[0], csFees[18]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.070",
        }, ],
    },
    {
        name: "PROMOTING PROSTITUTION II - 2 OR MORE PRIORS",
        type: "F",
        lfos: [fines[0], csFees[18]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.080",
        }, ],
    },
    {
        name: "PROMOTING PROSTITUTION I - NO PRIORS",
        type: "F",
        lfos: [fines[0], csFees[19]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.070",
        }, ],
    },
    {
        name: "PROMOTING PROSTITUTION - NO PRIORS",
        type: "F",
        lfos: [fines[0], csFees[19]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.080",
        }, ],
    },
    {
        name: "INDECENT EXPOSURE PREVIOUS CONVICTION",
        type: "F",
        lfos: [fines[0], csFees[20]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.010(2)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.010",
        }, ],
    },
    {
        name: "INDECENT EXPOSURE",
        type: "S",
        lfos: [fines[0], csFees[7]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.010(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.010",
        }, ],
    },
    {
        name: "INDECENT EXPOSURE WITH SEXUAL MOTIVATION",
        type: "S",
        lfos: [fines[0], csFees[7]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.88.010(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.010",
            },
            {
                num: "9.94A.835",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.835",
            },
        ],
    },
    {
        name: "PROMOTING PROSTITUTION I - ONE PRIOR",
        type: "F",
        lfos: [fines[0], csFees[21]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.070",
        }, ],
    },
    {
        name: "PROMOTING PROSTITUTION II - ONE PRIOR",
        type: "F",
        lfos: [fines[0], csFees[21]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.88.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.080",
        }, ],
    },
    {
        name: "COMMERCIAL SEXUAL ABUSE OF MINOR or ATTEMPT",
        type: "F",
        lfos: [fines[0], csFees[22]],
        tags: ["DNA"],
        rcws: [{
                num: "9.68A.100",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.100",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PROMOTING COMMERCIAL SEX ABUSE OF MINOR",
        type: "F",
        lfos: [fines[0], csFees[22]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.101",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.101",
        }, ],
    },
    {
        name: "PROMOTING TRAVEL FOR COMMERCIAL SEX ABUSE OF MINOR",
        type: "F",
        lfos: [fines[0], csFees[22]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.102",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.102",
        }, ],
    },
    {
        name: "HARMING A POLICE DOG/HORSE",
        type: "F",
        lfos: [fines[0], csFees[23]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.200",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.200",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING BIG GAME I",
        type: "F",
        lfos: [fines[0], csFees[24]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.410(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.410",
        }, ],
    },
    {
        name: "SPOTLIGHTING BIG GAME I",
        type: "F",
        lfos: [fines[0], csFees[24]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.450(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.450",
        }, ],
    },
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaAndCsFee.js