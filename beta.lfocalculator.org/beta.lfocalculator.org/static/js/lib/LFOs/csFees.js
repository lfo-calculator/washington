const csFees = [{
        // 0
        name: "Wildlife Penalty Assessment",
        rcws: [{
            num: "77.15.370(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.370",
        }, ],
        mandatory: true,
        impose: true,
        notes: "If violation resulted in death of fish listed in RCW 77.15.370(3), the court shall require payment of the amounts listed in the statute for each fish taken or possessed. Must be imposed regardless of and in addition to any sentence, fines, or costs other.  Assessment may not be suspended, waived, modified, or deferred in any respect. Assessment is doubled when: a) When a person commits a violation that requires payment of a criminal wildlife penalty assessment within five years of a prior gross misdemeanor or felony conviction under this title; or b) when the trier of fact determines that the person took or possessed the fish in question with the intent of bartering, selling, or otherwise deriving economic profit from the fish or fish parts.",
    },
    {
        // 1
        name: "Cost of Reestablishment",
        rcws: [{
            num: "58.04.015",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=58.04.015",
        }, ],
        mandatory: true,
        impose: true,
        notes: "Defendant is liable for the cost of the restablishment of the monument.",
    },
    {
        // 2
        name: "Litter Cleanup Restitution",
        enableIfMentalIllness: true,
        rcws: [{
            num: "70A.200.060(2)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.200.060",
        }, ],
        mandatory: true,
        restitution: true,
        cshNotApplicable: true,
        impose: true,
        suspendable: true,
        notes: "The person <em>shall</em> also pay a litter cleanup restitution payment equal to twice the actual cost of cleanup, or fifty dollars per cubic foot of litter, whichever is greater. The court shall distribute one-half of the restitution payment to the landowner and one-half of the restitution payment to the law enforcement agency investigating the incident. The court may, in addition to or in lieu of part or all of the cleanup restitution payment, order the person to pick up and remove litter from the property, with prior permission of the legal owner or, in the case of public property, of the agency managing the property. The court <em>may suspend or modify</em> the litter cleanup restitution payment for a <em>first-time offender</em> under this section, if the person cleans up and properly disposes of the litter.",
    },
    {
        // 3
        name: "Litter Cleanup Restitution",
        enableIfMentalIllness: true,
        rcws: [{
            num: "70A.205.195(3)(ii)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.205.195",
        }, ],
        mandatory: true,
        restitution: true,
        cshNotApplicable: true,
        impose: true,
        notes: "A person found to have littered in an amount greater than one cubic yard <em>shall</em> also pay a litter cleanup restitution payment. This payment must be the greater of twice the actual cost of removing and properly disposing of the litter, or one hundred dollars per cubic foot of litter. The court may, in addition to the litter cleanup restitution payment, order the person to remove and properly dispose of the litter from the property, with prior permission of the legal owner or, in the case of public property, of the agency managing the property. The court <em>may suspend or modify</em> the litter cleanup restitution payment for a <em>first-time offender</em> under this section if the person removes and properly disposes of the litter.",
    },
    {
        // 4
        name: "Clean-up/Transport/Storage Costs",
        rcws: [{
            num: "70A.205.450",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.205.450",
        }, ],
        mandatory: true,
        impose: true,
        notes: "Defendant is liable for the costs of cleanup of any and all waste tires transported or stored. This subsection does not apply to the storage of waste tires when the storage of the tires occurred before July 1, 2005, and the storage was licensed in accordance with RCW 70.95.555 at the time the tires were stored.",
    },
    {
        // 5
        name: "Wildlife Penalty Assessment",
        rcws: [{
            num: "77.15.400",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.400",
        }, ],
        mandatory: true,
        impose: true,
        max: 1000,
        min: 1000,
        default: 1000,
        setAmount: 1000,
        notes: 'Applies except to "youth" as defined in RCW 77.08.010 for hunting purposes, if defendant violates Dept. of Fish and Wildlife rule that requires the use of nontoxic shot; court shall require payment of $1,000;"must be imposed regardless of and in addition to any sentence, fine, or costs imposed for violating this section; may not be suspended, waived modified, or deferred in any respsect.',
    },
    {
        // 6
        name: "Wildlife Penalty Assessment",
        rcws: [{
            num: "77.15.420",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.420",
        }, ],
        mandatory: true,
        impose: true,
        notes: "Applies to adults only if crime resulted in death of wildlife listed in RCW 77.15.420. Court shall require payment of the amounts per statutes for each animal taken or possessed. Shall be imposed regardless of and in addition to any sentence, fines, or costs otherwise provided for violating any provision of this title.  May not be suspended, waived, modified, or deferred in any respect. Assessment is doubled when: a) person is convicted of spotlighting big game under RCW 77.15.450; b) a person commits a violation that requires payment of a wildlife penalty assessment within five years of a prior gross misdemeanor or felony conviction under this title; c) the trier of fact determines that the person took or possessed the animal in question with the intent of bartering, selling, or otherwise deriving economic profit from the animal or the animal's parts; or (d) When the trier of fact determines that the person took the animal under the supervision of a licensed guide.",
    },
    {
        // 7
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        default: 50,
        min: 16.5,
        manMin: 16.5,
        mandatory: true,
        impose: true,
        setAmount: 50,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $16.50).  Still applies if arrest was for this crime and defendant given deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 8
        name: "Damages for Any Injury to Assistance-Dependent Victim",
        impose: true,
        mandatory: true,
        pseaApplies: true,
        rcws: [{
            num: "70.84.040",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=70.84.040",
        }, ],
        notes: "Any driver who fails to take such precaution shall be liable in damages for any injury caused such pedestrian or wheelchair user. It shall be unlawful for the operator of any vehicle to drive into or upon any crosswalk while there is on such crosswalk such pedestrian or wheelchair user crossing or attempting to cross the roadway, if such pedestrian or wheelchair user is using a white cane, using a dog guide, using a service animal, or using a wheelchair or a power wheelchair as defined in RCW 46.04.415.",
    },
    {
        // 9
        name: "Litter Cleanup Restitution",
        enableIfMentalIllness: true,
        rcws: [{
            num: "70A.200.060(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.200.060",
        }, ],
        mandatory: true,
        restitution: true,
        cshNotApplicable: true,
        impose: true,
        suspendable: true,
        notes: "The person <em>shall</em> also pay a litter cleanup restitution payment equal to twice the actual cost of cleanup, or fifty dollars per cubic foot of litter, whichever is greater. The court shall distribute one-half of the restitution payment to the landowner and one-half of the restitution payment to the law enforcement agency investigating the incident. The court may, in addition to or in lieu of part or all of the cleanup restitution payment, order the person to pick up and remove litter from the property, with prior permission of the legal owner or, in the case of public property, of the agency managing the property. The court <em>may suspend or modify</em> the litter cleanup restitution payment for a <em>first-time offender</em> under this section, if the person cleans up and properly disposes of the litter.",
    },
    {
        // 10
        name: "Litter Cleanup Restitution",
        enableIfMentalIllness: true,
        rcws: [{
            num: "70A.205.195(3)(b)(ii)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.205.195",
        }, ],
        mandatory: true,
        restitution: true,
        cshNotApplicable: true,
        impose: true,
        suspendable: true,
        notes: "A person found to have littered in an amount greater than one cubic yard <em>shall</em> also pay a litter cleanup restitution payment. This payment must be the greater of twice the actual cost of removing and properly disposing of the litter, or one hundred dollars per cubic foot of litter. The court may, in addition to the litter cleanup restitution payment, order the person to remove and properly dispose of the litter from the property, with prior permission of the legal owner or, in the case of public property, of the agency managing the property. The court <em>may suspend or modify</em> the litter cleanup restitution payment for a <em>first-time offender</em> under this section if the person removes and properly disposes of the litter.",
    },
    {
        // 11
        name: "Criminal Wildlife Penalty",
        rcws: [{
            num: "77.15.400",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.400",
        }, ],
        mandatory: true,
        impose: true,
        suspendable: false,
        max: 1000,
        min: 1000,
        default: 1000,
        setAmount: 1000,
        notes: 'Applies except to "youth" as defined in RCW 77.08.010 for hunting purposes, if defendant violates Dept. of Fish and Wildlife rule that requires the use of nontoxic shot; court shall require payment of $1,000; must be imposed regardless of and in addition to any sentence, fine, or costs imposed for violating this section; may not be suspended, waived modified, or deferred in any respect.',
    },
    {
        // 12
        name: "Additional Penalty",
        pseaApplies: true,
        rcws: [{
            num: "81.54.030",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=81.54.030",
        }, ],
        notes: "Subject to a $25-a-day penalty for each day required fee per statute is unpaid.",
    },
    {
        // 13
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        mandatory: true,
        impose: true,
        max: 1500,
        min: 500,
        manMin: 500,
        default: 1500,
        setAmount: 1500,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $500).  Applies if arrest was for this crime regardless of any deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 14
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        mandatory: true,
        impose: true,
        max: 5000,
        min: 1650,
        manMin: 1650,
        default: 5000,
        setAmount: 5000,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $1,650).  Applies if arrest was for this crime regardless of any deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 15
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        mandatory: true,
        impose: true,
        max: 2500,
        min: 825,
        manMin: 825,
        default: 2500,
        setAmount: 2500,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $825).  Applies if arrest was for this crime regardless of any deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 16
        name: "Care / Maintenance Cost",
        rcws: [{
            num: "16.52.205(6)(b)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=16.52.205",
        }, ],
        setAmount: 0,
        notes: "The court <em>may</em> order defendant to reimburse the animal shelter or humane society for any reasonable costs incurred for the care and maintenance of any animals taken to the animal shelter or humane society as a result of conduct proscribed in this section.",
    },
    {
        // 17
        name: "Additional Fee",
        rcws: [{
            num: "9A.40.100",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.100",
        }, ],
        default: 10000,
        min: 3333,
        manMin: 3333,
        mandatory: true,
        impose: true,
        setAmount: 10000,
        notes: "Shall be assessed $10,000 fee. Fee shall not be reduced, waived, or suspended, unless court finds, on the record, that the offender does not have the ability to pay the fee, in which case the fee may be reduced by an amount up to two-thirds of the max allowable fee (mandatory minimum $3,333).",
    },
    {
        // 18
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        default: 10000,
        min: 3333,
        manMin: 3333,
        mandatory: true,
        impose: true,
        setAmount: 10000,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $3,333).  Still applies if arrest was for this crime and defendant given deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 19
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        default: 3000,
        min: 1000,
        manMin: 1000,
        mandatory: true,
        impose: true,
        setAmount: 3000,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $1,000). Still applies if arrest was for this crime and defendant given deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 20
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        default: 50,
        min: 16.5,
        manMin: 16.5,
        mandatory: true,
        impose: true,
        setAmount: 50,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $16.50). Still applies if arrest was for this crime and defendant given deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 21
        name: "Additional Fee",
        rcws: [{
            num: "9A.88.120",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.120",
        }, ],
        default: 6000,
        min: 2000,
        manMin: 2000,
        mandatory: true,
        impose: true,
        setAmount: 6000,
        notes: "The court shall not reduce, waive or suspend payment of all or part of the assessed fee unless it finds on the record, that the offender does not have the ability to pay the fee in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (minimum mandatory fee $2,000).  Still applies if arrest was for this crime and defendant given deferred sentence, deferred prosectuion, or resolution is part of statutory or nonstatutory diversion agreement.",
    },
    {
        // 22
        name: "Additional Fee",
        rcws: [{
            num: "9.68A.105(1)(a)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.105",
        }, ],
        default: 5000,
        min: 1666,
        manMin: 1666,
        mandatory: true,
        impose: true,
        setAmount: 5000,
        notes: "An adult offender who is either convicted or given a deferred sentence or a deferred prosecution or who has entered into a statutory or nonstatutory diversion agreement as a result of an arrest for violating RCW 9.68A.100, 9.68A.101, or 9.68A.102, or a comparable county or municipal ordinance shall be assessed a $5,000 fee.  The court may not reduce, waive, or suspend payment of all or part of the fee assessed unless it finds, on the record, that the adult offender does not have the ability to pay in which case it may reduce the fee by an amount up to two-thirds of the maximum allowable fee (mandatory minimum fee $1,666).",
    },
    {
        // 23
        name: "Civil Penalty",
        rcws: [{
            num: "9A.76.200(4)",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.200",
        }, ],
        setAmount: 0,
        notes: "Court may impose a civil penalty of up to $5000 for harming a police dog.  Court shall impose a civil penalty of at least $5,000 and may increase the penalty up to a maximum of $10,000 for killing a police dog. Moneys collected must be distributed to jurisdiction that owns the dog.",
    },
    {
        // 24
        name: "Wildlife Penalty Assessment",
        rcws: [{
            num: "77.15.420",
            url: "https://app.leg.wa.gov/rcw/default.aspx?cite=77.15.420",
        }, ],
        mandatory: true,
        impose: true,
        notes: "Applies to adults only if crime resulted in death of wildlife listed in RCW 77.15.420. Court shall require payment of the amounts per statutes for each animal taken or possessed. Shall be imposed regardless of and in addition to any sentence, fines, or costs otherwise provided for violating any provision of this title.  May not be suspended, waived, modified, or deferred in any respect. Assessment is doubled when: a) person is convicted of spotlighting big gameunder RCW 77.15.450; b) a person commits a violation that requires payment of a wildlife penalty assessment within five years of a prior gross misdemeanor or felony conviction under this title; c) the trier of fact determines that the person took or possessed the animal in question with the intent of bartering, selling, or otherwise deriving economic profit from the animal or the animal's parts; or (d) When the trier of fact determines that the person took the animal under the supervision of a licensed guide.",
    },
    {
        // 25
        name: "VUCSA Additional Fine",
        pseaApplies: true,
        min: 1000,
        max: 1000,
        default: 1000,
        setAmount: 1000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.430",
        }, ],
        suspendable: true,
        deferrable: true,
        notes: "Mandatory unless defendant is indigent, then may suspend or defer.",
    },
    {
        // 26
        name: "VUCSA Additional Fine",
        pseaApplies: true,
        min: 2000,
        max: 2000,
        default: 2000,
        setAmount: 2000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.430",
        }, ],
        suspendable: true,
        deferrable: true,
        notes: "Mandatory unless defendant is indigent, then may suspend or defer.",
    },
    {
        // 27
        name: "VUCSA Additional Fine",
        pseaApplies: true,
        min: 1000,
        max: 500000,
        default: 1000,
        setAmount: 1000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.430",
        }, ],
        suspendable: true,
        deferrable: true,
        notes: "Mandatory unless defendant is indigent, then may suspend or defer. Unless conviction is under RCW 69.50.407 (Attempt/Conspiracy), minimum additional fine increases from $1,000 to $10,000 if any amount of the drug contained synthetic cannabinoid, or increases from $1,000 to $25,000 if buyer under age 18 and defendant at least two years older than minor.",
    },
    {
        // 28
        name: "VUCSA Additional Fine",
        pseaApplies: true,
        min: 2000,
        max: 500000,
        default: 2000,
        setAmount: 2000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.430",
        }, ],
        suspendable: true,
        deferrable: true,
        notes: "Mandatory unless defendant is indigent, then may suspend or defer. Unless conviction is under RCW 69.50.407 (Attempt/Conspiracy), minimum additional fine increases from $2,000 to $10,000 if any amount of the drug contained synthetic cannabinoid, or increases from $2,000 to $25,000 if buyer under age 18 and defendant at least two years older than minor.",
    },
    {
        // 29
        name: "Damages for any injury to assistance-dependent victm",
        rcws: [{
            num: "70.84.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.84.040",
        }, ],
        notes: "Any driver who fails to take such precaution shall be liable in damages for any injury caused such pedestrian or wheelchair user. It shall be unlawful for the operator of any vehicle to drive into or upon any crosswalk while there is on such crosswalk such pedestrian or wheelchair user crossing or attempting to cross the roadway, if such pedestrian or wheelchair user is using a white cane, using a dog guide, using a service animal, or using a wheelchair or a power wheelchair as defined in RCW 46.04.415.",
    },
    {
        // 30
        name: "Additional Fee",
        mandatory: true,
        impose: true,
        setAmount: 1000,
        min: 1000,
        rcws: [{
            num: "9.68A.107",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.107",
        }, ],
        notes: "Shall be assessed a fee of $1,000 for each depiction or image of visual or printed matter that constitutions a separate conviction.",
    },
    {
        // 31
        name: "VUCSA Additional Fine",
        pseaApplies: true,
        default: 1000,
        setAmount: 1000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.430",
        }, ],
        suspendable: true,
        deferrable: true,
        notes: "Mandatory unless defendant is indigent, then may suspend or defer.",
    },
    {
        // 32
        name: "VUCSA Additional Fine",
        pseaApplies: true,
        default: 2000,
        setAmount: 2000,
        mandatory: true,
        impose: true,
        rcws: [{
            num: "69.50.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.430",
        }, ],
        suspendable: true,
        deferrable: true,
        notes: "Mandatory unless defendant is indigent, then may suspend or defer. ",
    },
];

export default csFees;



// WEBPACK FOOTER //
// ./src/lib/LFOs/csFees.js