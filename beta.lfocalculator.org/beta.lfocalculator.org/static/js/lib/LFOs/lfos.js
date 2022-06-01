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
        name: "Public Defender Recoupment",
        waiveIfIndigent: true,
        collapsible: true,
        default: 0,
        setAmount: 0,
        rcws: [{
            num: "10.01.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        }],
        notes: "Authority is from State v. Barklind, 87 Wn.2d 814 (1977). Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    {
        // 2
        name: "Cost of Incarceration",
        waiveIfIndigent: true,
        collapsible: true,
        default: 0,
        setAmount: 0,
        rcws: [{
            num: "10.01.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        }],
        notes: "Discretionary. Must be actual cost (not to exceed $100/day). Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    // Restitution on clj
    {
        // 3
        name: "Restitution",
        enableIfMentalIllness: true,
        collapsible: true,
        cshNotApplicable: true,
        restitution: true,
        rcws: [{
            num: "9A.20.030, City of Seattle v. Fuller, 177 Wn.2d 263 (2013)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.20.030"
        }],
        notes: "Court may order; must find amount reasonable. May not convert to community service hours."
    },
    {
        // 4 - Jury Demand Fee for CLJ
        name: "Jury Demand Fee",
        waiveIfIndigent: true,
        collapsible: true,
        default: 125,
        rcws: [{
                num: "10.01.160(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
            },
            {
                num: "36.18.016(3)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=36.18.016"
            }
        ],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a).  Cannot exceed $125 for a 6-person jury in district courts."
    },
    {
        // 5
        name: "Warrant Fee",
        waiveIfIndigent: true,
        collapsible: true,
        max: 100,
        rcws: [{
            num: "10.01.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        }],
        notes: "May only be imposed on defendants with the ability to pay; may not exceed $100. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    {
        // 6
        name: "Crime Lab Fee",
        default: 100,
        rcws: [{
            num: "43.43.690",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=43.43.690"
        }],
        suspendable: true,
        collapsible: true,
        notes: "Upon verified petition by defendant that defendant does not have ability to pay, court may suspend all or part of the fee."
    },
    {
        // 7
        name: "Booking Fee",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
                num: "10.01.160(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
            },
            {
                num: "70.48.390",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.48.390"
            }
        ],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c). Booking fee must be jail’s actual booking costs or $100, whichever is less."
    },
    {
        // 8
        name: "Other Costs",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
                num: "10.01.160",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
            },
            {
                num: "10.64.015",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.64.015"
            }
        ],
        notes: "May only be imposed on defendants with the ability to pay; cost must be authorized by statute. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    {
        // 9
        name: "Victim Penalty Assessment",
        enableIfMentalIllness: true,
        cshNotApplicable: true,
        mandatory: true,
        impose: true,
        setAmount: 500,
        default: 500,
        suspendable: true,
        rcws: [{
                num: "7.68.035",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=7.68.035"
            },
            {
                num: "10.01.180(5)(d)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.180"
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060"
            }
        ],
        notes: "Mandatory: $500 if one or more convictions for any case or cause of action is a felony or gross misdemeanor; $250 if for any case or cause of action convictions are only misdemeanors. May not be reduced, waived, revoked or converted to community restitution hours. This LFO does not apply if the ONLY conviction is for any Driving While License Suspended."
    },
    {
        // 10
        name: "Criminal Filing Fee",
        waiveIfIndigent: true,
        mandatory: true,
        impose: true,
        setAmount: 200,
        default: 200,
        rcws: [{
                num: "36.18.020(2)(h)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=36.18.020"
            },
            {
                num: "9.94A.777",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.777"
            }
        ],
        notes: "Mandatory and must be imposed except when: 1) defendant is indigent as defined in RCW 10.101.010(3) (a) through (c), then court shall not impose this fee; or 2) defendant is sentenced under the SRA and suffers from a mental health condition and also does not have ability to pay. State v. Tedder, 194 Wn. App 753 (2016)."
    },
    {
        // 11
        name: "Witness Costs",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
            num: "10.01.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        }],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    {
        // 12
        name: "Sheriff Service Fee",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
            num: "10.01.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        }],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    {
        // 13 - Jury Fee for Superior
        name: "Jury demand Fee",
        waiveIfIndigent: true,
        collapsible: true,
        default: 250,
        rcws: [{
                num: "10.46.190",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.46.190"
            },
            {
                num: "36.18.016(3)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=36.18.016"
            },
            {
                num: "10.01.160(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
            }
        ],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay. Court shall not order defendant to pay costs if defendant is statutorily indigent per RCW 10.101.010(3)(a)-(c). The jury demand fee cannot exceed $250 for a 12-person jury."
    },
    {
        // 14
        name: "Extradition Costs",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
            num: "10.01.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.01.160"
        }],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay. Shall not impose costs on a defendant who is indigent as defined in RCW 10.101.010(3)(a) through (c)."
    },
    {
        // 15
        name: "Fees for Court Appointed Attorney",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
            num: "9.94A.760",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.760"
        }],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay."
    },
    {
        // 16
        name: "Court Appointed Defense Expert and Other Defense Costs",
        waiveIfIndigent: true,
        collapsible: true,
        rcws: [{
            num: "9.94A.760",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.760"
        }],
        notes: "Discretionary. May only be imposed on defendants with the ability to pay."
    },

    // The LFOs below are only used when a case has a tag that triggers one of these
    // DNA Tag - 318
    {
        // 17
        name: "DNA Collection Fee",
        tag: "DNA",
        min: 100,
        max: 100,
        default: 100,
        setAmount: 100,
        impose: true,
        suspendable: true,
        mandatory: true,
        rcws: [{
                num: "43.43.7541",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=43.43.7541"
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060"
            }
        ],
        notes: "Every sentence imposed for a crime specified in RCW 43.43.7541 must include a fee of $100 unless the state has previously collected the offender’s DNA as a result of a prior conviction."
    },
    // Title 46 Tag - only listed for 140 crimes
    {
        // 18
        name: "Title 46 Penalty",
        tag: "TITLE 46",
        mandatory: true,
        impose: true,
        pseaApplies: true,
        max: 50,
        default: 50,
        setAmount: 50,
        suspendable: true,
        rcws: [{
            num: "46.64.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.64.055"
        }],
        cshAccepted: true,
        notes: "Only applies to convictions under Title 46. May waive, reduce, suspend or convert to community service hours if indigent."
    },
    // AV Tag - only listed for 10 crimes
    {
        // 19
        name: "Alcohol Violators Assessment",
        tag: "AV",
        min: 250,
        max: 250,
        default: 250,
        setAmount: 250,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "46.61.5054",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.5054"
        }],
        suspendable: true,
        notes: "May suspend all or part if defendant does not have ability to pay. Arrest had to have been for DUI/Phys Cntrl/Veh.Hom./Veh. Asslt in order to impose the Alcohol Violator's Assessment."
    },
    // Emergency Response Tag - only listed for DUIs [4 crimes]
    {
        // 20
        name: "Emergency Response Expense",
        tag: "ER",
        max: 2500,
        rcws: [{
            num: "38.52.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=38.52.430"
        }],
        collapsible: true,
        notes: "This LFO cannot be imposed for Physical Control convictions. Upon a finding by the court that the expenses are reasonable, the court shall order the defendant to reimburse the public agency. May not exceed $2,500; court must find amount reasonable. The court may establish a payment schedule for the payment of the cost of reimbursement, separate from any payment schedule imposed for other fines and costs."
    },
    // DV Tag - only listed for 57 crimes
    {
        // 21
        name: "Domestic Violence Assessment",
        max: 115,
        rcws: [{
            num: "10.99.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.99.080"
        }],
        notes: "May not exceed $115. Judges are encouraged to solicit input from the victim or representatives for the victim in assessing the ability of the convicted offender to pay the penalty, including information regarding current financial obligations, family circumstances, and ongoing restitution."
    },
    // DVPO Tag - Only listed for 7 crimes
    {
        // 22
        name: "Violation of a DV Protection Order",
        tag: "DVPO",
        pseaApplies: true,
        default: 15,
        suspendable: true,
        impose: true,
        mandatory: true,
        min: 15,
        max: 15,
        setAmount: 15,
        type: "fine",
        rcws: [{
            num: "26.50.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.50.110"
        }],
        notes: "Shall be imposed when the conviction is for violation of a domestic violence no-contact or protection order."
    },
    // VUCSA Tag - listed for 41 crimes
    {
        // 23
        name: "Drug Enforcement Fund",
        tag: "VUCSA",
        suspendable: true,
        rcws: [{
                num: "9.94A.030(31)",
                url: "http://apps.leg.wa.gov/RCW/default.aspx?cite=9.94A.030"
            },
            {
                num: "9.92.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.92.060"
            }
        ],
        notes: "Discretionary. Must be based on the cost of investigation of drug-related crime. Cannot be more than the $20,000 maximum fine set for any felony for which a max fine is not statutorily fixed."
    },
    // Restitution on superior
    {
        // 24
        name: "Restitution",
        enableIfMentalIllness: true,
        collapsible: true,
        cshNotApplicable: true,
        restitution: true,
        rcws: [{
                num: "9A.20.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.20.030"
            },
            {
                num: "9.94A.750",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.750"
            }
        ],
        notes: "Court may order; must find amount reasonable. May not convert to community service hours."
    },
    {
        // 25
        name: "DOC Supervision Fees",
        rcws: [{
            num: "9.94A.703",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.703"
        }],
        notes: "Discretionary. If defendant sentenced to a term of community custody, the court shall order, unless waived.",
        waiveable: true,
        setAmount: 0,
        valueTbd: true
    }
];

export default lfos;



// WEBPACK FOOTER //
// ./src/lib/LFOs/lfos.js