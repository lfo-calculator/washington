import fines from "../LFOs/fines";

const charges = [{
        name: "RECKLESS ENDANGERMENT - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        tags: ["AV"],
        rcws: [{
                num: "9A.36.050",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.050"
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020"
            }
        ]
    },
    {
        name: "RECKLESS ENDANGERMENT",
        type: "G",
        lfos: [fines[0]],
        tags: ["AV"],
        rcws: [{
            num: "9A.36.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.050"
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/av.js