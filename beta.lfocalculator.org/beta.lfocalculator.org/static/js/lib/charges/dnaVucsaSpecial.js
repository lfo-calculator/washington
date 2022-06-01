import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "CONTROLLED SUBSTANCE (MANUFACTURE/DELIVER) VIOLATION SECTION (2)(b) - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[119], csFees[27]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.401(2)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE (MANUFACTURE/DELIVER) VIOLATION SECTION (2)(b) - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[119], csFees[28]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.401(2)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE (MANUFACTURE/DELIVER) VIOLATION SECTION (2)(a) - 1ST OFFENSE or ATTEMPT/CONSPIRACY (VUCSA)",
        type: "F",
        lfos: [fines[120], csFees[27]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.401(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE (MANUFACTURE/DELIVER) VIOLATION SECTION (2)(a) - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[120], csFees[28]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.401(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - DISTRIBUTE TO MINOR (SECTION (1)) - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[121], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.406(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.406"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - DISTRIBUTE TO MINOR (SECTION (1)) - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[121], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.406(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.406"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE (MANUFACTURE/DELIVER) VIOLATION SECTIONS 2(c)-(e) - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[27]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.401(2)(c)-(e)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE (MANUFACTURE/DELIVER) VIOLATION SECTIONS 2(c)-(e) - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[28]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.401(2)(c)-(e)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "POSSESS COUNTERFEIT SUBSTANCE - 1ST OFFENSE (VUCSA)",
        type: "S",
        lfos: [fines[0], csFees[31]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.4011(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4011"
        }]
    },
    {
        name: "POSSESS COUNTERFEIT SUBSTANCE - 2ND OR SUBSEQUENT OFFENSE",
        type: "S",
        lfos: [fines[0], csFees[32]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.4011(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4011"
        }]
    },
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaVucsaSpecial.js