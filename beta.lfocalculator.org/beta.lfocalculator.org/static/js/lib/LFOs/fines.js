const fines = [{
        // 0
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: "Discretionary.",
        rcws: [{
            num: "9A.20.021",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.20.021",
        }, ],
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
    },
    {
        // 2
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "9.16.035(2)",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        mandatory: true,
        impose: true,
        notes: "Defendant shall be fined an amount up to three times the retail value of the items bearing, or services identified by, a counterfeit mark, unless extenuating circumstances are shown by the defendant.  RCW 9.26.035(6).",
    },
    {
        // 3
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.08.070",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.08.070",
        }, ],
        default: 500,
        min: 500,
        manMin: 500,
        mandatory: true,
        impose: true,
        setAmount: 500,
        suspendable: true,
        notes: "Mandatory fine of not less than $500 per pet animal shall be imposed.",
    },
    {
        // 4
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.08.072",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.08.072",
        }, ],
        default: 500,
        min: 500,
        manMin: 500,
        mandatory: true,
        impose: true,
        setAmount: 500,
        suspendable: true,
        notes: "Mandatory fine of not less than $500 per pet animal shall be imposed.",
    },
    {
        // 5
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "308-56A-030(9)",
            url: "http://app.leg.wa.gov/wac/default.aspx?cite=308-56A-030",
        }, ],
        default: 529,
        max: 529,
        min: 529,
        manMin: 529,
        mandatory: true,
        impose: true,
        setAmount: 529,
        suspendable: true,
        notes: "Punishable by a fine of $259.",
    },
    {
        // 6
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "308-56A-040(7)",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=308-56A-040",
        }, ],
        default: 529,
        max: 529,
        min: 529,
        manMin: 529,
        mandatory: true,
        impose: true,
        setAmount: 529,
        suspendable: true,
        notes: "Punishable by a fine of $259.",
    },
    {
        // 7
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "90.46.260",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=90.46.260",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        max: 10000,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be punished by a fine of up to $10,000 and costs of prosecution.",
    },
    {
        // 8
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "90.48.140",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=90.48.140",
        }, ],
        max: 10000,
        mandatory: true,
        impose: true,
    },
    {
        // 9
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "49.17.190(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=49.17.190",
        }, ],
        max: 10000,
        mandatory: true,
        impose: true,
    },
    {
        // 10
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "49.17.190(4)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=49.17.190",
        }, ],
        max: 10000,
        mandatory: true,
        impose: true,
    },
    {
        // 11
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70A.15.3150",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70A.15.3150",
        }, ],
        max: 10000,
        mandatory: true,
        impose: true,
        notes: 'Not more than $10,000.'
    },
    {
        // 12
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "74.08.331",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=74.08.331",
        }, ],
        max: 1000,
        mandatory: true,
        impose: true,
    },
    {
        // 13
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "76.48.151",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=76.48.151",
        }, ],
        max: 1000,
        mandatory: true,
        impose: true,
    },
    {
        // 14
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.68.060(5)(b)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68.060",
        }, ],
        max: 1000,
        mandatory: true,
        impose: true,
    },
    {
        // 15
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "19.25.020",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=19.25.020",
        }, ],
        max: 25000,
        mandatory: true,
        impose: true,
    },
    {
        // 16
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "51.48.280(4)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=51.48.280",
        }, ],
        max: 25000,
        mandatory: true,
        impose: true,
    },
    {
        // 17
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "14.16.060",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=14.16.060",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 18
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "28A.635.090",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.090",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 19
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "28A.635.100(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.100",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 20
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.180",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=66.44.180",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
        notes: "If the offender convicted of an offense referred to in this section is a corporation, it shall for a first offense be liable to a penalty of not more than $5,000, and for a second or subsequent offense to a penalty of not more than $10,000, or to forfeiture of its corporate license, or both.",
    },
    {
        // 21
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "76.09.190",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.09.190",
        }, ],
        default: 100,
        max: 1000,
        min: 100,
        manMin: 100,
        mandatory: true,
        impose: true,
        setAmount: 100,
        suspendable: true,
    },
    {
        // 22
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9A.56.060(5)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.060",
        }, ],
        default: 375,
        max: 1125,
        min: 375,
        manMin: 375,
        mandatory: true,
        impose: true,
        setAmount: 375,
        suspendable: true,
        notes: "Court shall impose a fine of up to 1,125 for adult offenders. Of the fine imposed, at least $375 or an amount equal to 150% of the amount of the bank check, whichever is greater, shall not be suspended or deferred.",
    },
    {
        // 23
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.140",
        }, ],
        default: 1000,
        min: 1000,
        manMin: 1000,
        mandatory: true,
        impose: true,
        setAmount: 1000,
        suspendable: true,
        notes: "Shall be be fined not less than $1,000.",
    },
    {
        // 24
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.328",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.328",
        }, ],
        default: 2500,
        min: 2500,
        manMin: 2500,
        mandatory: true,
        impose: true,
        setAmount: 2500,
        suspendable: true,
        notes: "Fine of $2,500 shall be imposed.",
    },
    {
        // 25
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.140",
        }, ],
        default: 500,
        min: 500,
        manMin: 500,
        mandatory: true,
        impose: true,
        setAmount: 500,
        suspendable: true,
        notes: "Shall be fined not less than $500.",
    },
    {
        // 26
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9A.50.030(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.50.030",
        }, ],
        default: 500,
        min: 500,
        manMin: 500,
        mandatory: true,
        impose: true,
        setAmount: 500,
        suspendable: true,
        notes: "Shall be punishable for a fine not less than $500.",
    },
    {
        // 27
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9A.50.030(1)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.50.030",
        }, ],
        default: 1000,
        min: 1000,
        manMin: 1000,
        mandatory: true,
        impose: true,
        setAmount: 1000,
        suspendable: true,
        notes: "Shall be punishable for a fine not less than $1,000.",
    },
    {
        // 28
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9A.50.030(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.50.030",
        }, ],
        default: 250,
        min: 250,
        manMin: 250,
        mandatory: true,
        impose: true,
        setAmount: 250,
        suspendable: true,
        notes: "Shall be punishable for a fine not less than $250.",
    },
    {
        // 29
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "47.68.255",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.255",
            },
            {
                num: "47.68.240",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.240",
            },
        ],
        mandatory: true,
        impose: true,
        notes: "Person convicted is also subject to a fine equal to four times the amount of avoided taxes and fees, no part of which may be suspended or deferred.",
    },
    {
        // 30
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "47.68.240(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.240",
        }, ],
        mandatory: true,
        impose: true,
        notes: "In addition to the criminal penalties, defendant is subject to a $100 penalty if aircraft registration is sixty days or more past due.",
    },
    {
        // 31
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.58.280(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
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
    },
    {
        // 32
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.58.280(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
        }, ],
        default: 50,
        min: 50,
        max: 250,
        manMin: 50,
        mandatory: true,
        impose: true,
        setAmount: 50,
        suspendable: true,
        notes: "Shall be fined not less than $50 and not more than $250.",
    },
    {
        // 33
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "9.16.035(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        mandatory: true,
        impose: true,
        notes: "Defendant shall be fined an amount up to three times the retail value of the items bearing, or services identified by, a counterfeit mark, unless extenuating circumstances are shown by the defendant.  RCW 9.26.035(6).",
    },
    {
        // 34
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.91.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.130",
        }, ],
        default: 50,
        min: 50,
        manMin: 50,
        mandatory: true,
        impose: true,
        setAmount: 50,
        suspendable: true,
        notes: "Fine for such violation shall be not less than $50 for each offense. For a second or subsequent violation of this section, such person shall be liable for treble the amount of damages done by the person, but in no event less than two hundred dollars, and such damages may be recovered in a civil action before any district court judge.",
    },
    {
        // 35
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "28A.635.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.070",
        }, ],
        max: 100,
        mandatory: true,
        impose: true,
    },
    {
        // 36
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.47A.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.47A.050",
        }, ],
        max: 100,
        mandatory: true,
        impose: true,
    },
    {
        // 37
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.45.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.070",
        }, ],
        max: 1000,
        mandatory: true,
        impose: true,
    },
    {
        // 38
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.92.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.030",
        }, ],
        max: 1000,
        mandatory: true,
        impose: true,
        notes: "Shall be punished by imprisonment in the county jail for a maximum term fixed by the court of not more than ninety days, or by a fine in an amount fixed by the court of not more than $1,000 or both such imprisonment and fine.",
    },
    {
        // 39
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.20.340",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.340",
        }, ],
        max: 250,
        mandatory: true,
        impose: true,
    },
    {
        // 40
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "18.04.370(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.04.370",
        }, ],
        max: 30000,
        mandatory: true,
        impose: true,
    },
    {
        // 41
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "19.265.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.265.060",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 42
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "35.88.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=35.88.040",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 43
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "61.12.030(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=61.12.030(2)",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 44
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.20.340",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.340",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 45
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.180",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.180",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
        notes: "If the offender convicted of an offense referred to in this section is a corporation, it shall for a first offense be liable to a penalty of not more than $5,000, and for a second or subsequent offense to a penalty of not more than $10,000, or to forfeiture of its corporate license, or both.",
    },
    {
        // 46
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.68.060(5)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68.060",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 47
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.180",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.180",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
        notes: "If the offender convicted of an offense referred to in this section is a corporation, it shall be liable to a penalty of not more than $5,000 or to forfeiture of its corporate license, or both.",
    },
    {
        // 48
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "81.29.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.29.040",
        }, ],
        max: 5000,
        mandatory: true,
        impose: true,
    },
    {
        // 49
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "28A.635.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.030",
        }, ],
        max: 50,
        mandatory: true,
        impose: true,
    },
    {
        // 50
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "16.52.095",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.095",
        }, ],
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 51
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "28A.635.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.010",
        }, ],
        max: 100,
        min: 10,
        default: 10,
        setAmount: 10,
        manMin: 10,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 52
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "81.40.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.40.010",
        }, ],
        max: 500,
        min: 100,
        default: 100,
        setAmount: 100,
        manMin: 100,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 53
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "81.40.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.40.060",
        }, ],
        max: 500,
        min: 100,
        default: 100,
        setAmount: 100,
        manMin: 100,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 54
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "49.12.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=49.12.170",
        }, ],
        min: 25,
        default: 25,
        setAmount: 25,
        manMin: 25,
        mandatory: true,
        impose: true,
        suspendable: true,
        notes: "Defendant shall be pusnished by a fine of not less than $25.",
    },
    {
        // 55
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.290(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.290",
        }, ],
        min: 250,
        default: 250,
        setAmount: 250,
        manMin: 250,
        mandatory: true,
        impose: true,
        suspendable: true,
        cshAccepted: true,
        notes: "Shall impose $250 fine;  any sentence requiring community restitution shall require not fewer than 25 hours.",
    },
    {
        // 56
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.20.200(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.200",
        }, ],
        min: 250,
        default: 250,
        setAmount: 250,
        manMin: 250,
        mandatory: true,
        impose: true,
        suspendable: true,
        cshAccepted: true,
        notes: "Any sentence requiring community restitution shall require not fewer than 25 hours.",
    },
    {
        // 57
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.20.200(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.200",
        }, ],
        min: 250,
        default: 250,
        setAmount: 250,
        manMin: 250,
        mandatory: true,
        impose: true,
        suspendable: true,
        cshAccepted: true,
        notes: "Any sentence requiring community restitution shall require not fewer than 25 hours.",
    },
    {
        // 58
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "81.64.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.64.090",
        }, ],
        max: 200,
        min: 50,
        default: 50,
        setAmount: 50,
        manMin: 50,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 59
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "28A.635.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.040",
        }, ],
        max: 500,
        min: 100,
        default: 100,
        setAmount: 100,
        manMin: 100,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 60
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.58.280(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
        }, ],
        min: 25,
        default: 25,
        setAmount: 25,
        manMin: 25,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 61
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.325",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.325",
        }, ],
        min: 250,
        default: 250,
        setAmount: 250,
        manMin: 250,
        mandatory: true,
        impose: true,
        suspendable: true,
        cshAccepted: true,
        notes: "Any sentence requiring community restitution shall require not fewer than 25 hours",
    },
    {
        // 62
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.58.280(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
        }, ],
        max: 250,
        min: 50,
        default: 50,
        setAmount: 50,
        manMin: 50,
        mandatory: true,
        impose: true,
        suspendable: true,
    },
    {
        // 63
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "36.71.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=36.71.060",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        min: 50,
        max: 250,
        default: 50,
        setAmount: 50,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be punished by jail for not less than 30 days nor more than 90 days or by fine of not less than $50 nor more than $200 or by both.",
    },
    {
        // 64
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "47.52.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.52.120",
        }, ],
        min: 5,
        max: 250,
        default: 5,
        setAmount: 5,
        mandatory: true,
        impose: true,
        suspendable: true,
        notes: "Shall be punished by a fine of not less than $5 nor more than $100, or by imprisonment in the city or county jail for not less than five days nor more than ninety days, or by both fine and imprisonment.",
    },
    {
        // 65
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "70.05.120(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.05.120",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        min: 25,
        max: 100,
        default: 25,
        setAmount: 25,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be subject to a fine of not less than $25 nor more than$100 or to imprisonment in the county jail not to exceed ninety days or to both fine and imprisonment.",
    },
    {
        // 66
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "70.05.120(3)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.05.120",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        min: 25,
        max: 100,
        default: 25,
        setAmount: 25,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be subject to a fine of not less than $25 nor more than $100 or to imprisonment in the county jail not to exceed ninety days or to both fine and imprisonment.",
    },
    {
        // 67
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "70.05.120(4)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.05.120",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        min: 25,
        max: 100,
        default: 25,
        setAmount: 25,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be subject to a fine of not less than $25 nor more than $100 or to imprisonment in the county jail not to exceed ninety days or to both fine and imprisonment.",
    },
    {
        // 68
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "47.68.240(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.240",
        }, ],
        mandatory: true,
        impose: true,
        notes: "In addition to the criminal penalties, defendant is subject to a $100 penalty if aircraft registration is sixty days or more past due.",
    },
    {
        // 69
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.180",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=66.44.180",
        }, ],
        notes: "If the offender convicted of an offense referred to in this section is a corporation, it shall for a first offense be liable to a penalty of not more than $5,000, and for a second or subsequent offense to a penalty of not more than $10,000, or to forfeiture of its corporate license, or both.",
    },
    {
        // 70
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "66.44.180",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=66.44.180",
        }, ],
        notes: "If the offender convicted of an offense referred to in this section is a corporation, it shall for a first offense be liable to a penalty of not more than $10,000 or to forfeiture of its corporate license, or both.",
    },
    {
        // 71
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.58.280(1)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
        }, ],
    },
    {
        // 72
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "77.15.750",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=77.15.750",
        }, ],
    },
    {
        // 73
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "81.88.040",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=81.88.040",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Defendant also subject to civil penalties per RCW 81.88.040.",
    },
    {
        // 74
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "16.36.113",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=16.36.113",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Defendant also may be subject to civil penalty of not more than $1,000 for each violation.",
    },
    {
        // 75
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "10.14.170",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=10.14.170",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 76
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "17.21.310",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=17.21.310",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 77
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "70.24.080",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70.24.080",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 78
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "81.04.390",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=81.04.390",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 79
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
                num: "81.70.220",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=81.70.220",
            },
            {
                num: "81.04.390",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=81.04.390",
            },
        ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 80
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "82.24.110(1)(f)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=82.24.110",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 81
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.04.070",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.04.070",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 82
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.41.115",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.41.115",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
        notes: "Discretionary.",
    },
    {
        // 83
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "16.24.040",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=16.24.040",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
    },
    {
        // 84
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "17.21.315",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=17.21.315",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
        notes: "Defendant also subject to civil penalty in an amount not more than $7,500. RCW 17.21.315.",
    },
    {
        // 85
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "17.21.310",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=17.21.310",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
    },
    {
        // 86
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "77.15.750",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=77.15.750",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
    },
    {
        // 87
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.41.810",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.41.810",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
    },
    {
        // 88
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.92.030",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.92.030",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
    },
    {
        // 89
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9A.36.161",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.161",
        }, ],
        default: 0,
        max: 1000,
        setAmount: 0,
    },
    {
        // 90
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.20.342",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.20.342",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
    },
    {
        // 91
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.25.170",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.25.170",
        }, ],
        default: 0,
        max: 5000,
        setAmount: 0,
    },
    {
        // 92
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.16A.030(6)(a)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.030",
        }, ],
        default: 1529,
        max: 1529,
        min: 1529,
        manMin: 1529,
        mandatory: true,
        impose: true,
        setAmount: 1529,
        notes: "Fine plus any applicable assessments may not be suspended, deferred, or reduced.",
    },
    {
        // 93
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.37.685(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.37.685",
        }, ],
        default: 1000,
        max: 1000,
        min: 1000,
        manMin: 1000,
        mandatory: true,
        impose: true,
        setAmount: 1000,
        notes: "Fine may not be suspended, deferred, or reduced.",
    },
    {
        // 94
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.37.685(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.37.685",
        }, ],
        default: 2500,
        max: 2500,
        min: 2500,
        manMin: 2500,
        mandatory: true,
        impose: true,
        setAmount: 2500,
        notes: "Fine may not be suspended, deferred, or reduced.",
    },
    {
        // 95
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.16A.030(6)(b)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.030",
        }, ],
        default: 5529,
        max: 5529,
        min: 5529,
        manMin: 5529,
        mandatory: true,
        impose: true,
        setAmount: 5529,
        notes: "Fine plus any applicable assessments may not be suspended, deferred, or reduced.",
    },
    {
        // 96
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.37.685(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.37.685",
        }, ],
        default: 5000,
        max: 5000,
        min: 5000,
        manMin: 5000,
        mandatory: true,
        impose: true,
        setAmount: 5000,
        notes: "Fine may not be suspended, deferred, or reduced.",
    },
    {
        // 97
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.12.640",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.12.640",
        }, ],
        max: 10000,
        mandatory: true,
        impose: true,
    },
    {
        // 98
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.12.755(3)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.12.755",
        }, ],
        max: 250,
        mandatory: true,
        impose: true,
    },
    {
        // 99
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.72.100(2)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.72.100",
        }, ],
        max: 500,
        mandatory: true,
        impose: true,
    },
    {
        // 100
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.29.605(6)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.29.605",
        }, ],
        default: 100,
        max: 500,
        min: 100,
        manMin: 100,
        mandatory: true,
        impose: true,
        setAmount: 100,
        suspendable: true,
        notes: "<em>Shall</em> be fined not less than $100 nor more than $500.",
    },
    {
        // 101
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.16A.320(2)(b)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320",
        }, ],
        default: 2500,
        min: 2500,
        manMin: 2500,
        mandatory: true,
        impose: true,
        setAmount: 2500,
        suspendable: true,
        notes: "Shall be fined.",
    },
    {
        // 102
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.20.410",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.20.410",
        }, ],
        default: 50,
        max: 200,
        min: 50,
        manMin: 50,
        mandatory: true,
        impose: true,
        setAmount: 50,
        suspendable: true,
        notes: "Shall be fined not less than $50 nor more than $200 or imprisioned for not more than six months or both such fine and imprisonment.",
    },
    {
        // 103
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.16A.320(2)(b)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320",
        }, ],
        default: 5000,
        min: 5000,
        manMin: 5000,
        mandatory: true,
        impose: true,
        setAmount: 5000,
        suspendable: true,
    },
    {
        // 104
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.48.175",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.48.175",
        }, ],
        default: 200,
        min: 200,
        max: 500,
        manMin: 200,
        mandatory: true,
        impose: true,
        setAmount: 200,
        suspendable: true,
        notes: "<em>Shall</em> be fined not less than $200 nor more than $500.",
    },
    {
        // 105
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "46.29.605(4)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.29.605",
        }, ],
        default: 50,
        min: 50,
        max: 250,
        manMin: 50,
        mandatory: true,
        impose: true,
        setAmount: 50,
        suspendable: true,
    },
    {
        // 106
        name: "Base Fine",
        pseaApplies: true,
        rcws: [{
            num: "9.41.115",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.41.115",
        }, ],
    },
    {
        // 107
        name: "Base Fine",
        rcws: [{
            num: "70A.300.100",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70A.300.100",
        }, ],
        pseaApplies: true,
    },
    {
        // 108
        name: "Base Fine",
        rcws: [{
            num: "9.16.020(1)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.16.020",
        }, ],
        max: 1000,
        mandatory: true,
        impose: true,
        pseaApplies: true,
    },
    {
        // 109
        name: "Base Fine",
        rcws: [{
            num: "9.68.060(5)(c)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68.060",
        }, ],
        max: 5000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
    },
    // 110
    {
        name: "Base Fine",
        rcws: [{
            num: "19.25.020",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=19.25.020",
        }, ],
        max: 250000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
    },
    {
        // 111
        name: "Base Fine",
        rcws: [{
            num: "18.04.370(1)(b)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=18.04.370",
        }, ],
        max: 30000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
    },
    {
        // 112
        name: "Base Fine",
        rcws: [{
            num: "9.35.010(6)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.35.010",
        }, ],
        max: 500,
        min: 500,
        mandatory: true,
        impose: true,
        pseaApplies: true,
        notes: "A person who violates this section is liable for $500 or actual damages, whichever is greater, and reasonable attorneys' fees.",
    },
    // 113
    {
        name: "Base Fine",
        rcws: [{
            num: "9A.83.020",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.83.020",
        }, ],
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: "A person who violates this section is also liable for a civil penalty of twice the value of the proceeds involved in the financial transaction and for the costs of the suit, including reasonable investigative and attorneys’ fees.",
    },
    // 114
    {
        name: "Base Fine",
        rcws: [{
            num: "40.16.030",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=40.16.030",
        }, ],
        max: 5000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
    },
    // 115
    {
        name: "Base Fine",
        rcws: [{
                num: "69.40.030(1)",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=69.40.030",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        min: 1000,
        default: 1000,
        setAmount: 1000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be punished by imprisonment in a state correctional facility for not less than five years or by a fine of not less than $1,000.",
    },
    // 116
    {
        name: "Base Fine",
        rcws: [{
            num: "81.60.080",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=81.60.080",
        }, ],
        max: 1000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
    },
    // 117
    {
        name: "Base Fine",
        rcws: [{
            num: "9.08.072",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.08.072",
        }, ],
        min: 1000,
        default: 1000,
        setAmount: 1000,
        pseaApplies: true,
        mandatory: true,
        impose: true,
        suspendable: true,
        notes: "Mandatory fine of not less than $1,000 per pet animal shall be imposed.",
    },
    // 118
    {
        name: "Base Fine",
        rcws: [{
                num: "9.16.035(3)",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035",
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
            },
        ],
        pseaApplies: true,
        mandatory: true,
        impose: true,
        notes: "Defendant shall be fined an amount up to three times the retail value of the items bearing, or services identified by, a counterfeit mark, unless extenuating circumstances are shown by the defendant. RCW 9.26.035(6).",
    },
    // 119
    {
        name: "Base Fine",
        pseaApplies: true,
        min: 3000,
        max: 25000,
        setAmount: 3000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.401(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401",
        }, ],
        suspendable: true,
        notes: "Except if conviction is under RCW 69.50.407 (Attempt/Conspiracy), $3,000 of the fine may not be suspended. May fine not more than $25,000 if less than 2 kg of the drug, and not more than $100,000 for first 2 kg of the drug with not more than an additional $50 for each gram in excess of 2 kg.",
    },
    // 120
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 25000,
        rcws: [{
            num: "69.50.401(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401",
        }, ],
        suspendable: true,
        notes: "May fine not more than $25,000 if less than 2 kg of the drug, and not more than $100,000 for first 2 kg of the drug with not more than an additional $50 for each gram in excess of 2 kg.",
    },
    // 121
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 25000,
        rcws: [{
                num: "69.50.406(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.406",
            },
            {
                num: "69.50.401(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.401",
            },
        ],
        suspendable: true,
        notes: "May fine not more than $25,000 if less than 2 kg of the drug, and not more than $100,000 for first 2 kg of the drug with not more than an additional $50 for each gram in excess of 2 kg.",
    },
    // 122
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 2000,
        rcws: [{
            num: "69.50.402",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.402",
        }, ],
        suspendable: true,
        notes: "Max fine $2,000.",
    },
    // 123
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 2000,
        rcws: [{
            num: "69.50.403",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.403",
        }, ],
        suspendable: true,
        notes: "Max fine $2,000.",
    },
    // 124
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 5000,
        rcws: [{
            num: "69.50.410(5)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.410",
        }, ],
        suspendable: true,
        notes: "Unless conviction is under RCW 69.50.407 (Attempt/Conspiracy), fine shall be in an amount calculated to at least eliminate any and all proceeds or profits directly or indirectly gained by such person as a result of sales of controlled substances in violation of the laws of this or other states, or the United States, up to the amount of $5,000 on each count.",
    },
    // 125
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 2000,
        rcws: [{
            num: "69.50.402(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.402",
        }, ],
        suspendable: true,
        notes: "Max fine $2,000.",
    },
    // 126
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 4000,
        rcws: [{
                num: "69.50.402(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.402",
            },
            {
                num: "69.50.408",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.408",
            },
        ],
        suspendable: true,
        notes: "Max fine $4,000.",
    },
    // 127
    {
        name: "Base Fine",
        pseaApplies: true,
        max: 2000,
        rcws: [{
            num: "69.50.416",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.416",
        }, ],
        suspendable: true,
        notes: "Max fine $2,000.",
    },
    // 128
    {
        name: "Base Fine",
        pseaApplies: true,
        min: 3000,
        max: 25000,
        rcws: [{
            num: "69.50.440",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.440",
        }, ],
        suspendable: true,
        notes: "Unless conviction is under RCW 69.50.407 (Attempt/Conspiracy), $3,000 of the fine may not be suspended. Maximum fine $25,000.",
    },
    // 129
    {
        name: "Base Fine",
        dui: true,
        pseaApplies: true,
        rcws: [{
            num: "46.61.5055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.5055",
        }, ],
        min: 350,
        default: 350,
        setAmount: 350,
        manMin: 350,
        mandatory: true,
        impose: true,
        suspendable: true,
        notes: "May suspend if indigent. If passenger(s) under 16, fine shall not be less than $1000 for each passenger under 16 and not more than $5000 for each pasenger under 16. One thousand dollars of the fine for each passenger under 16 may not be suspended unless the court finds the offender to be indigent.",
    },
    // 130
    {
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: "Discretionary.",
        rcws: [{
            num: "9.92.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060",
        }, ],
    },
    {
        // 131
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: 'Discretionary. Payment of "fine" is not an option because mandatory jail of three months for first offense and mandatory jail fo six months for second offense.  RCW 66.44.120(2)(a)',
        rcws: [{
            num: "66.44.120",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=66.44.120",
        }, ],
        disable: true,
        showdisabled: true,
    },
    {
        // 132
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: 'Subject to a fine equal to 4 times the amount of avoided taxes and fees, which may not be suspended, except as provided in RCW 10.05.180 (deferral program).',
        rcws: [{
                num: "46.09.495(2)",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.09.495",
            },
            {
                num: "10.05.180",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=10.05.180",
            },
        ],
    },
    {
        // 133
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: 'Discretionary.',
        rcws: [{
            num: "9A.20.021",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.20.021",
        }, ],
        suspendable: true
    },
    {
        // 134
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 15,
        notes: 'Violation of a Civil Protection Order (other than antiharassment protection orders or extreme risk protection orders). <em>Shall</em> impose a fine of $15, in addition to any penalty or fine imposed.',
        rcws: [{
            num: "7.105.450(1)(b)(ii)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=7.105.450",
        }, ]
    },
    {
        // 135
        name: "Base Fine",
        pseaApplies: true,
        default: 0,
        setAmount: 0,
        notes: 'Subject to a fine equal to 4 times the amount of avoided taxes and fees, which may not be suspended, except as provided in RCW 10.05.180 (deferral program).',
        rcws: [{
                num: "46.10.505(2)",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.10.505",
            },
            {
                num: "10.05.180",
                url: "https://app.leg.wa.gov/rcw/default.aspx?cite=10.05.180",
            },
        ],
    },
];

export default fines;



// WEBPACK FOOTER //
// ./src/lib/LFOs/fines.js