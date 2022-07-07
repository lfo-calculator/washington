// List from https://app.leg.wa.gov/RCW/default.aspx on 6/27/22

// syntax for applies clause in applies_grammar.pegjs
const lfos = require('./lfos.json');

/*
    // { // TODO: REPRESENT IN CATALA
    //     name: "VICTIMS OF CRIMES—COMPENSATION, ASSISTANCE. Penalty assessments in addition to fine or bail forfeiture—Distribution—Establishment of crime victim and witness programs in county—Contribution required from cities and towns.",
    //     rcw_sources: [
    //         {
    //             url: "https://app.leg.wa.gov/rcw/default.aspx?cite=7.68.035",
    //             num: "7.68.035"
    //         },
    //         {
    //             url: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.760",
    //             num: "9.94A.760"
    //         }

    //     ],
    //     applies: [
    //         {
    //             "type" : "F",
    //             "rcw" : vpa_provisions,
    //             "consequence" : {
    //                 min: 500,
    //                 max: 500,
    //             },
    //             "priority" : 0
    //         },
    //         {
    //             "type" : "G",
    //             "rcw" : vpa_provisions,
    //             "consequence" : {
    //                 min: 500,
    //                 max: 500,
    //             },
    //             "priority" : 0

    //         },
    //         {
    //             "type" : "S",
    //             "rcw" : vpa_provisions,
    //             "consequence" : {
    //                 min: 250,
    //                 max: 250,
    //             },
    //             "priority": 1 // should not be assessed if priority 0 consequences hold
    //         }
    //     ],
    //     mandatory : true,
    //     catala_representation: "",
    //     imposeIfIndigent: true,
    //     unsure_if_lfo: false,
    //     type: "penalty",
    //     stacks: false // only assess once, even if multiple charges
    // },
*/

// THE BELOW COMES FROM THE BETA CALCULATOR
// const lfos = [
//     // all general lfos for clj and superior
//     {
//         // 0
//         name: "Conviction Fee",
//         waiveIfIndigent: true,
//         mandatory: true,
//         impose: true,
//         default: 43,
//         max: 43,
//         setAmount: 43,
//         rcws: [{
//             num: "3.62.085",
//             url: "http://app.leg.wa.gov/rcw/default.aspx?cite=3.62.085"
//         }],
//         notes: "Shall not be imposed on a defendant who is indigent as defined in RCW 10.101.010(3) (a) through (c).",
//         suspendable: true
//     },
//     {
//         // 1
//         name: "Base Fine",
//         pseaApplies: true,
//         rcws: [{
//             num: "70.58.280(2)",
//             url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
//         }, ],
//         default: 25,
//         min: 25,
//         max: 250,
//         manMin: 25,
//         mandatory: true,
//         impose: true,
//         setAmount: 25,
//         suspendable: true,
//         notes: "Shall be fined not less than $25 and not more than $250.",
//     }
// ];

export default lfos;