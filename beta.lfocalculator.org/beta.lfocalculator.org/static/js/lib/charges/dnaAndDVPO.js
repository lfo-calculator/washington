import fines from "../LFOs/fines";

const charges = [{
        name: "STALKING - GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.46.110(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.110"
        }]
    },
    {
        name: "(VNCO) NO CONTACT/PROTECT ORDER VIOLATION - ASSAULT - 2 PREV CONVICTIONS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "DVPO"],
        rcws: [{
            num: "26.50.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.50.110"
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaAndDVPO.js