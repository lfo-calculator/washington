import fines from "../LFOs/fines";

const charges = [{
        name: "MINOR (DUI) DRIVING UNDER THE INFLUENCE - DRIVER UNDER 21 YEARS OLD CONSUME ALCOHOL/MARIJUANA",
        type: "S",
        lfos: [fines[0]],
        tags: ["TITLE 46", "AV"],
        rcws: [{
            num: "46.61.503",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.503"
        }]
    },
    {
        name: "RECKLESS DRIVING",
        type: "G",
        lfos: [fines[0]],
        tags: ["TITLE 46", "AV"],
        rcws: [{
            num: "46.61.500",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.500"
        }]
    },
    {
        name: "NEGLIGENT DRIVING (NEG) I ",
        type: "S",
        lfos: [fines[0]],
        tags: ["TITLE 46", "AV"],
        rcws: [{
            num: "46.61.5249",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.5249"
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/title46AndAv.js