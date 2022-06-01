import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "CREATE/DELIVER COUNTERFEIT SUBSTANCE - 1ST OFFENSE (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.4011(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4011"
        }]
    },
    {
        name: "POSSESS CONTROLLED SUBSTANCE - NO PRESCRIPTION - 1ST OFFENSE (VUCSA)",
        type: "S",
        lfos: [fines[0], csFees[25]],
        tags: ["VUCSA"],
        rcws: [{
            num: "69.50.4013",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"
        }]
    },
    {
        name: "MARIJUANA UNDER 21 YEARS OLD POSSESS/MANUFACTURE/SELL - 1ST OFFENSE or ATTEMPT/CONSPIRACY",
        type: "S",
        lfos: [fines[0], csFees[25]],
        tags: ["VUCSA"],
        rcws: [{
            num: "69.50.4013(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"
        }]
    },
    {
        name: "CONTROLLED SUBSTANCE -TRANSACTION INVOLVES MINOR - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.4015(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4015"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - DISTRIBUTE TO MINOR (SECTION (2)) - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.406(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.406"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - HOMICIDE - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.415(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.415"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CREATE/DELIVER COUNTERFEIT SUBSTANCE - 2ND OR SUBSEQUENT OFFENSE (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.4011(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4011"
        }]
    },
    {
        name: "POSSESS CONTROLLED SUBSTANCE - NO PRESCRIPTION - 2ND OR SUBSEQUENT OFFENSE (VUCSA)",
        type: "S",
        lfos: [fines[0], csFees[26]],
        tags: ["VUCSA"],
        rcws: [{
            num: "69.50.4013",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"
        }]
    },
    {
        name: "MARIJUANA UNDER 21 YEARS OLD POSSESS/MANUFACTURE/SELL - 2ND OR SUBSEQUENT OFFENSE",
        type: "S",
        lfos: [fines[0], csFees[26]],
        tags: ["VUCSA"],
        rcws: [{
            num: "69.50.4013(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"
        }]
    },
    {
        name: "CONTROLLED SUBSTANCE - TRANSACTION INVOLVES MINOR - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.4015(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4015"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - DISTRIBUTE TO MINOR (SECTION (2)) - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.406.(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.406"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - HOMICIDE - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[0], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.415(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.415"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaDrugFundAndCsFee.js