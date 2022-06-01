import fines from "../LFOs/fines";

const charges = [{
    name: "DUI (DRIVING UNDER THE INFLUENCE) or PHYSICAL CONTROL",
    type: "G",
    dui: true,
    options: [{
            label: "Date of Violation (DOV)",
            type: "dropdown",
            key: "violDate",
            value: "7-23-17 to Present",
            menuItems: [
                "7-23-17 to Present",
                "7-22-11 to 7-22-17",
                "7-24-05 to 7-21-11",
                "7-27-03 to 7-23-05",
                "7-22-01 to 7-26-03",
                "1-1-99 to 7-21-01"
            ]
        },
        {
            label: "Number of Priors",
            type: "dropdown",
            key: "priors",
            value: "No Priors",
            menuItems: ["No Priors", "One Prior", "Two or More Priors"]
        },
        {
            label: "BAC Levels",
            type: "dropdown",
            key: "bac",
            value: "< 0.15 or No Test",
            menuItems: ["< 0.15 or No Test", "> 0.15 or Refusal"]
        }
    ],
    lfos: [fines[129]],
    tags: ["ER", "AV", "TITLE 46"],
    rcws: [{
            num: "46.61.502",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502"
        },
        {
            num: "46.61.504",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504"
        }
    ]
}];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dui.js