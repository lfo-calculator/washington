import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "CONTROLLED SUBSTANCE PRACTITIONER DESPENSE VIOLATION - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[122], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.402(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.402"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "MAINTAIN DWELLING/VEHICLE FOR CONTROLLED SUBSTANCE - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY (VUCSA)",
        type: "F",
        lfos: [fines[122], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.402(1)(f)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.402"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - FALSE INFORMATION VIOLATION - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[123], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.403(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE OBTAIN/ATTEMPT BY FRAUD/FORGERY - 2ND OR SUBSEQUENT OFFENSE (VUCSA)",
        type: "F",
        lfos: [fines[123], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.403(1)(c)(i)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403"
        }]
    },
    {
        name: "CONTROLLED SUBSTANCE FALSE/FORGED PRESCRIPTION - 2ND OR SUBSTEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[123], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.403(1)(e)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED/COUNTERFEIT SUBSTANCE - SELL FOR PROFIT - 2ND OR SUBSEQUENT OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[124], csFees[26]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.410(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.410"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE PRACTITIONER DESPENSE VIOLATION - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[122], csFees[25]],
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
        name: "MAINTAIN DWELLING/VEHICLE FOR CONTROLLED SUBSTANCE - 1ST OFFENSE or ATTEMPT/CONSPIRACY (VUCSA)",
        type: "F",
        lfos: [fines[122], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.402(1)(f)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.402"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - FALSE INFORMATION VIOLATION - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[123], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.403(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE - OBTAIN/ATTEMPT BY FRAUD/FORGERY - 1ST OFFENSE  (VUCSA)",
        type: "F",
        lfos: [fines[123], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.403(1)(c)(i)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403"
        }]
    },
    {
        name: "CONTROLLED SUBSTANCE - FALSE/FORGED PRESCRIPTION - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[123], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.403(1)(e)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED SUBSTANCE (PRESCRIPTIONS) -DISPENSE/DISTRIBUTE - 1ST OFFENSE (VUCSA)",
        type: "F",
        lfos: [fines[125]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.308",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.308"
        }]
    },
    {
        name: "CONTROLLED SUBSTANCE (PRESCRIPTIONS) -DISPENSE/DISTRIBUTE - 2ND OR SUBSEQUENT OFFENSE (VUCSA)",
        type: "F",
        lfos: [fines[126]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.308",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.308"
        }]
    },
    {
        name: "CONTROLLED SUBSTANCE TRADEMARK VIOLATION or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[127]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.416",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.416"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "CONTROLLED/COUNTERFEIT SUBSTANCE -SELL FOR PROFIT - 1ST OFFENSE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[124], csFees[25]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.410(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.410"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
    {
        name: "METHAMPHETAMINE - INTENT TO MANUFACTURE or ATTEMPT/CONSPIRACY  (VUCSA)",
        type: "F",
        lfos: [fines[128]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.440(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.440"
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
// ./src/lib/charges/dnaDrugFundCsFeeAndCsFine.js