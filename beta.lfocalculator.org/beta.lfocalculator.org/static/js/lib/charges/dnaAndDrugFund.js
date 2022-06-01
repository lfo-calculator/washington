import fines from "../LFOs/fines";

const charges = [{
        name: "IMITATION CONTROLLED SUBSTANCE INTENT DISTRIBUTE or ATTEMPT/CONSPIRACY (VUCSA)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.52.030(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.52.030"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "USE OF BUILDING FOR DRUG PURPOSES",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.53.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.53.010"
        }]
    },
    {
        name: "FORTIFICATION OF BUILDING",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.53.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.53.020"
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaAndDrugFund.js