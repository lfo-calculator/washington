import fines from "../LFOs/fines";

const charges = [{
        name: "VEHICULAR HOMICIDE UNDER INFLUENCE OR RECKLESS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46", "AV", "ER"],
        rcws: [{
            num: "46.61.520",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.520"
        }]
    },
    {
        name: "VEHICULAR ASSAULT OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46", "AV", "ER"],
        rcws: [{
                num: "46.61.522",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.522"
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020"
            }
        ]
    },
    {
        name: "CONFIDENTIAL DRIVING RECORD VIOLATION (INTENTIONAL)",
        type: "F",
        lfos: [fines[133]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.52.130(6)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.130"
        }, ]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaTitle46AndAv.js