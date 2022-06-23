const lfos = [
    // all general lfos for clj and superior
    {
        // 0
        name: "Conviction Fee",
        waiveIfIndigent: true,
        mandatory: true,
        impose: true,
        default: 43,
        max: 43,
        setAmount: 43,
        rcws: [{
            num: "3.62.085",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=3.62.085"
        }],
        notes: "Shall not be imposed on a defendant who is indigent as defined in RCW 10.101.010(3) (a) through (c).",
        suspendable: true
    },
    {
        // 1
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.58.280(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
        }, ],
        default: 25,
        min: 25,
        max: 250,
        manMin: 25,
        mandatory: true,
        impose: true,
        setAmount: 25,
        suspendable: true,
        notes: "Shall be fined not less than $25 and not more than $250.",
    }
];

export default lfos;