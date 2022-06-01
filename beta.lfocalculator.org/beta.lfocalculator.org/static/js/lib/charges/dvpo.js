import fines from "../LFOs/fines";

const charges = [{
        name: "VIOLATE TEMPORARY ORDER OF PROTECTION",
        type: "G",
        lfos: [fines[0]],
        tags: ["DVPO"],
        rcws: [{
            num: "26.50.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.50.110"
        }]
    },
    {
        name: "(VNCO) NO CONTACT/PROTECT ORDER VIOLATION",
        type: "G",
        lfos: [fines[0]],
        tags: ["DVPO"],
        rcws: [{
            num: "26.50.110(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.50.110"
        }]
    },
    {
        name: "VIOLATE HARASSMENT NO CONTACT ORDER",
        type: "G",
        lfos: [fines[0]],
        tags: ["DVPO"],
        rcws: [{
            num: "9A.46.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.040"
        }]
    },
    {
        name: "VIOLATE ORDER RESTRICTING CONTACT",
        type: "G",
        lfos: [fines[0]],
        tags: ["DVPO"],
        rcws: [{
            num: "9A.46.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.080"
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dvpo.js