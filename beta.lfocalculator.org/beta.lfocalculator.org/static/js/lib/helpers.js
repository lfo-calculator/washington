import numeral from "numeral";
import uuidv1 from "uuid";
import _ from "lodash";
import LFOs from "./LFOs/lfos";
import courtLfos from "./LFOs/";
import initialState from "./initialState";

export function formatNum(num) {
    return numeral(num).format("0[.]00");
}

export function getLfo(lfoArr, lfoName) {
    const lfo = lfoArr.find((lfo) => lfo.name === lfoName);
    return lfo;
}

export function containsCharge(charges, chargeName) {
    return charges.filter((charge) => charge.name === chargeName).length > 0;
}

export function containsLfo(lfoArr, lfoName) {
    return lfoArr.filter((lfo) => lfo.name === lfoName).length > 0;
}

export function containsTag(charges, tag) {
    const tags = _.flatten(charges.map((charge) => charge.tags));
    const containsTag = _.includes(tags, tag);

    return containsTag;
}

export function removeDna(charges, lfos) {
    const containsDNATag = containsTag(charges, "DNA");

    if (containsDNATag) return lfos;
    lfos.case = lfos.case.filter((lfo) => lfo.name !== "DNA Collection Fee");

    return lfos;
}

export function addDvLfo(charges, lfos) {
    const containsDV = containsLfo(lfos.case, "Domestic Violence Assessment");
    const dv = getLfo(LFOs, "Domestic Violence Assessment");

    if (!containsDV) {
        lfos.case = [dv, ...lfos.case];
    }

    const containsAssaultIV = containsCharge(charges, "ASSAULT IV");
    const containsDNA = containsLfo(lfos.case, "DNA Collection Fee");
    if (containsAssaultIV && !containsDNA) {
        const dna = getLfo(LFOs, "DNA Collection Fee");
        lfos.case = [dna, ...lfos.case];
    }

    return lfos;
}

export function addDocFee(charges, lfos) {
    let felonies = charges.filter((charge) => charge.type === "F");
    if (felonies.length > 0) {
        const containsDocFee = containsLfo(lfos.case, "DOC Supervision Fees");
        const df = getLfo(LFOs, "DOC Supervision Fees");

        if (!containsDocFee) {
            lfos.case = [df, ...lfos.case];
        }
    }

    return lfos;
}

export function removeDvLfo(charges, lfos) {
    const containsAssaultIV = containsCharge(charges, "ASSAULT IV");
    const containsDnaTag = containsTag(charges, "DNA");

    lfos.case = lfos.case.filter(
        (lfo) => lfo.name !== "Domestic Violence Assessment"
    );

    if (containsAssaultIV && !containsDnaTag) {
        lfos.case = lfos.case.filter((lfo) => lfo.name !== "DNA Collection Fee");
    }

    return lfos;
}

export function determineVPA(charges, lfos) {
    const vpa = getLfo(lfos.case, "Victim Penalty Assessment");
    const index = lfos.case.indexOf(vpa);
    const containsOnlyS =
        charges.filter((charge) => charge.type === "F" || charge.type === "G")
        .length <= 0;

    if (containsOnlyS) {
        // Case only contains simple misdemeanors
        lfos.case[index].default = 250;
        lfos.case[index].setAmount = 250;
    } else {
        // Case contains felonies or gross misdemeanors
        lfos.case[index].default = 500;
        lfos.case[index].setAmount = 500;
    }

    return lfos;
}

export function addTagLFOs(charges, charge, lfos) {
    const map = {
        DNA: LFOs[17],
        "TITLE 46": LFOs[18],
        AV: LFOs[19],
        ER: LFOs[20],
        DVPO: LFOs[22],
        VUCSA: LFOs[23],
    };

    charge.tags.forEach((tag) => {
        if (_.findIndex(lfos.case, (lfo) => lfo.tag === tag) < 0) {
            const containsDui = containsCharge(charges, "DUI OR PHYSICAL CONTROL");
            let violDate;

            if (tag === "TITLE 46" && containsDui) {
                const dui = getCharge(charges, "DUI OR PHYSICAL CONTROL");
                violDate = getViolDate(dui);
            }

            if (violDate !== "1-1-99 to 7-21-01") {
                lfos.case = [_.cloneDeep(map[tag]), ...lfos.case];
            }
        }
    });

    imposeAlcoholViolatorsAssessmentCheck(charges, lfos);

    return lfos;
}

export function imposeAlcoholViolatorsAssessmentCheck(charges, lfos) {
    let ava = lfos.case.filter(
        (lfo) => lfo.name === "Alcohol Violators Assessment"
    );
    if (ava.length > 0) {
        if (charges.every(isSpecialAVA)) {
            ava[0].impose = false;
        } else {
            ava[0].impose = true;
        }
    }
}

export function isSpecialAVA(chargeName) {
    var charges = [
        "RECKLESS DRIVING",
        "NEGLIGENT DRIVING I",
        "RECKLESS ENDANGERMENT",
    ];
    return charges.indexOf(chargeName.name) > -1;
}

export function deleteTagLFOs(court, dv, charges, charge, lfos) {
    let tags = _.flatten(charges.map((charge) => charge.tags));
    const isDui = charge.dui;

    const containsTitle46 = containsTag(charges, "TITLE 46");
    const containsAV = containsTag(charges, "AV");

    const containsDNA = _.includes(charge.tags, "DNA"); // charge being deleted has this tag
    const containsAssaultIV = containsCharge(charges, "ASSAULT IV");

    if (dv && containsDNA && containsAssaultIV) {
        tags = ["DNA", ...tags];
    }

    if (isDui && containsTitle46) {
        modifyCaseLfos(court, lfos, [{
            name: "Title 46 Penalty",
            type: "add"
        }]);
    }

    if (isDui && containsAV) {
        modifyCaseLfos(court, lfos, [{
            name: "Alcohol Violators Assessment",
            type: 250
        }, ]);
    }

    charge.tags.forEach((tag) => {
        if (!_.includes(tags, tag)) {
            _.remove(lfos.case, (lfo) => lfo.tag === tag);
        }
    });

    imposeAlcoholViolatorsAssessmentCheck(charges, lfos);

    return lfos;
}

export function concatLfos(lfos) {
    let lfoArr = [];

    Object.keys(lfos).forEach((key) => {
        lfoArr = lfoArr.concat(lfos[key]);
    });

    return lfoArr;
}

export function calculateLfoTotal(lfos) {
    const lfoArr = concatLfos(lfos);
    const total = lfoArr
        .filter((lfo) => lfo.impose && !lfo.suspend && !lfo.defer && lfo.setAmount)
        .map((lfo) => lfo.setAmount)
        .reduce((a, b) => a + b, 0);

    return total;
}

export function getCharge(charges, chargeName) {
    const charge = charges.filter((charge) => charge.name === chargeName)[0];
    return charge;
}

export function getOptionVal(charge, key) {
    const option = charge.options.filter((option) => option.key === key)[0];
    return option.value;
}

export function getViolDate(dui) {
    const violDate = getOptionVal(dui, "violDate");
    return violDate;
}

export function getLfosToPay(lfos) {
    const lfosToPay = lfos.filter(
        (lfo) => lfo.impose && !lfo.suspend && !lfo.defer && lfo.setAmount
    );

    return lfosToPay;
}

export function determinePseaPercent(violDate) {
    let pseaPercent;

    if (violDate === "1-1-99 to 7-21-01" || violDate === "7-22-01 to 7-26-03") {
        pseaPercent = 0.6;
    } else {
        pseaPercent = 0.7;
    }

    return pseaPercent;
}

export function calculatePSEA(charges, lfos) {
    const lfoArr = concatLfos(lfos);
    const lfosToPay = getLfosToPay(lfoArr);
    const pseaLfos = lfosToPay.filter((lfo) => lfo.pseaApplies);
    const containsDui = containsCharge(charges, "DUI OR PHYSICAL CONTROL");
    let pseaPercent;

    if (containsDui) {
        const dui = getCharge(charges, "DUI OR PHYSICAL CONTROL");
        const violDate = getViolDate(dui);
        pseaPercent = determinePseaPercent(violDate);
    } else {
        pseaPercent = 0.7;
    }

    const pseas = pseaLfos.map((lfo) => {
        if (lfo.dui) {
            return lfo.setAmount * pseaPercent;
        } else {
            return lfo.setAmount * (pseaPercent * 1.5);
        }
    });

    const psea = pseas.reduce((a, b) => a + b, 0);

    return psea;
}

export function calculateProbation(probationObj) {
    if (!probationObj.enabled) return 0;
    const {
        types
    } = probationObj;
    const costEntry = probationObj.costEntry || 0;
    const typesArr = [];

    Object.keys(types).forEach((key) => {
        typesArr.push(types[key]);
    });

    const typesTotal = typesArr
        .map((type) => {
            const rate = type.rate || 0;
            const time = type.time || 0;
            return rate * time;
        })
        .reduce((a, b) => a + b);

    const total = parseFloat(typesTotal) + parseFloat(costEntry);

    return total;
}

export function calculateThirdPartyFees(thirdPartyPayments, duration) {
    const {
        setUpFee,
        monthlyFee,
        enabled
    } = thirdPartyPayments;
    const months =
        duration.units === "months" ?
        Math.ceil(duration.value) :
        Math.ceil(duration.value * 12);

    if (enabled) {
        return setUpFee + months * monthlyFee;
    } else {
        return 0;
    }
}

export function calculateTotal(
    charges,
    lfos,
    probationObj,
    court,
    thirdPartyPayments,
    duration,
    includeThirdPartyFees
) {
    const probationTotal = calculateProbation(probationObj);
    const lfoTotal = calculateLfoTotal(lfos);
    const psea = court === "clj" ? calculatePSEA(charges, lfos) : 0;

    const total =
        lfoTotal +
        probationTotal +
        psea +
        (includeThirdPartyFees ?
            calculateThirdPartyFees(thirdPartyPayments, duration) :
            0);

    return total;
}

export function calculateSuspendedTotal(lfos) {
    const lfoArr = concatLfos(lfos);
    const suspendedLfos = lfoArr.filter(
        (lfo) => lfo.impose && lfo.setAmount && (lfo.suspend || lfo.defer)
    );
    const total = suspendedLfos
        .map((lfo) => lfo.setAmount)
        .reduce((a, b) => a + b, 0);

    return total;
}

export function calcCshTotal(lfos, total) {
    const lfoArr = concatLfos(lfos);

    const cshNotApplicableLFOs = lfoArr.filter(
        (lfo) => lfo.impose && !lfo.suspend && !lfo.defer && lfo.cshNotApplicable
    );
    const cshNotApplicableLFOsTotal = cshNotApplicableLFOs.reduce((a, b) => {
        const setAmount = b.setAmount || 0;
        return a + setAmount;
    }, 0);

    const cshTotal = total - cshNotApplicableLFOsTotal;

    return cshTotal;
}

export function calcNonRestitutionTotal(lfos) {
    const lfoArr = concatLfos(lfos);
    const nonRestitionLFOs = lfoArr.filter(
        (lfo) => !lfo.restitution && lfo.impose && !lfo.suspend && !lfo.defer
    );
    const nonRestitutionTotal = nonRestitionLFOs.reduce((a, b) => {
        const setAmount = b.setAmount || 0;
        return a + setAmount;
    }, 0);

    return nonRestitutionTotal;
}

export function calcRestitutionTotal(lfos) {
    const lfoArr = concatLfos(lfos);
    const restitutionLfos = lfoArr.filter(
        (lfo) => lfo.restitution && lfo.impose && !lfo.suspend && !lfo.defer
    );
    const restitutionTotal = restitutionLfos.reduce((a, b) => {
        const setAmount = b.setAmount || 0;
        return a + setAmount;
    }, 0);

    return restitutionTotal;
}

export function calcMonthlyPayment(
    monthlyInterest,
    lfos,
    duration,
    thirdPartyPayments
) {
    const durValue = duration.value;
    const durUnits = duration.units;
    const nonRestTotal = calcNonRestitutionTotal(lfos);
    const restTotal = calcRestitutionTotal(lfos);
    const monthsToPay = durUnits === "years" ? durValue * 12 : durValue;
    const a = restTotal + nonRestTotal + (monthlyInterest * restTotal) / 2;

    const monthlyPayment =
        (a +
            Math.sqrt(
                Math.pow(a, 2) +
                (4 * monthsToPay * monthlyInterest * Math.pow(restTotal, 2)) / 2
            )) /
        (2 * monthsToPay);

    const monthlyFee = thirdPartyPayments.enabled ?
        thirdPartyPayments.monthlyFee :
        0;

    return formatNum(monthlyPayment + monthlyFee);
}

export function calcYearsToPayoff(annualInterest, lfos, payment) {
    const nonRestitutionTotal = calcNonRestitutionTotal(lfos);
    const restitutionTotal = calcRestitutionTotal(lfos);
    const monthsToPayoffRestitution = restitutionTotal / payment;
    const interest = annualInterest / 12 / 100;
    // f is the first month where restitution principal has been paid off (first n > P0/m)
    const f = Number.isInteger(monthsToPayoffRestitution) ?
        monthsToPayoffRestitution + 1 :
        Math.ceil(monthsToPayoffRestitution);
    const interestTotalInMonthF =
        interest * f * (restitutionTotal - (payment * (f - 1)) / 2) -
        (f * payment - restitutionTotal);

    const yearsToPayoff =
        ((nonRestitutionTotal + interestTotalInMonthF) / payment + f) / 12;

    return isNaN(yearsToPayoff) ? yearsToPayoff : formatNum(yearsToPayoff);
}

export function calcRemainingBalance(payment, lfos, duration) {
    const durValue = duration.value;
    const durUnits = duration.units;
    const nonRestitutionTotal = calcNonRestitutionTotal(lfos);
    const restitutionTotal = calcRestitutionTotal(lfos);
    let balance;

    const monthsToPay = durUnits === "years" ? durValue * 12 : durValue;

    if (!payment) {
        balance = nonRestitutionTotal + restitutionTotal * (1 + 0.01 * monthsToPay);
        return balance > 0 ? formatNum(balance) : 0;
    }

    if (!restitutionTotal) {
        balance = nonRestitutionTotal - payment * monthsToPay;
        return balance > 0 ? formatNum(balance) : 0;
    }

    const monthsToPayoffRestitution = restitutionTotal / payment;
    // f is the first month where restitution principal has been paid off (first n > P0/m)
    const f = Number.isInteger(monthsToPayoffRestitution) ?
        monthsToPayoffRestitution + 1 :
        Math.ceil(monthsToPayoffRestitution);

    if (monthsToPay <= monthsToPayoffRestitution) {
        const restitutionRemainingInMonthN =
            restitutionTotal - monthsToPay * payment;
        const interestRemainingInMonthN =
            0.01 *
            monthsToPay *
            (restitutionTotal - (payment * (monthsToPay - 1)) / 2);

        balance =
            restitutionRemainingInMonthN +
            interestRemainingInMonthN +
            nonRestitutionTotal;
    } else if (monthsToPay === f) {
        const interestRemainingInMonthF =
            f * 0.01 * (restitutionTotal - (payment * (f - 1)) / 2) -
            (f * payment - restitutionTotal);

        balance = nonRestitutionTotal + interestRemainingInMonthF;
    } else if (monthsToPay > f) {
        const interestRemainingInMonthN =
            f * 0.01 * (restitutionTotal - (payment * (f - 1)) / 2) -
            (f * payment - restitutionTotal) -
            (monthsToPay - f) * payment;

        balance = nonRestitutionTotal + interestRemainingInMonthN;
    }

    return balance > 0 ? formatNum(balance) : 0;
}

export function includesRestitution(lfos) {
    const lfoArr = concatLfos(lfos);
    const restitutionLfos = lfoArr.filter(
        (lfo) => lfo.restitution && lfo.impose && !lfo.suspend && !lfo.defer
    );

    return restitutionLfos.length > 0;
}

export function getImposedLfos(lfos) {
    const imposedLfos = lfos.filter((lfo) => lfo.impose);

    return imposedLfos;
}

export function calcSuspendedBaseFine(baseFine, type, calcSuspendedBaseFine) {
    const setAmount = baseFine.setAmount || 0;
    let suspendedBaseFine;

    if (type === "F") {
        suspendedBaseFine = baseFine.suspend ? setAmount : 0;
        return suspendedBaseFine - calcSuspendedBaseFine;
    }

    if (baseFine.suspend) {
        if (baseFine.max) {
            suspendedBaseFine = baseFine.max;
        } else if (type === "S") {
            suspendedBaseFine = 1000;
        } else {
            suspendedBaseFine = 5000;
        }
        return suspendedBaseFine - calcSuspendedBaseFine;
    }

    if (baseFine.max) {
        suspendedBaseFine = baseFine.max - setAmount;
    } else if (type === "S") {
        suspendedBaseFine = 1000 - setAmount;
    } else {
        suspendedBaseFine = 5000 - setAmount;
    }

    return suspendedBaseFine - calcSuspendedBaseFine;
}

export function calculateCaseFines(lfoCases) {
    const fineCaseLfos = lfoCases.filter((lfoCase) => lfoCase.type === "fine");
    return fineCaseLfos.reduce((acc, lfo) => acc + lfo.setAmount, 0);
}

export function setDuiBaseFine(fine, numPriors, bac) {
    const map = {
        "No Priors": {
            manMin: {
                "< 0.15 or No Test": 350,
                "> 0.15 or Refusal": 500,
            },
            minorPresent: 1000,
            minorPresentMax: 5000,
        },
        "One Prior": {
            manMin: {
                "< 0.15 or No Test": 500,
                "> 0.15 or Refusal": 750,
            },
            minorPresent: 2000,
            minorPresentMax: 5000,
        },
        "Two or More Priors": {
            manMin: {
                "< 0.15 or No Test": 1000,
                "> 0.15 or Refusal": 1500,
            },
            minorPresent: 3000,
            minorPresentMax: "10,000",
        },
    };

    const manMin = map[numPriors].manMin[bac];

    fine.min = manMin;
    fine.manMin = manMin;
    fine.default = manMin;
    fine.setAmount = manMin;
    fine.notes = `May suspend if indigent. If passenger(s) under 16, fine shall not be less than $${
    map[numPriors].minorPresent
  } for ${numPriors.toLowerCase()} for each passenger under 16 and not more than $${
    map[numPriors].minorPresentMax
  } for ${numPriors.toLowerCase()} for each pasenger under 16. One thousand dollars of the fine for each passenger under 16 may not be suspended unless the court finds the offender to be indigent`;

    return fine;
}

export function modifyCaseLfos(court, lfos, modifications) {
    modifications.forEach((mod) => {
        if (mod.type === "remove") {
            lfos.case = lfos.case.filter((lfo) => lfo.name !== mod.name);
        }

        if (mod.type === "add") {
            const hasLfo = containsLfo(lfos.case, mod.name);

            if (court === "superior" && mod.name === "Conviction Fee") {} else if (!hasLfo) {
                const lfoToAdd = _.cloneDeep(
                    LFOs.filter((lfo) => lfo.name === mod.name)[0]
                );
                lfos.case = [lfoToAdd, ...lfos.case];
            }
        }

        if (typeof mod.type === "number") {
            lfos.case.forEach((lfo, idx) => {
                if (lfo.name === mod.name) {
                    lfo.default = mod.type;
                    lfo.min = mod.type;
                    lfo.max = mod.type;
                    lfo.setAmount = mod.type;
                    lfos.case[idx] = lfo;
                }
            });
        }
    });
    return lfos;
}

export function determineDuiMins(court, charges, lfos) {
    const dui = charges.filter((charge) => charge.dui)[0];
    let map = {};

    dui.options.forEach((option) => (map[option.key] = option.value));

    const violDate = map.violDate;
    const baseFine = setDuiBaseFine(
        lfos[`charge-${dui.id}`][0],
        map.priors,
        map.bac
    );

    lfos[`charge-${dui.id}`][0] = baseFine;

    if (violDate === "1-1-99 to 7-21-01") {
        modifyCaseLfos(court, lfos, [{
                name: "Title 46 Penalty",
                type: "remove"
            },
            {
                name: "Conviction Fee",
                type: "remove"
            },
            {
                name: "Alcohol Violators Assessment",
                type: 125
            },
        ]);
    } else if (violDate === "7-22-01 to 7-26-03") {
        modifyCaseLfos(court, lfos, [{
                name: "Title 46 Penalty",
                type: "add"
            },
            {
                name: "Conviction Fee",
                type: "remove"
            },
            {
                name: "Alcohol Violators Assessment",
                type: 125
            },
        ]);
    } else if (violDate === "7-27-03 to 7-23-05") {
        modifyCaseLfos(court, lfos, [{
                name: "Title 46 Penalty",
                type: "add"
            },
            {
                name: "Conviction Fee",
                type: "remove"
            },
            {
                name: "Alcohol Violators Assessment",
                type: 125
            },
        ]);
    } else if (violDate === "7-24-05 to 7-21-11") {
        modifyCaseLfos(court, lfos, [{
                name: "Title 46 Penalty",
                type: "add"
            },
            {
                name: "Conviction Fee",
                type: "add"
            },
            {
                name: "Alcohol Violators Assessment",
                type: 125
            },
        ]);
    } else if (violDate === "7-22-11 to 7-22-17") {
        modifyCaseLfos(court, lfos, [{
                name: "Title 46 Penalty",
                type: "add"
            },
            {
                name: "Conviction Fee",
                type: "add"
            },
            {
                name: "Alcohol Violators Assessment",
                type: 200
            },
        ]);
    } else if (violDate === "7-23-17 to Present") {
        modifyCaseLfos(court, lfos, [{
                name: "Title 46 Penalty",
                type: "add"
            },
            {
                name: "Conviction Fee",
                type: "add"
            },
            {
                name: "Alcohol Violators Assessment",
                type: 250
            },
        ]);
    }
    return lfos;
}

export function waiveAllFees(lfos) {
    Object.keys(lfos).forEach((key) => {
        lfos[key].forEach((lfo) => {
            if (lfo.enableIfMentalIllness) return;

            lfo.impose = false;
            lfo.disable = true;
        });
    });

    return lfos;
}

export function resetLFOs(lfos) {
    Object.keys(lfos).forEach((key) => {
        lfos[key].forEach((lfo) => {
            if (lfo.mandatory) {
                lfo.impose = true;
                lfo.setAmount = lfo.default;
            }

            lfo.disable = false;
        });
    });

    return lfos;
}

export function waiveAllCostsAndConvictionFee(lfos) {
    Object.keys(lfos).forEach((key) => {
        lfos[key].forEach((lfo) => {
            if (lfo.waiveIfIndigent) {
                lfo.impose = false;
                lfo.disable = true;
            }

            if (lfo.manMin) {
                lfo.setAmount = lfo.manMin;
            }
        });
    });

    return lfos;
}

export function savePreference(key, value) {
    const preferences = JSON.parse(localStorage.getItem("preferences")) || {};
    preferences[key] = value;
    localStorage.setItem("preferences", JSON.stringify(preferences));
}

export function getUserPreferences() {
    const state = _.cloneDeep(initialState);
    const preferences = JSON.parse(localStorage.getItem("preferences"));
    if (preferences) {
        state.lfos.case = _.cloneDeep(courtLfos[preferences.court]);
        return _.merge(state, preferences);
    }
    return state;
}

export function woopraIdentify(state) {
    let userId = localStorage.getItem("userId");

    if (!userId) {
        userId = uuidv1();
        localStorage.setItem("userId", userId);
    }

    window.woopra
        .identify({
            email: userId, // this was suggested by woopra support
            court: state.court,
            role: state.occupation,
        })
        .push();
}

export function previousVersionCleanup() {
    const storageVersion = "1";
    let userStorageVersion = localStorage.getItem("storage-version");
    if (!userStorageVersion || userStorageVersion !== storageVersion) {
        localStorage.clear();
        localStorage.setItem("storage-version", storageVersion);
    }
}



// WEBPACK FOOTER //
// ./src/lib/helpers.js