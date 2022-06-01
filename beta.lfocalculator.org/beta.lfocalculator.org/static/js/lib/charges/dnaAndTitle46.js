import fines from "../LFOs/fines";

const charges = [{
        name: "DRIVER'S LICENSE - SELL/DELIVER STOLEN",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.20.0921(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921"
        }]
    },
    {
        name: "DRIVER'S LICENSE - MANUFACTURE/SELL/DELIVER FOR FINANCIAL GAIN/INENT TO COMMIT FORGERY/THEFT/IDENTITY THEFT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.20.0921(3)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921"
        }]
    },
    {
        name: "VEHICLE DEALING 2ND OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.70.021(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.021"
        }]
    },
    {
        name: "VEHICLE WRECKER - NO LICENSE SUBSEQUENT OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.80.020(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.020"
        }]
    },
    {
        name: "HIT AND RUN ACCIDENT- DEATH/INJURY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.52.020(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.020"
        }]
    },
    {
        name: "ATTEMPTING ELUDE POLICE VEHICLE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
            num: "46.61.024(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.024"
        }]
    },
    {
        name: "FELONY (DUI) DRIVING UNDER THE INFLUENCE or PHYSICAL CONTROL",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "TITLE 46"],
        rcws: [{
                num: "46.61.502(6)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502"
            },
            {
                num: "46.61.504(6)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504"
            }
        ]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaAndTitle46.js