import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "DRIVE ON CROSSWALK USED BY SOMEONE IN WHEELCHAIR OR USING WHITE CANE OR SERVICE DOG",
        type: "S",
        lfos: [fines[0], csFees[29]],
        rcws: [{
                num: "70.84.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.84.040",
            },
            {
                num: "70.84.070",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.84.070",
            },
        ],
    },
    {
        name: "ASSAULT IV",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.36.041",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.041",
        }, ],
    },

    {
        name: "TELEPHONE HARASSMENT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.61.230(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.230",
        }, ],
    },
    {
        name: "CYBERSTALKING - GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.61.260(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.260",
        }, ],
    },
    {
        name: "ASSAULT III - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.031",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.031",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ASSAULT IV - PRIOR DOMESTIC VIOLENCE (DV) - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.041",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.041",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "COERCION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.36.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.070",
        }, ],
    },
    {
        name: "MALICIOUS HARASSMENT - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.080",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.080",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "INTERFERE WITH REPORTING DOMESTIC VIOLENCE (DV)",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.36.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.150",
        }, ],
    },
    {
        name: "UNLAWFUL IMPRISONMENT - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.40.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "HARASSMENT - PREVIOUS CONVICTION/THREAT TO KILL - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.46.020(2)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MALICIOUS MISCHIEF II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.48.080",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.080",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MALICIOUS MISCHIEF III",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.48.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.090",
        }, ],
    },
    {
        name: "CRIMINAL TRESPASS I",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.52.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.070",
        }, ],
    },
    {
        name: "VIOLATE TEMPORARY RESTRAINING ORDER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "26.44.063",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.44.063",
        }, ],
    },
    {
        name: "ASSAULT IV -  ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.041",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.041",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "INTERFERE WITH REPORTING DOMESTIC VIOLENCE (DV) - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.150",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.150",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "REFUSE TO COMPLY WITH TEMPORARY RESTRAIN ORDER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "26.44.067",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.44.067",
        }, ],
    },
    {
        name: "TELEPHONE HARASSMENT- ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9.61.230(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.230",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PERMIT TELEPHONE USE TO HARASS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.61.240",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.240",
        }, ],
    },
    {
        name: "HARASSMENT - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.46.020(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MALICIOUS MISCHIEF III - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.48.090",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.090",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL TRESPASS I - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.52.070",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.070",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL TRESPASS II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.52.080",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.080",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "(VNCO) NO CONTACT/PROTECTION ORDER VIOLATION - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "26.50.110(1)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.50.110",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VOYEURISM II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.44.115(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.115",
        }, ],
    },
    {
        name: "FALSE INSURANCE CLAIM/PROOF LOSS OVER $1500",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "48.30.230(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=48.30.230",
        }, ],
    },
    {
        name: "HUMAN REMAINS MOVE/DISTURB/MOLEST",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "68.50.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.50.050",
        }, ],
    },
    {
        name: "INDECENT EXPOSURE PREVIOUS CONVICTION - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.88.010(2)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.010",
        }, ],
    },
    {
        name: "PRACTICE DENTISTRY WITHOUT LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.32.091",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.32.091",
        }, ],
    },
    {
        name: "UNLAWFUL SALE CABLE TV",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.230",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.230",
        }, ],
    },
    {
        name: "(PDP) - DRUG PARAPHERNALIA-DELIVERY BY ADULT TO MINOR WHO IS AT LEAST 3 YEARS JUNIOR or ATTEMPT/CONSPIRACY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "69.50.412(3)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.412",
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407",
            },
        ],
    },
    {
        name: "USE OF BUILDING FOR DRUG PURPOSES - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "69.53.010",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.53.010",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MARIJUANA POSS (POM) UNDER 40 GRAMS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.50.4014",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014",
        }, ],
    },
    {
        name: "(PDP) - DRUG PARAPHERNALIA -USE/DELIVERY or ATTEMPT/CONSPIRACY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "69.50.412",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.412",
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407",
            },
        ],
    },
    {
        name: "(PDP) - DRUG PARAPHERNALIA - POSSESS WITH INTENT TO USE",
        type: "S",
        lfos: [fines[0]],
    },
    {
        name: "(PDP) - DRUG PARAPHERNALIA-ADVERTISE or ATTEMPT/CONSPIRACY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "69.50.412(4)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.412",
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407",
            },
        ],
    },
    {
        name: "MARIJUANA PURCHASE/ATTEMPT UNDER 21 YEARS OLD",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.50.560(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.560",
        }, ],
    },
    {
        name: "CRIMINAL MISCHIEF",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.84.010(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.010",
        }, ],
    },
    {
        name: "LIQUOR SEAL VIOLATION - 1ST or 2ND OFFENSE",
        type: "G",
        lfos: [fines[131]],
        rcws: [{
            num: "66.44.120(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.120",
        }, ],
    },
    {
        name: "VIOLATE CHILD ABUSE REPORT REQUIREMENTS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "26.44.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.44.040",
        }, ],
    },
    {
        name: "OFFICIAL MISCONDUCT- NOTARY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "42.44.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=42.44.160",
        }, ],
    },
    {
        name: "PRACTICE LAW UNLAWFULLY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "2.48.180(3)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=2.48.180",
        }, ],
    },
    {
        name: "OPER VESSEL UNDER INFLUENCE ALCOHOL/MARIJUANA/DRUG",
        type: "G",
        lfos: [fines[0]],
        tags: ["ER"],
        rcws: [{
            num: "79A.60.040(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.040",
        }, ],
    },
    {
        name: "VIOLATE CIVIL ANTI-HARASSMENT ORDER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "10.14.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.14.170",
        }, ],
    },
    {
        name: "SEARCH - WITHOUT WARRANT UNLAWFUL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "10.79.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.79.040",
        }, ],
    },
    {
        name: "UNLAWFUL HARBORING MINOR - SEXUAL MOTIVATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "13.32A.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=13.32A.080",
        }, ],
    },
    {
        name: "UNLAWFUL HARBOR MINOR - SEXUAL MOTIVATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "13.32A.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=13.32A.080",
        }, ],
    },
    {
        name: "VIOLATE Chapter 15.60 APIARIES REGULATIONS - 2ND OR SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "15.60.055(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=15.60.055",
        }, ],
    },
    {
        name: "DANGEROUS DOGS - CERTIFICATE REGISISTRATION REQUIREMENTS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.08.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.08.080",
        }, ],
    },
    {
        name: "DANGEROUS DOG - GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.08.100(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.08.100",
        }, ],
    },
    {
        name: "QUARANTINE HOLD ORDER VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.36.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.010",
        }, ],
    },
    {
        name: "ANIMAL FIGHTING FURTHERANCE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "16.52.117",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.117",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "POISONING ANIMALS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.190(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.190",
        }, ],
    },
    {
        name: "OWN/CARE ANIMAL-3RD OR SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.200(8)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.200",
        }, ],
    },
    {
        name: "ANIMAL CRUELTY I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "16.52.205",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.205",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ANIMAL CRUELTY II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.207",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.207",
        }, ],
    },
    {
        name: "POSSESS OVER 50 DOGS OVER 6 MONTHS AGE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.310(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.310",
        }, ],
    },
    {
        name: "FAIL TO MEET MINIMUM CARE STANDARDS -DOGS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.310(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.310",
        }, ],
    },
    {
        name: "LIVESTOCK - ALTER/REMOVE BRAND",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.57.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.57.120",
        }, ],
    },
    {
        name: "REMOVE HORSE MICROCHIP TO DEFRAUD",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "16.57.405",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.57.405",
        }, ],
    },
    {
        name: "RECORD KEEPING - PESTICIDE APPLICATION - 2ND OFFENSE 5 YEARS OR LESS SINCE PREVIOUS OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "17.21.100(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=17.21.100",
        }, ],
    },
    {
        name: "UNLCENSED MASSAGE/REFLEXOLOGY - 2ND OR SUBSEQUENT VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.108.035(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.108.035",
        }, ],
    },
    {
        name: "HEALTH PROFESSIONAL - UNLICENSED PRACTICE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.130.190(7)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.130.190",
        }, ],
    },
    {
        name: "OBTAIN HEALTHCARE LICENSE BY FRAUD",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.130.200",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.130.200",
        }, ],
    },
    {
        name: "VIOLATE PRIVATE INVESTIGATOR LICENSING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.165.150(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.165.150",
        }, ],
    },
    {
        name: "VIOLATE OF SECURITY GUARD LICENSE REQUIREMENTS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.170.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.170.160",
        }, ],
    },
    {
        name: "ILLEGAL DISPLAY OF POLICE INSIGNIA",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.170.160(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.170.160",
        }, ],
    },
    {
        name: "UNLICENSED BAIL BOND RECOVERY AGENT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.185.170(4)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.185.170",
        }, ],
    },
    {
        name: "BAILBOND PLANNED FORCED ENTRY VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.185.170(4)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.185.170",
        }, ],
    },
    {
        name: "OBTAINS OR ATTEMPTS TO OBTAIN LICENSE BY FRAUD/MISREPRESENTATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.235.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.235.170",
        }, ],
    },
    {
        name: "CONTRACTING WITHOUT A LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.27.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.27.020",
        }, ],
    },
    {
        name: "UNREGISTERED ADVERTISING CONTRACTOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.27.020(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.27.020",
        }, ],
    },
    {
        name: "(FTR) FAILURE TO REPORT NOTICE OF INFRACTION ISSUED BY DOL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.27.240",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.27.240",
        }, ],
    },
    {
        name: "(FTR ) FAILURE TO REPORT (NOI) NOTICE OF INFRACTION CONTRACTORS REGISTRATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.27.290",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.27.290",
        }, ],
    },
    {
        name: "FAIL TO REGISTER AS ENGINEER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "18.43.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.43.010",
        }, ],
    },
    {
        name: "FAIL TO REGISTER CHARITABLE ORGANIZATION - GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.09.065(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.09.065",
        }, ],
    },
    {
        name: "FAIL TO COMPLY WITH SOLICIT RULES-GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.09.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.09.100",
        }, ],
    },
    {
        name: "OBTAIN INFORMATION UNDER FALSE PRETENSES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.182.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.182.130",
        }, ],
    },
    {
        name: "PROVIDE CONSUMER INFORMATION TO UNAUTHORIZED PERSON",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.182.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.182.140",
        }, ],
    },
    {
        name: "REMOVE COMPUTER MANUFACTURER NUMBERS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.194.030(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.194.030",
        }, ],
    },
    {
        name: "MAKE FALSE ENTRY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.194.030(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.194.030",
        }, ],
    },
    {
        name: "UNUSED PROPERTY MERCHANT-PROHIBITED SALES - 2ND OFFENSE WITHIN 5 YEARS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.210.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.210.020",
        }, ],
    },
    {
        name: "MOTION PICTURE UNAUTHORIZED RECORDING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.235.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.235.010",
        }, ],
    },
    {
        name: "SCRAP METALS VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.290.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.290.070",
        }, ],
    },
    {
        name: "NO SCRAP METAL LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.290.100(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.290.100",
        }, ],
    },
    {
        name: "INNKEEPER - DEFRAUDING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.48.110(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.48.110",
        }, ],
    },
    {
        name: "DUTY TO RECORD INFORMATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.020",
        }, ],
    },
    {
        name: "PRECIOUS METAL DEALER RECORDS VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.025",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.025",
        }, ],
    },
    {
        name: "FAILURE TO FURNISH RECORD",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.040(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.040",
        }, ],
    },
    {
        name: "FAILURE TO REPORT STOLEN PROPERTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.040(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.040",
        }, ],
    },
    {
        name: "REMOVED PROPERTY WITHIN 30 DAYS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.055",
        }, ],
    },
    {
        name: "RETAIN PRECIOUS METAL PROPERTY VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.057",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.057",
        }, ],
    },
    {
        name: "EXCEEDING AUTHORIZED INTEREST AMOUN",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.060",
        }, ],
    },
    {
        name: "LIMITS ON SALE OF PLEDGED PROPERTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.061",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.061",
        }, ],
    },
    {
        name: "PURCHASE/RECEIVE PROPERTY FROM FELON OR UNDER 18",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.066",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.066",
        }, ],
    },
    {
        name: "PRECIOUS METAL DEALER FALSE ENTRY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.067(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.067",
        }, ],
    },
    {
        name: "PRECIOUS METAL - RECEIVE FROM PERSON CONVICTED",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.067(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.067",
        }, ],
    },
    {
        name: "PRECIOUS METAL DEALER VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "19.60.067(1)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.60.067",
        }, ],
    },
    {
        name: "INTERFERE WITH DIRECTOR OF AGRICULTURE IN PERFORMANCE OF DUTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "20.01.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=20.01.020",
        }, ],
    },
    {
        name: "DISCHARGE FIREARMS WHERE PROHIBITED",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "220.500.140(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=220.500.140",
        }, ],
    },
    {
        name: "FAMILY NON-SUPPORT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "26.20.035",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.20.035",
        }, ],
    },
    {
        name: "SELL/GIVE TOBACCO TO MINORS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "26.28.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.28.080",
        }, ],
    },
    {
        name: "FAIL TO REPORT ABUSE OR NEGLECT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "26.44.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.44.080",
        }, ],
    },
    {
        name: "WILLFULLY DISOBEY SCHOOL PERSONNEL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "28A.635.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.020",
        }, ],
    },
    {
        name: "DISOBEY SCHOOL ADMINISTRATOR ORDER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "28A.635.020(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.020",
        }, ],
    },
    {
        name: "REFUSE TO LEAVE PUBLIC PROPERTY NEAR SCHOOL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "28A.635.020(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.020",
        }, ],
    },
    {
        name: "VOTER REGISTRATION/BALLOT - DESTROY/ALTER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "29A.84.050(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.050",
        }, ],
    },
    {
        name: "FAIL TO RETURN OTHERS VOTER REGISTRATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "29A.84.050(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.050",
        }, ],
    },
    {
        name: "INITIATIVE/REFERENDUM - SIGN MORE THAN ONE PETITION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "29A.84.230(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.230",
        }, ],
    },
    {
        name: "INITIATIVE/REFERENDUM - CORRUPT PRACTICES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "29A.84.250",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.250",
        }, ],
    },
    {
        name: "FALSELY AUDITING PAYING CLAIMS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "42.20.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=42.20.060",
        }, ],
    },
    {
        name: "VIOLATE GOVERNOR ORDER STATE EMERGENCY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "43.06.220",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=43.06.220",
        }, ],
    },
    {
        name: "OPERATING AIRCRAFT WHILE UNDER THE INFLUENCE /RECKLESS",
        type: "G",
        lfos: [fines[0]],
        tags: ["ER"],
        rcws: [{
            num: "47.68.220",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.220",
        }, ],
    },
    {
        name: "AIRCRAFT EXCISE TAX EVASION - 1ST OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "47.68.255",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.255",
        }, ],
    },
    {
        name: "FALSE INSURENCE CLAIM/PROOF LOSS LESS THAN OR EQUAL $1500",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "48.30.230(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=48.30.230",
        }, ],
    },
    {
        name: "VIOLATION OF SALE/LEASE OF PROPERTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "58.17.300",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=58.17.300",
        }, ],
    },
    {
        name: "FALSIFY RENTAL INSPECTION CERTIFICATE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "59.18.125(10)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=59.18.125",
        }, ],
    },
    {
        name: "ENTERING CONTAMINATED PROPERTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "64.44.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=64.44.040",
        }, ],
    },
    {
        name: "LIQUOR IN PUBLIC PLACE WITHOUT PERMIT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "66.24.481",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.24.481",
        }, ],
    },
    {
        name: "KEG REGISTRATION REQUIREMENT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "66.28.200",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.200",
        }, ],
    },
    {
        name: "KEG PURCHASER REQUIREMENT VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "66.28.210",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.210",
        }, ],
    },
    {
        name: "SUPPLY LIQUOR/PREMISES TO MINOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.270(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.270",
        }, ],
    },
    {
        name: "(MIP) MINOR POSS AND/OR CONSUMPTION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.270(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.270",
        }, ],
    },
    {
        name: "AMUSEMENT RIDE VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "67.42.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=67.42.020",
        }, ],
    },
    {
        name: "HOLDING BODY FOR DEBT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "68.50.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.50.120",
        }, ],
    },
    {
        name: "CEMETERY DAMAGE/OBSTRUCT FUNERAL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "68.56.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.56.010",
        }, ],
    },
    {
        name: "MISBRAND FOOD/SHELL FISH II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.04.938(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.04.938",
        }, ],
    },
    {
        name: "SHELLFISH - SELL WITHOUT TAG/LABEL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.30.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.30.020",
        }, ],
    },
    {
        name: "SHELLFISH GROWING - RULES & REGS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.30.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.30.030",
        }, ],
    },
    {
        name: "SHELLFISH GROWING - CERTIFICATES OF APPROVAL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.30.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.30.050",
        }, ],
    },
    {
        name: "POSSESS SHELLFISH WITHOUT CERTIFICATE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.30.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.30.110",
        }, ],
    },
    {
        name: "POSSESS STEROID UNDER 200 TABS/8-2CC BOTTLES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.41.350(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.350",
        }, ],
    },
    {
        name: "EPHEDRINE ETC SALE/BUY - NO PHOTO IDENTIFICATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.105",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.105",
        }, ],
    },
    {
        name: "EPHEDRINE ETC ACCESSIBLE CUSTOMER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.105(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.105",
        }, ],
    },
    {
        name: "EPHEDRINE ETC SELL TO PERSON UNDER 18",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.105(5)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.105",
        }, ],
    },
    {
        name: "EPHEDRINE/PSEUDEPHEDRINE SELL/ACQUIRE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.110",
        }, ],
    },
    {
        name: "SELL EPHEDRINE/PSEUDOEPHIDRINE/PHENYLPROPANOLAMINE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.110(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.110",
        }, ],
    },
    {
        name: "ACQUIRE EPHEDRINE/PSEUDOEPHEDRINE/PHENYLPROPANOLAMINE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.110(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.110",
        }, ],
    },
    {
        name: "METHAMPHETAMINE - POSSESS PRECURSOR DRUG",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.120",
        }, ],
    },
    {
        name: "PURCHASE/POSSESS IODINE/METHYLSULFONYLMETHANE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.135(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.135",
        }, ],
    },
    {
        name: "FAIL TO REPORT ABUSE IN NURSING HOME",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.124.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.124.070",
        }, ],
    },
    {
        name: "VAPOR UNLICENSED BUSINESS - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "70.345.030(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.345.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VAPOR PRODUCT TASTING VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.345.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.345.100",
        }, ],
    },
    {
        name: "POLLUTING WATER SUPPLY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.54.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.54.010",
        }, ],
    },
    {
        name: "UNLAWFUL ENTRY BUILDING/VEHICLE - EXPLOSIVES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.74.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.160",
        }, ],
    },
    {
        name: "INTIMIDATE/HARASS EXPLOSIVE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "70.74.275",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.275",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ABANDONING EXPLOSIVES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.74.295",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.295",
        }, ],
    },
    {
        name: "POSSESS EXPLOSIVES/STINK BOMBS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.74.310",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.310",
        }, ],
    },
    {
        name: "POSSESS FIREWORKS, MORE 1 LB",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.485(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.485",
        }, ],
    },
    {
        name: "DISCHARGE FIREWORKS IN RECKLESS MANNER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.488",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.488",
        }, ],
    },
    {
        name: "UNLAWFUL SALES OF FIREWORKS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.515",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.515",
        }, ],
    },
    {
        name: "VULNERABLE ADULT FAIL TO REPORT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "74.34.053(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.34.053",
        }, ],
    },
    {
        name: "DUMPING MILL WASTE - FOREST DEBRIS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.235",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.235",
        }, ],
    },
    {
        name: "RECKLESS BURNING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.740",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.740",
        }, ],
    },
    {
        name: "FOREST PRODUCT - FALSE BRANDING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "76.36.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.36.110",
        }, ],
    },
    {
        name: "TAKE ENDANGERED FISH/WILDLIFE II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.120(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.120",
        }, ],
    },
    {
        name: "UNLAWFUL USE OF POISON OR EXPLOSIVES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.150",
        }, ],
    },
    {
        name: "WASTE FISH/WILDLIFE /BIG GAME",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.170",
        }, ],
    },
    {
        name: "INTERFERENCE WITH FISH/HUNT GEAR I",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.180(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.180",
        }, ],
    },
    {
        name: "TRAPPING VIOLATION - UNLAWFUL USE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.194(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.194",
        }, ],
    },
    {
        name: "TRAPPING VIOLATION - UNLAWFUL BUY/SELL FUR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.194(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.194",
        }, ],
    },
    {
        name: "TRAPPING VIOLATION - UNLAWFUL USE BODY GRIPPING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.194(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.194",
        }, ],
    },
    {
        name: "POISON ANIMAL - CYANIDE/COMPOUND 1080",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.196(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.196",
        }, ],
    },
    {
        name: "OBSTRUCT TAKING OF FISH/WILDLIFE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.210",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.210",
        }, ],
    },
    {
        name: "TAKE/HUNT BLACK BEAR WITH BAIT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.245(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.245",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING BEAR COUGAR BOBCAT LYNX WITH DOG",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.245(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.245",
        }, ],
    },
    {
        name: "RELEASE/PLANT/POSSESS FISH/WILDLIFE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.250(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.250",
        }, ],
    },
    {
        name: "TRAFFICKING FISH/WILDLIFE II -   ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "77.15.260(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.260",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "POSSESS FISH/WILDLIFE VIOLATION OTHER STATE/COUNTRY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.265",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.265",
        }, ],
    },
    {
        name: "PROVIDE FALSE INFORMATION REGARDING FISH/WILDLIFE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.270",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.270",
        }, ],
    },
    {
        name: "TRANSPORTATION OF FISH/WILDLIFE I",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.290(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.290",
        }, ],
    },
    {
        name: "UNLAWFUL HYDRAULIC PROJECT ACTVTIES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.300",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.300",
        }, ],
    },
    {
        name: "FAIL TO USE/MAINTAIN FISH GUARD",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.310",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.310",
        }, ],
    },
    {
        name: "FAIL TO PROVIDE/MAINTAIN FISHWAY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.320",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.320",
        }, ],
    },
    {
        name: "UNLAWFUL OPERATION OF A GAME FARM",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.340",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.340",
        }, ],
    },
    {
        name: "INTERFERING IN DEPARTMENT OPERATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.360",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.360",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING GAME ANIMALS II - RULE VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.430(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.430",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING GAME ANIMALS I",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.430.3",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.430.3",
        }, ],
    },
    {
        name: "AVOID WILDLIFE CHECK STATION/INSPECTION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.470",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.470",
        }, ],
    },
    {
        name: "COMMERCIAL FISH WITHOUT LICENSE II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.500(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.500",
        }, ],
    },
    {
        name: "GAME/FOOD FISH GUIDE/CHARTER NO LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.510",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.510",
        }, ],
    },
    {
        name: "COMMERCIAL FISHING WITH UNLAWFUL GEAR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.520",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.520",
        }, ],
    },
    {
        name: "UNLAWFUL USE SHELLFISH GEAR - COMMERCIAL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.522",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.522",
        }, ],
    },
    {
        name: "UNLAWFUL USE NONDESIGNATED VESSEL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.530(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.530",
        }, ],
    },
    {
        name: "USE COMMERCIAL FISHERY LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.540",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.540",
        }, ],
    },
    {
        name: "VIOLATE COMMERCIAL FISHING AREA/TIME II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.550(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.550",
        }, ],
    },
    {
        name: "TAKING FISH/SHELLFISH INDIAN FISHERY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.570(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.570",
        }, ],
    },
    {
        name: "USING NET TO TAKE FISH II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.580(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.580",
        }, ],
    },
    {
        name: "USE OF NET, RETAIN FISH II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.580(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.580",
        }, ],
    },
    {
        name: "USE COMMERCIAL FISH VESSEL FOR RECREATIONAL FISHNG",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.590",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.590",
        }, ],
    },
    {
        name: "ENGAGE COMMERCIAL WILDLIFE ACTVTY NO LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.600",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.600",
        }, ],
    },
    {
        name: "FISH DEALNG ACTVTY NO LICENSE I or II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.620",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.620",
        }, ],
    },
    {
        name: "UNLAWFUL FISH CATCH ACCOUNTING II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.630(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.630",
        }, ],
    },
    {
        name: "UNLAWFUL WHOLESALE FISH BUY/DEAL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.640",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.640",
        }, ],
    },
    {
        name: "PURCHASE/USE LICENSE II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.650(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.650",
        }, ],
    },
    {
        name: "UNLAWFUL USE SCIENTIFIC PERMIT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.660",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.660",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING/FISH PRIVILEGES REVOKED/SUSPENDED II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.670(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.670",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING WHILE INTOXICATED",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.675",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.675",
        }, ],
    },
    {
        name: "UNLAWFUL TRADE IN SHARK FIN II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.770(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.770",
        }, ],
    },
    {
        name: "UNLAWFUL USE OF INVASIVE SPECIES II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.809(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.809",
        }, ],
    },
    {
        name: "UNLAW USE OF INVASIVE SPECIES II CHECK STATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.809(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.809",
        }, ],
    },
    {
        name: "UNLAWFUL FISH GUIDE ACTIVITY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.813(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.813",
        }, ],
    },
    {
        name: "FISH GUIDE RULE VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.813(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.813",
        }, ],
    },
    {
        name: "REMOVE FIREWOOD WITHOUT LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "79.15.400",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79.15.400",
        }, ],
    },
    {
        name: "REMOVE FIREWOOD VIOLATON",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "79.15.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79.15.430",
        }, ],
    },
    {
        name: "VESSEL FAIL TO STOP FOR LAW ENFORCEMENT OFFICER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.080",
        }, ],
    },
    {
        name: "OPERATE WHITEWATER RAFT UNSAFE MANNER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.440",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.440",
        }, ],
    },
    {
        name: "VIOLATION OF CHAPTER. BY OFFICER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "81.04.385",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.04.385",
        }, ],
    },
    {
        name: "UNLAWFUL ISSUANCE STOCK",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "81.08.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.08.120",
        }, ],
    },
    {
        name: "TRANSPORT SERVICE - NO FEDERAL AUTHORITY/REGISTRATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "81.66.005",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.66.005",
        }, ],
    },
    {
        name: "AUTO TRANSPORTATION COMPANIES - VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "81.68.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.68.080",
        }, ],
    },
    {
        name: "AUTO TRANSP CO-VIOL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "81.68.080(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.68.080",
        }, ],
    },
    {
        name: "TRANSPORTATION SERVICE - NO FEDERAL AUTHORITY/REGISTRATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "81.68.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.68.100",
        }, ],
    },
    {
        name: "VIOLATE CIGARETTE RESTRICTIONS/REQUIREMENTS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.24.110(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.24.110",
        }, ],
    },
    {
        name: "TOBACCO - DISTRIBUTOR/RETAIL/TRANSPORT VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.26.190(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.26.190",
        }, ],
    },
    {
        name: "BUSINESS CERTIFICATE OF REGISTRATION VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.32.290(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.32.290",
        }, ],
    },
    {
        name: "VIOLATE SPECIAL FUEL TRIP PERMIT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.38.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.38.100",
        }, ],
    },
    {
        name: "UNLAWFUL USE OF DYED FUEL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.38.270(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.38.270",
        }, ],
    },
    {
        name: "SPECIAL FUEL TAX/LICENSE VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.38.270(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.38.270",
        }, ],
    },
    {
        name: "REGISTER AIRCRAFT OUT OF STATE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "82.48.020(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.48.020",
        }, ],
    },
    {
        name: "ADVERT/SELL UNFIT VESSEL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "88.02.360(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=88.02.360",
        }, ],
    },
    {
        name: "VESSEL - EVASIVE REGISTRATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "88.02.400",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=88.02.400",
        }, ],
    },
    {
        name: "VESSEL DEALER - NO LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "88.02.740",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=88.02.740",
        }, ],
    },
    {
        name: "VIOLATION OF PILOTAGE ACT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "88.16.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=88.16.150",
        }, ],
    },
    {
        name: "CONCEALING BIRTH OF DEAD CHILD",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.02.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.02.050",
        }, ],
    },
    {
        name: "UNAUTHORIZED ABORTION - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.02.120",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.02.120",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FALSE CERTIFICATE OF REGISTRATION OF ANIMALS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.08.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.08.030",
        }, ],
    },
    {
        name: "GAS - MISLABELED PRODUCTS SUBSEQUENT VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.16.080(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.080",
        }, ],
    },
    {
        name: "FRAUD IN STOCK SUBSCRIPTION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.24.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.24.010",
        }, ],
    },
    {
        name: "CORPORATION DOING BUSINESS WITHOUT LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.24.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.24.040",
        }, ],
    },
    {
        name: "TELECOMMUNICATIONS FRAUD OVER $50",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.26A.110(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.26A.110",
        }, ],
    },
    {
        name: "TELEPHONE RECORD - RECEIVING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.26A.140(1)(d)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.26A.140",
        }, ],
    },
    {
        name: "INTERFERE, OBSTRUCT ANY COURT, BUILDING OR RESIDENCE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.27.015",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.27.015",
        }, ],
    },
    {
        name: "IDENTITY THEFT II -   ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.35.020(3)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.35.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FALSE STATEMENT BY DEPOSIT ACCOUNT APPLICANT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.38.015",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.38.015",
        }, ],
    },
    {
        name: "FALSE REPRESENTATION RE: TITLE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.38.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.38.020",
        }, ],
    },
    {
        name: "FIRE ALARM/EQUIPMENT TAMPERING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.40.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.40.100",
        }, ],
    },
    {
        name: "(UPF) ATTEMPT UNLAWFUL POSSESSION OF FIREARM",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.41.040(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "DELIVERY OF FIREARM TO INELIGIBLE PERSON - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.080",
        }, ],
    },
    {
        name: "POSSESS UNLAWFUL FIREARM - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.41.190",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.190",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "AIMING OR DISCHARGING FIREARM",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.230",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.230",
        }, ],
    },
    {
        name: "DANGEROUS WEAPON - POSSESS, MANUFACTURE, SELL, FURTIVELY CARRY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.250",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.250",
        }, ],
    },
    {
        name: "DANGEROUS EXHIBITIONS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.260",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.260",
        }, ],
    },
    {
        name: "DISPLAYING WEAPON",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.270",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.270",
        }, ],
    },
    {
        name: "CARRY/POSSESS WEAPON ON SCHOOL PREMISES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.280",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.280",
        }, ],
    },
    {
        name: "WEAPONS PROHIBITED IN CERTAIN PLACES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.300.2",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.300",
        }, ],
    },
    {
        name: "FAILURE TO REGISTER AS FELONY FIREARM OFFENDER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.335",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.335",
        }, ],
    },
    {
        name: "ENCUMBERED, LEASED OR RENTED PERSON",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.45.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.060",
        }, ],
    },
    {
        name: "FRAUDULENT REMOVAL OF PROPERTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.45.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.080",
        }, ],
    },
    {
        name: "FRAUD IN ASSIGNMENT FOR BENEFIT OF",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.45.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.100",
        }, ],
    },
    {
        name: "FRAUDULENT VEHICLE SALE REPORT-DAMAGES LESS THAN $250",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.45.270(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.270",
        }, ],
    },
    {
        name: "FALSE GAMBLING ENTRIES/REFUSAL TO PRODUCE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.170",
        }, ],
    },
    {
        name: "CAUSE PERSON TO VIOLATE GAMBLING RULE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.185",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.185",
        }, ],
    },
    {
        name: "FRAUD OR DECEIT IN CONDUCT GAMBLING ACTIVITY",
        type: "F",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.190",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.190",
        }, ],
    },
    {
        name: "CHEATING AT GAMBLING II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.1962",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.1962",
        }, ],
    },
    {
        name: "WORK IN GAMBLING ACTIVITY - NO LICENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.198",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.198",
        }, ],
    },
    {
        name: "GAMLBING RECORD MAKE, POSSESS, TRANSPORTS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.217",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.217",
        }, ],
    },
    {
        name: "PROFESSIONAL GAMBLING III",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.222",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.222",
        }, ],
    },
    {
        name: "MISCONDUCT OF OFFICER DRAWING JURY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.51.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.51.010",
        }, ],
    },
    {
        name: "SOLICITING JURY DUTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.51.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.51.020",
        }, ],
    },
    {
        name: "MISCONDUCT OFFICER IN CHARGE JURY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.51.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.51.030",
        }, ],
    },
    {
        name: "WITNESS REFUSED ATTEND LEGISLATURE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.55.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.55.020",
        }, ],
    },
    {
        name: "INSTITUTING SUIT IN NAME OF ANOTHER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.62.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.62.020",
        }, ],
    },
    {
        name: "DEPOSIT OF UNWHOLESOME SUBSTANCE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.66.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.66.050",
        }, ],
    },
    {
        name: "FAIL TO REPORT MINOR ENGAGED IN SEXUAL CONDUCT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.68A.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.080",
        }, ],
    },
    {
        name: "COMMUNICATE WITH MINOR FOR IMMORAL PURPOSE GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.68A.090(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.090",
        }, ],
    },
    {
        name: "COMMUNICATE WITH MINOR FOR IMMORAL PURPOSE FELONY OFFNSE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.68A.090(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.090",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PERMITTING COMMERCIAL SEX ABUSE OF MINOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.68A.103",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.103",
        }, ],
    },
    {
        name: "EROTIC PERFORMANCE - MINOR ON PREMISE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.68A.150(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.150",
        }, ],
    },
    {
        name: "WITHHOLD KNOWLEDGE OF VIOLENT OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.69.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.69.100",
        }, ],
    },
    {
        name: "DIVULGING TELEGRAM",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.73.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.73.010",
        }, ],
    },
    {
        name: "INTERCEPT/RECORD PRIVATE COMMUNICATIONS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.73.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.73.030",
        }, ],
    },
    {
        name: "LAW ENFORCEMENT AGENCY SOUND RECORDING VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.73.080",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.73.080",
            },
            {
                num: "9.73.090",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.73.090",
            },
        ],
    },
    {
        name: "FLAG-IMPROPER USE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.86.020(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.86.020",
        }, ],
    },
    {
        name: "FLAG-PUBLIC DESECRATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.86.030(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.86.030",
        }, ],
    },
    {
        name: "LEAVING CHILD UNATTENDED/LIQUOR ESTABLISHMENT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.060",
        }, ],
    },
    {
        name: "FOOD STAMPS-SELL OVER $100",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.140(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.140",
        }, ],
    },
    {
        name: "FEDERAL FOOD STAMP ACT VIOLATION -SELL/TRANSFER UNDER $100",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.142(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.142",
        }, ],
    },
    {
        name: "FOOD STAMPS REDEMPTION VIOLATION - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.144",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.144",
        }, ],
    },
    {
        name: "GUIDE ANINMAL RECKLESS INTERFERENCE - 2ND OR SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.170(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "GUIDE ANIMAL - ALLOW DOG TO INTERFERE - 2ND OR SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.170(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "GUIDE DOG - RECKLESS INJURE/KILL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.170(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "GUIDE DOG - ALLOW DOG INJURE/KILL",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.170(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "STATE PRISONER (PCS) POSSESS CONTROLLED SUBSTANCE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.94.041(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94.041",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "COUNTY/LOCAL PRISONER (PCS) POSSESS CONTROLLED SUBSTANCE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9.94.041(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94.041",
        }, ],
    },
    {
        name: "COUNTY/LOCAL PRISONER (PCS) POSSESS CONTROLLED SUBSTANCE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9.94.041(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94.041",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "WATER QUALITY DATA - FALSIFIED DATA",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "90.48.590",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=90.48.590",
        }, ],
    },
    {
        name: "SHORELINE MANAGEMENT ACT VIOLATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "90.58.220",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=90.58.220",
        }, ],
    },
    {
        name: "CRIMINAL SOLICITATION - GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.28.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.030",
        }, ],
    },
    {
        name: "CRIMINAL CONSPIRACY (GROSS MISDEMEANOR)",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.28.040(3)(d)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.040",
        }, ],
    },
    {
        name: "CUSTODIAL ASSAULT - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.100",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.100",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ASSAULT OF CHILD III - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.36.140",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.140",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CUSTODIAL INTERFERENCE I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.40.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.060",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CUSTODIAL INTERFERENCE II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.40.070(4)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.070",
        }, ],
    },
    {
        name: "LURING OF MINOR - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.40.090",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.090",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL MISTREATMENT III",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.42.035",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.035",
        }, ],
    },
    {
        name: "ABANDON DEPENDENT PERSON III",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.42.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.080",
        }, ],
    },
    {
        name: "RAPE III - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.060",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RAPE OF A CHILD III - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.079",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.079",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CHILD MOLESTATION III - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.089",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.089",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VOYEURISM I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.115(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.115",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "SEX OFFENDER/FELONY FAIL TO REGISTER - ATTEMPT GROSS MISDEMEANOR",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.132(1)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "KIDNAP OFFENDER/NON-FELONY FAIL TO REGISTER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.44.132(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
        }, ],
    },
    {
        name: "SEX OFFENDER/KIDNAP REFUSE DNA",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.44.132(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
        }, ],
    },
    {
        name: "RECKLESS BURNING I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.48.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RECKLESS BURNING II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.48.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.050",
        }, ],
    },
    {
        name: "CRIMINAL STREET GANG TAGGING/GRAFFITI",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.48.105",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.105",
        }, ],
    },
    {
        name: "LASER UNLAWFUL DISCHARGE II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.49.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.49.030",
        }, ],
    },
    {
        name: "MAKING/HAVING BURGLARY TOOLS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.52.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.060",
        }, ],
    },
    {
        name: "VEHICLE PROWLING I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.52.095",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.095",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VEHICLE PROWLING II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.52.100(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.100",
        }, ],
    },
    {
        name: "THEFT II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT III",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.050",
        }, ],
    },
    {
        name: "ISSUE BANK CHECKS OVER $750 - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.060",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VEHICLE THEFT TOOL MAKE/USE/POSSESS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.063",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.063",
        }, ],
    },
    {
        name: "MOTOR VEHICLE THEFT TOOLS MAKE/HAVE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.063(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.063",
        }, ],
    },
    {
        name: "TAKE A MOTOR VEHICLE II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.075",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.075",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT OF LIVESTOCK II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.083.A",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.083.A",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT RENT PROPERTY $750-$5K - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.096(5)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.096",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT RENTAL/LEASE PROPERTY UNDER $750",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.096(5)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.096",
        }, ],
    },
    {
        name: "PSP II - POSSESS STOLEN PROPRTY - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.160",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.160",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PSP III - POSSESS STOLEN PROPERTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.170",
        }, ],
    },
    {
        name: "POSSESS STOLEN PALLETS/CRATES",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.170(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.170",
        }, ],
    },
    {
        name: "OBSCURING IDENTITY OF MACHINE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.180",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.180",
        }, ],
    },
    {
        name: "THEFT OF CABLE SERVICE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.220",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.220",
        }, ],
    },
    {
        name: "CREDIT CARD - UNLAWFL FACTORING - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.290(4)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.290",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FINANCIAL FRAUD-UNLAWFUL PRODUCTION/POSSESSION OF PAYMENT INSTRUMENT/PERSONAL IDENTIFICATION DEVICE/FICTITIOUS IDENTIFICATION - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.320",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.320",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "POSSESS  ANOTHER'S IDENTITY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.56.330(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.330",
        }, ],
    },
    {
        name: "THEFT WITH INTENT RESELL II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.340(3)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.340",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RETAIL THEFT SPECIAL CIRCUMSTANCE II OR III - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.360",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.360",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MAIL THEFT - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.370",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.370",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "POSSESS OF STOLEN MAIL - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.380",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.380",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FORGERY - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.60.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "OBTAIN SIGNATURE DECEPTION - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.60.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL IMPERSONATION I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.60.040(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL IMPERSONATION II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.60.045(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.045",
        }, ],
    },
    {
        name: "FALSE CERTIFICATION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.60.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.050",
        }, ],
    },
    {
        name: "USE FALSE ACADEMIC CREDENTIALS",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.60.070(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.070",
        }, ],
    },
    {
        name: "USE FALSE ACADEMIC CREDS PENALTY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.60.070(5)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.070",
        }, ],
    },
    {
        name: "DEFRAUDING PUBLIC UTILITYIII",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.61.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.61.050",
        }, ],
    },
    {
        name: "INCEST II -  ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.64.020(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.64.020",
        }, ],
    },
    {
        name: "CHILD SELLING/BUYING - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.64.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.64.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "TRADING IN SPECIAL INFLUNCE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.68.050",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.68.050",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FALSE SWEARING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.72.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.040",
        }, ],
    },
    {
        name: "TAMPERING WITH A WITNESS - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.72.120",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.120",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "JURY TAMPERING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.72.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.140",
        }, ],
    },
    {
        name: "TAMPER WITH PHYSICAL EVIDENCE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.72.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.150",
        }, ],
    },
    {
        name: "OBSTRUCT LAW ENFORCEMENT OFFICER",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.020",
        }, ],
    },
    {
        name: "DISARM LAW ENFORCE OFFICER - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.023(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.023",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL ASSISTANCE - RELATIVE UNDER 18 AT TIME OF OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.070(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.070",
        }, ],
    },
    {
        name: "CRIMINAL ASSISTANCE II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.080(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.080",
        }, ],
    },
    {
        name: "COMPOUNDING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.100",
        }, ],
    },
    {
        name: "ESCAPE II - CHARGED WITH FELONY- ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.120(1)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.120",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ESCAPE II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.120",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.120",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ESCAPE III - ONE PRIOR CONVICTION",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.130(3)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.130",
        }, ],
    },
    {
        name: "INTRODUCING CONTRABAND II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.150",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.150",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FALSE STATEMNT TO PUBLIC SERVANT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.175",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.175",
        }, ],
    },
    {
        name: "HARMING A POLICE DOG/HORSE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.200",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.200",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "OFFICIAL MISCONDUCT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.80.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.80.010",
        }, ],
    },
    {
        name: "STOLEN PROPERTY TRAFFIC II - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.82.055",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.055",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL PROFITEERING LIEN - TRUSTEE NONCOMPLY",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.82.160(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.160",
        }, ],
    },
    {
        name: "FALSE REPORTING III",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.84.040(2)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.040",
        }, ],
    },
    {
        name: "DISCLOSING INTIMATE IMAGES - 1ST OFFENSE",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.86.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.86.010",
        }, ],
    },
    {
        name: "PROMOTING PROSTITUTION - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.88.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.080",
        }, ],
    },
    {
        name: "COMPUTER TRESPASS I - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.90.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "COMPUTER TRESPASS II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.90.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.050",
        }, ],
    },
    {
        name: "ELECTRONIC DATA SERV INTERFERENCE - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.90.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.060",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "SPOOFING",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.90.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.070",
        }, ],
    },
    {
        name: "ELECTRONIC TAMPER I -  ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.90.080",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.080",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ELECTRONIC TAMPERING II",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.90.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.090",
        }, ],
    },
    {
        name: "ELECTRONIC DATA THEFT - ATTEMPT",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.90.100",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.100",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FAIL TO TAG/LABEL SHELLFISH",
        type: "G",
        lfos: [fines[0]],
        wacs: [{
            num: "246-282-080",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-282-080",
        }, ],
    },
    {
        name: "FIREARMS IN STATE PARK",
        type: "G",
        lfos: [fines[0]],
        wacs: [{
            num: "352-32-120",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=352-32-120",
        }, ],
    },
    {
        name: "SEASHORE CONSERVATION DISCHARGE FIREARM",
        type: "G",
        lfos: [fines[0]],
        wacs: [{
            num: "352-37-230",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=352-37-230",
        }, ],
    },
    {
        name: "KEG PROVIDED TO PERSON UNDER 21",
        type: "G",
        lfos: [fines[0]],
        rcws: [{
            num: "66.28.230",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.230",
        }, ],
    },
    {
        name: "SIGN - ERECT/MAINTAIN UNLAWFUL SIGN",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "47.36.180(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.36.180",
        }, ],
    },
    {
        name: "SIGN/FLAGGER - TRAFFIC INTERFERENCE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "47.36.200(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.36.200",
        }, ],
    },
    {
        name: "USE OF REST AREA VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "47.38.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.38.020",
        }, ],
    },
    {
        name: "JUNKYARD TO CLOSE TO HIGHWAY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "47.41.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.41.030",
        }, ],
    },
    {
        name: "VIOLATION OF ROAD CLOSE OR REDUCE SPEED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "47.48.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=47.48.040",
        }, ],
    },
    {
        name: "ALCOHOL USE ON WHITEWATER RAFT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.450",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.450",
        }, ],
    },
    {
        name: "BOAT REGISTER - FAIL TO REGISTER OR OUT- OF-STATE REGISTRATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.49.010(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.49.010",
        }, ],
    },
    {
        name: "OPERATE VESSEL IN RECKLESS MANNER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.040(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.040",
        }, ],
    },
    {
        name: "VIOLATE CIVIL ANTI-HARSSMENT ORDER - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "10.14.170",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.14.170",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PESTICIDE TRANSPORTATION VIOLATIONS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "15.58.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=15.58.150",
        }, ],
    },
    {
        name: "VIOLATE Chapter 15.60 APIARIES REGULATIONS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "15.60.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=15.60.055",
        }, ],
    },
    {
        name: "OWNER MUST KILL MARAUDING DOG",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.08.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.08.030",
        }, ],
    },
    {
        name: "LIVESTOCK AT LARGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.24.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.24.070",
        }, ],
    },
    {
        name: "ANIMALS AT LARGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.24.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.24.090",
        }, ],
    },
    {
        name: "ALLOW UNREGISTERED BULL TO RUN AT LARGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.24.190",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.24.190",
        }, ],
    },
    {
        name: "MOVE ANOTHERS LIVESTOCK FROM RANGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.24.230",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.24.230",
        }, ],
    },
    {
        name: "TRANSPORT ANIMALS IN UNSAFE MANNER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.080",
        }, ],
    },
    {
        name: "DOCKING HORSES",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.090",
        }, ],
    },
    {
        name: "DISEASED ANIMALS AT LARGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.52.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.110",
        }, ],
    },
    {
        name: "POISONING ANIMALS - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "16.52.190(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.190",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "UNLAWFUL POSSESSION HORSE MEAT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "16.68.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.68.140",
        }, ],
    },
    {
        name: "WEED INSPECTOR ENTRY PREVENTED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "17.04.280",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=17.04.280",
        }, ],
    },
    {
        name: "PREVENT ENTRY FOR WEED INSPECTION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "17.10.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=17.10.160",
        }, ],
    },
    {
        name: "SELL NOXIOUS WEED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "17.10.235",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=17.10.235",
        }, ],
    },
    {
        name: "NOXIOUS WEEDS - FAIL TO PAY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "17.10.350(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=17.10.350",
        }, ],
    },
    {
        name: "RECORD KEEPING - PESTICIDE APPLICATION - 1ST OFFENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "17.21.100(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=17.21.100",
        }, ],
    },
    {
        name: "NO MASSEUSE LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.108.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.108.030",
        }, ],
    },
    {
        name: "UNLICENSED MASSAGE THERAPY/REFLEXOLOGY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.108.035(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.108.035",
        }, ],
    },
    {
        name: "ADVERTISE PRACTICE OF MASSAGE BY UNLICENSED PERSON",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.108.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.108.040",
        }, ],
    },
    {
        name: "REAL ESTATE APPRAISER WITHOUT LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.140.220",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.140.220",
        }, ],
    },
    {
        name: "REFUSE TO PROVIDE CONTRACTOR IDENTIFICATION INFORMATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.27.210",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.27.210",
        }, ],
    },
    {
        name: "(FTR) FAILURE TO REPORT CONTRACTOR NOTICE OF INFRACTION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.27.270",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.27.270",
        }, ],
    },
    {
        name: "PRESCRIPTION CONTAINER VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "18.64.246",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.64.246",
        }, ],
    },
    {
        name: "FAIL TO REGISTER CHARITABLE ORGANIZATION -MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "19.09.065(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.09.065",
        }, ],
    },
    {
        name: "FAIL TO COMPLY WITH SOLICIT RULES-MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "19.09.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.09.100",
        }, ],
    },
    {
        name: "PIPELINE - FALSE EXCAVATION CODE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "19.122.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.122.090",
        }, ],
    },
    {
        name: "PIPELINE-FALSE EXCAVATION CODE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "19.122.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.122.110",
        }, ],
    },
    {
        name: "UNUSED PROPERTY MERCHANT-PROHIBITED SALES",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "19.210.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.210.020",
        }, ],
    },
    {
        name: "AGRICULTURAL (AG) PRODUCTS - FAIL TO IDENTIFY FOR NOTICE OF INFRACTION (NOI)",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "20.01.482(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=20.01.482",
        }, ],
    },
    {
        name: "AGRICULTURAL (AG) PRODUCTS - VIOLATE PROMISE TO RESPOND TO NOTICE OF INFRACTION (NOI)",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "20.01.482(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=20.01.482",
        }, ],
    },
    {
        name: "AGRICULTURAL (AG) PRODUCTS - FAIL TO PAY PENALTY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "20.01.490(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=20.01.490",
        }, ],
    },
    {
        name: "ALLOWING PROHIBITED EMPLOYMENT FOR MINOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "26.28.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.28.070",
        }, ],
    },
    {
        name: "APPLY TATTOO TO MINOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "26.28.085",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.28.085",
        }, ],
    },
    {
        name: "FAIL TO REPORT CHILD ABUSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "26.44.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.44.030",
        }, ],
    },
    {
        name: "FALSE REPORT OF ABUSE/NEGLECT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "26.44.060(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=26.44.060",
        }, ],
    },
    {
        name: "FAIL NOTIFY SKELETAL HUMAN REMAINS INDIAN GROUND",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "27.44.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=27.44.055",
        }, ],
    },
    {
        name: "DISTURB ARCHAEOLOGICAL SITE/RESOURCE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "27.53.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=27.53.060",
        }, ],
    },
    {
        name: "EDUCATION EMPLOYEE BRIBE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "28A.635.050(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.050",
        }, ],
    },
    {
        name: "POLITICAL ADVERTISING - REMOVE/DEFACE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "29A.84.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.040",
        }, ],
    },
    {
        name: "BALLOT VIOLATION-MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "29A.84.680(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.680",
        }, ],
    },
    {
        name: "CHECK CASHER VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "31.45.105",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=31.45.105",
        }, ],
    },
    {
        name: "(DNR) DEPARTMENT OF NATURAL RESOURCES PROPERTY DESTRUCTION",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "332.52.110",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=332.52.110",
        }, ],
    },
    {
        name: "(DNR) DEPARTMENT OF NATURAL RESOURCES REMOVE SOIL/PLANTS/ROCKS/ETC",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "332.52.115",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=332.52.115",
        }, ],
    },
    {
        name: "(DNR) DEPARTMENT OF NATURAL RESOURCES DISORDERLY CONDUCT",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "332.52.130(1)",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=332.52.130",
        }, ],
    },
    {
        name: "(DNR) DEPARTMENT OF NATURAL RESOURCES TARGET SHOOT CARELESS/RECKLESS",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "332.52.145(1)(b)",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=332.52.145",
        }, ],
    },
    {
        name: "(DNR) DEPARTMENT OF NATURAL RESOURCES SHOOT IN PROHIBITED AREA",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "332.52.145(3)",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=332.52.145",
        }, ],
    },
    {
        name: "(DNR) DEPARTMENT OF NATURAL RESOURCES DISCHARGE FIREWORKS",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "332.52.150",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=332.52.150",
        }, ],
    },
    {
        name: "NATURAL RESOURCES RULE VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "43.12.065",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=43.12.065",
        }, ],
    },
    {
        name: "LICENSE REQUIRED FOR CHILD CARE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "43.215.250",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=43.215.250",
        }, ],
    },
    {
        name: "FALSE INSURANCE CLAIM/PROOF LOSS LESS THAN OR EQUAL $1500 - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "48.30.230(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=48.30.230",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FALSE INSURANCE CLAIM/PROOF LOSS OVER $1500 - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "48.30.230(2)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=48.30.230",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "HOUSE TO HOUSE SALE BY MINOR PROHIBITED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "49.12.300",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=49.12.300",
        }, ],
    },
    {
        name: "ADVERTISE HOUSE TO HOUSE SALE MINOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "49.12.310",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=49.12.310",
        }, ],
    },
    {
        name: "BURNING WITHOUT A PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "52.12.101",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=52.12.101",
        }, ],
    },
    {
        name: "FAIL TO COMPLY WITH BURN PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "52.12.104",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=52.12.104",
        }, ],
    },
    {
        name: "CONNECT TO SEWER or WATER WITHOUT PERMISSION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "57.08.180",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=57.08.180",
        }, ],
    },
    {
        name: "FORCIBLE ENTRY AND DETAINER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "59.12.230",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=59.12.230",
        }, ],
    },
    {
        name: "OPERATE WITHOUT A LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.090",
        }, ],
    },
    {
        name: "ILLEGAL PURCHASE OF LIQUOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.150",
        }, ],
    },
    {
        name: "DRINK IN PUBLIC CONVEYANCE - CARRIER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.240",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.240",
        }, ],
    },
    {
        name: "DRINK IN PUBLIC CONVEYANCE - INDIVIDUAL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.250",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.250",
        }, ],
    },
    {
        name: "(MIP) ATTEMPT MINOR POSS AND/OR CONSUMPTION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "66.44.270(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.270",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "(MIP) - ATTEMPT MINOR INTOXICATED IN PUBLIC",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "66.44.270(2)(b)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.270",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MINOR FREQUENTING OFF - LIMITS AREA VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.310",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.310",
        }, ],
    },
    {
        name: "POWDERED ALCOHOL VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "66.44.380",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.380",
        }, ],
    },
    {
        name: "HUMAN REMAINS FAIL NOTIFY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "68.50.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.50.020",
        }, ],
    },
    {
        name: "UNLAWFUL DISPOSAL OF HUMAN REMAINS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "68.50.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.50.130",
        }, ],
    },
    {
        name: "FAIL NOTIFY SKELETAL HUMAN REMAINS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "68.50.645",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.50.645",
        }, ],
    },
    {
        name: "FAIL TO NOTIFY DISCOVERY OF SKELETAL HUMAN REMAINS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "68.60.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=68.60.055",
        }, ],
    },
    {
        name: "MISBRAND FOOD/SHELL FISH III",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.04.938(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.04.938",
        }, ],
    },
    {
        name: "LEGEND DRUG - POSSESS NO PRESCRIPTION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.41.030(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.030",
        }, ],
    },
    {
        name: "LEGEND DRUGS-MISLABEL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.41.050(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.050",
        }, ],
    },
    {
        name: "IODINE/METHYLSULFONYLMETHANE SALE - NO RECORD",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.135(5)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.135",
        }, ],
    },
    {
        name: "IODINE/METHYLSULFONYLMETHANE SALE - REFUSE PROVIDE RECORDS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "69.43.135(5)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.43.135",
        }, ],
    },
    {
        name: "(FTR) FAIL TO RESPOND TO NOTICE OF CIVIL INFRACTION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "7.80.160(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=7.80.160",
        }, ],
    },
    {
        name: "OPERATE ADULT FAMILY HOME WITHOUT LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.128.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.128.055",
        }, ],
    },
    {
        name: "VAPOR OPERATE OUSIDE LICENSE CAPACITY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.345.030(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.345.030",
        }, ],
    },
    {
        name: "UTILITY POLES - POSTING VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.54.090(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.54.090",
        }, ],
    },
    {
        name: "FAILS/NEGLECTS/REFUSES TO COMPLAY WITH  CHAPTER 70.58 - 1ST OFFENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.58.280",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280",
        }, ],
    },
    {
        name: "ILLEGAL DISCHARGE OF SPECIAL FIREWORKS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.255",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.255",
        }, ],
    },
    {
        name: "DATES AND TIMES TO SELL FIREWORKS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.395",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.395",
        }, ],
    },
    {
        name: "DISCHARGE CONSUMER FIREWORKS VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.395(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.395",
        }, ],
    },
    {
        name: "STORAGE PERMIT REGULATIONS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.420",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.420",
        }, ],
    },
    {
        name: "PROHIBITED TRANSFERS OF FIREWORKS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.480",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.480",
        }, ],
    },
    {
        name: "POSSESS FIREWORKS, LESS 1 LB",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.485(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.485",
        }, ],
    },
    {
        name: "SET OFF FIREWORKS WITHOUT REQUIRED PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.77.495",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.77.495",
        }, ],
    },
    {
        name: "DENIED ACCESS PUBLIC FACILITY/DISABLED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.84.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.84.070",
        }, ],
    },
    {
        name: "DISPOSAL OF USED OIL VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70A.224.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70A.224.060",
        }, ],
    },
    {
        name: "OPERATE TREATMENT FACILITY NO LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "70.97.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.97.140",
        }, ],
    },
    {
        name: "ELECTRONIC BENEFIT CARD - UNAUTHORIZED POSSESS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "74.08.582",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.08.582",
        }, ],
    },
    {
        name: "NO DAY CARE LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "74.15.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.15.090",
        }, ],
    },
    {
        name: "OPERATING A DAYCARE WITHOUT A LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "74.15.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.15.150",
        }, ],
    },
    {
        name: "FAILURE TO COOPERATE - CHILD SUPPORT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "74.20.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.20.060",
        }, ],
    },
    {
        name: "FAIL TO COMPLETE FINANCIAL STATMENT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "74.20.260",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.20.260",
        }, ],
    },
    {
        name: "VULNERABLE ADULT FALSE REPORT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "74.34.053(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.34.053",
        }, ],
    },
    {
        name: "VIOLATION OF BURNING PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.205",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.205",
        }, ],
    },
    {
        name: "SUSPENSION OF BURN PERMIT/PRIVILEGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.315",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.315",
        }, ],
    },
    {
        name: "SPARK EMITTING EQUIPMENT REGULATED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.405",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.405",
        }, ],
    },
    {
        name: "REPORTING FIRE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.445",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.445",
        }, ],
    },
    {
        name: "DISCARD/DISCHARGE LIGHTED MATERIAL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.455",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.455",
        }, ],
    },
    {
        name: "FAIL TO EXTINGUISH CAMPFIRE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.700",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.700",
        }, ],
    },
    {
        name: "WILLFUL SETTING OF FIRE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.710",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.710",
        }, ],
    },
    {
        name: "NEGLIGENT FIRE - SPREAD",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.04.730",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.04.730",
        }, ],
    },
    {
        name: "DISPOSE WOOD DEBRIS IN NAVIGABLE WATERS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "76.42.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.42.060",
        }, ],
    },
    {
        name: "SELL HUCKLEBERRY/HARVEST SPECIALIZED FOREST PRODUCTS - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "76.48.131(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.131",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "INTERFERENCE WITH FISH/HUNT GEAR II",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.180(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.180",
        }, ],
    },
    {
        name: "TRAPPING VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.190",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.190",
        }, ],
    },
    {
        name: "UNLAWFUL TRAPPING",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.190(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.190",
        }, ],
    },
    {
        name: "UNLAWFUL TRAPPING FAIL IDENTIFY OWNER OF TRAP",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.190(1)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.190",
        }, ],
    },
    {
        name: "UNLAWFUL USE DEPARTMENT LANDS/FACILITIES",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.230",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.230",
        }, ],
    },
    {
        name: "UNLAWFUL USE DOGS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.240",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.240",
        }, ],
    },
    {
        name: "UNLAWFUL USE DOG PURSUE/HARASS/KILL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.240(1)(a)(i)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.240",
        }, ],
    },
    {
        name: "VIOLATION RULES REQUIRING REPORTING FISH/WILDLIFE HARVEST",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.280",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.280",
        }, ],
    },
    {
        name: "TRANSPORTATION OF FISH/WILDLIFE II",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.290(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.290",
        }, ],
    },
    {
        name: "TRANSPORT FAIL AFFIX BIG GAME TAG",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.290(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.290",
        }, ],
    },
    {
        name: "VIOLATION RULE RE: INSPECT AQUATIC FARMS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.350",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.350",
        }, ],
    },
    {
        name: "UNLAWFUL RECREATIONAL FISH II",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.380",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.380",
        }, ],
    },
    {
        name: "UNLWFL USE SHELLFISH GEAR-  PERSONAL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.382",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.382",
        }, ],
    },
    {
        name: "TAKING SEAWEED VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.390",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.390",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING GAME BIRD II RULE VIOLATION LESS THAN TWO TIMES THE LIMIT",
        type: "S",
        lfos: [fines[0], csFees[11]],
        rcws: [{
            num: "77.15.400(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.400",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING WILD BIRDS II LICENSE NOT WITH PERSON",
        type: "S",
        lfos: [fines[0], csFees[11]],
        rcws: [{
            num: "77.15.400(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.400",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING BIG GAME II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "77.15.410(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.410",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "UNLAWFUL HUNTING GAME ANIMALS II - NO LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.430(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.430",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING GAME ANIMALS II - LICENSE NOT WITH PERSON",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.430(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.430",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING/COLLECT WILDLIFE PARTS FROM ANOTHERS PROPERTY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.435",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.435",
        }, ],
    },
    {
        name: "WEAPONS/TRAPS/DOGS ON GAME RESERVES",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.440",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.440",
        }, ],
    },
    {
        name: "USE/POSSESS LOADED FIREARM IN VEHICLE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.460(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.460",
        }, ],
    },
    {
        name: "SHOOT FIREARM FROM/ACROSS/ALONG HIGHWAY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.460(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.460",
        }, ],
    },
    {
        name: "AVOID WILDLIFE CHECK STATION/INSPECTION - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "77.15.470",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.470",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FAIL ACCOUNT COMMERCIAL FISH HARVEST BY SECONDARY RECEIVER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.568",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.568",
        }, ],
    },
    {
        name: "USE OF COMMERCIAL WILDLIFE LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.610",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.610",
        }, ],
    },
    {
        name: "UNLAWFUL USE OF FISH & WILDLIFE DEPARTMENT PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.750(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.750",
        }, ],
    },
    {
        name: "UNLAWFUL USE EXPERIMENTAL FISHERY PERMIT/TRIAL PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.750(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.750",
        }, ],
    },
    {
        name: "INTENTIONAL FEED/ATTRACT CARNIVORE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.792(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.792",
        }, ],
    },
    {
        name: "INTENTIONAL FEED/ATTRACT PREVIOUS INFRACTION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.792(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.792",
        }, ],
    },
    {
        name: "WILDLIFE REHABILITATION NO PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.15.800(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.800",
        }, ],
    },
    {
        name: "MORE ANGLERS THAN PERMIT ALLOWS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "77.70.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.70.070",
        }, ],
    },
    {
        name: "AQUATIC LAND - VESSEL ABANDONED/SINK/BLOCK CHANNEL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79.100.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79.100.110",
        }, ],
    },
    {
        name: "MARINE INSURANCE POLICY VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79.100.170(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79.100.170",
        }, ],
    },
    {
        name: "PARKS/PARKWAYS DAMAGE/INJURE VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.05.165(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.05.165",
        }, ],
    },
    {
        name: "ILLEGAL FIRE/FAIL TO MAINTAIN",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.05.165(e)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.05.165",
        }, ],
    },
    {
        name: "PARKS/PARKWAYS RULE VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.05.165(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.05.165",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING IN A STATE PARK",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.05.793",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.05.793",
        }, ],
    },
    {
        name: "SKI CLOSED AREA OWNED BY SKI OPERATOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.45.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.45.070",
        }, ],
    },
    {
        name: "TAMPER WITH VESSEL LIGHTS OR SIGNALS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.120",
        }, ],
    },
    {
        name: "WATER SKI DURING PROHIBITED HOURS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.170(5)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.170",
        }, ],
    },
    {
        name: "WATER SKI IN A RECKLESS MANNER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.170(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.170",
        }, ],
    },
    {
        name: "HAZARDOUS CONDITION/FAIL TO OBEY OFFICER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.180(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.180",
        }, ],
    },
    {
        name: "FAIL TO WEAR/REMOVED CUTOFF SWITCH",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.190(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.190",
        }, ],
    },
    {
        name: "OPERATE PERSONAL WATERCRAFT AFTER DARK",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.190(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.190",
        }, ],
    },
    {
        name: "RECKLESS OPER PERSONAL WATERCRAFT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.190(5)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.190",
        }, ],
    },
    {
        name: "RENT JET SKI TO PERSON UNDER 16 YRS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.190(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.190",
        }, ],
    },
    {
        name: "WHITEWATER RAFT WITHOUT SAFETY EQUIPMENT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.430",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.430",
        }, ],
    },
    {
        name: "VESSELS FOR HIRE VIOLATION - THIRD (3RD) SAME VIOLATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "79A.60.710(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.710",
        }, ],
    },
    {
        name: "FAILURE TO PAY FEES UNDER CHAPTER 81.24",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.24.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.24.080",
        }, ],
    },
    {
        name: "VIOLATE OF RAILROAD OR RAILWAY EMPLOYEE SHELTERS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.40.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.40.080",
        }, ],
    },
    {
        name: "RAILROAD OR RAILWAY VIOLATE MEDICAL EXAM OR RECORDS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.40.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.40.130",
        }, ],
    },
    {
        name: "RAILROAD OR RAILWAY VIOLATE DRINKING WATER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.44.085",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.44.085",
        }, ],
    },
    {
        name: "RAILROAD OR RAILWAY VIOLATE FIRST AID KIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.44.085",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.44.085",
        }, ],
    },
    {
        name: "OBSTRUCT/DELAY TRAIN",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.48.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.48.020",
        }, ],
    },
    {
        name: "RAILROAD OR RAILWAY ENDANGERING HUMAN LIFE OR SAFETY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.48.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.48.060",
        }, ],
    },
    {
        name: "VIOLATE STREETCAR HOURS OF LABOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.64.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.64.160",
        }, ],
    },
    {
        name: "CERTIFICATE REQUIRED (AUTO TRANSPORTATION)",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.68.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.68.040",
        }, ],
    },
    {
        name: "UNLAWFUL ADVERTISING AS FREIGHT CARRIER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "81.80.355",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.355",
        }, ],
    },
    {
        name: "TAX EXEMPT PURCHASE - FALSE IDENTIFICATION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.08.0264",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.08.0264",
        }, ],
    },
    {
        name: "RETAILER MISAPPROPRIATES TAX COLLECTED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.12.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.12.040",
        }, ],
    },
    {
        name: "OPERATE BEYOND CIGARETTE SELLER LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.24.540",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.24.540",
        }, ],
    },
    {
        name: "TOBACCO - DISTRIBUTOR/RETAIL NO ADDITONAL LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.26.190(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.26.190",
        }, ],
    },
    {
        name: "FAIL TO PAY AIRCRAFT TAX",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.48.020(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.48.020",
        }, ],
    },
    {
        name: "FAIL TO PAY BOAT TAX",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "82.49.010(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.49.010",
        }, ],
    },
    {
        name: "ABANDONING, DISCARDING REFRIGERATOR EQUIPMENT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.03.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.03.010",
        }, ],
    },
    {
        name: "PERMIT UNUSED EQUIPMENT TO REMAIN ON PREMISES",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.03.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.03.020",
        }, ],
    },
    {
        name: "FALSE ADVERTISING",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.04.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.04.010",
        }, ],
    },
    {
        name: "BARRATRY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.12.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.12.010",
        }, ],
    },
    {
        name: "BUY, DEMAND or PROMISE REWARD BY JUDGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.12.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.12.020",
        }, ],
    },
    {
        name: "IMITATING LAWFUL BRAND - Misdemeanor",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.16.020(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.020",
        }, ],
    },
    {
        name: "COUNTERFEITING TRADEMARK/BRAND",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.16.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.030",
        }, ],
    },
    {
        name: "FRAUDULENT REGISTRATION OF TRADEMARK",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.16.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.060",
        }, ],
    },
    {
        name: "GAS - MISLABELED PRODUCTS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.16.080(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.080",
        }, ],
    },
    {
        name: "TELECOMMUNICATIONS - OBTAIN SERVICE BY FRAUD",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.26A.110(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.26A.110",
        }, ],
    },
    {
        name: "SOLICIT UNDESIRED MAIL/FALSE ID",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.35.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.35.030",
        }, ],
    },
    {
        name: "FALSE REPRESENTATION RE: CREDIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.38.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.38.010",
        }, ],
    },
    {
        name: "OPERATE ENGINE/BOILER WITHOUT SPARK ARRESTER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.40.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.40.040",
        }, ],
    },
    {
        name: "FIRE ALARM/EQUIPMENT TAMPER AID/ABET",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.40.100(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.40.100",
        }, ],
    },
    {
        name: "LOADED/UNLOADED PISTOL IN CAR WITHOUT PERMIT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.050",
        }, ],
    },
    {
        name: "FAIL TO OBTAIN DEALERS LICENSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.100",
        }, ],
    },
    {
        name: "CERTAIN TRANSFER OF PISTOL FORBIDDEN",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.120",
        }, ],
    },
    {
        name: "AIMING/DISCHARGE FIREARM - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9.41.230",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.230",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "USE OF FIREARMS BY MINOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.240",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.240",
        }, ],
    },
    {
        name: "DANGEROUS WEAPON - POSSESS, MANUFACTURE, SELL, FURTIVELY CARRY - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9.41.250",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.250",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "DISPLAYING WEAPON - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9.41.270",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.270",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "WEAPONS PROHIBITED CERTAIN PLACES - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.300.2.A",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.300",
        }],
    },
    {
        name: "FAIL FILE PROOF SURRENDER FIREARM",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.41.804",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.804",
        }, ],
    },
    {
        name: "MISCONDUCT IN SIGNING A PETITION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.44.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.44.080",
        }, ],
    },
    {
        name: "KNOWINGLY RECEIVE FRAUDULENT CONVEY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.45.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.090",
        }, ],
    },
    {
        name: "OBSTRUCT OF ENFORCE OF GAMBLING",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.46.195",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.195",
        }, ],
    },
    {
        name: "GRAND JUROR ACTING AFTER CHALLENGE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.51.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.51.040",
        }, ],
    },
    {
        name: "DISCLOSING TRANSACTION OF GRAND JRY",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.51.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.51.050",
        }, ],
    },
    {
        name: "DISCLOSURE OF DEPOSITION",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.51.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.51.060",
        }, ],
    },
    {
        name: "MALICIOUS PROSECUTION OF GROSS OR SIMPLE MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.62.010(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.62.010",
        }, ],
    },
    {
        name: "MAINTAIN OR PERMIT NUISANCE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.66.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.66.030",
        }, ],
    },
    {
        name: "SALE/LOAN/DISTRIBUTE INDECENT ARTICLES",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.68.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68.030",
        }, ],
    },
    {
        name: "UNLAWFUL DISPLAY OF SEXUALLY EXPLICIT MATERIAL",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.68.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68.130",
        }, ],
    },
    {
        name: "COMMUNICATE WITH MINOR FOR IMMORAL PURPOSE - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9.68A.090(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.090",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "OPEN SEALED LETTER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.73.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.73.020",
        }, ],
    },
    {
        name: "DENIAL OF CIVIL RIGHTS",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.010",
        }, ],
    },
    {
        name: "OPERATE STEAMBOAT/RAILROAD INTOXICATED",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020",
        }, ],
    },
    {
        name: "UNLAWFUL TRANSIT CONDUCT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.025",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.025",
        }, ],
    },
    {
        name: "FOOD STAMPS-SELL UNDER $100",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.140(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.140",
        }, ],
    },
    {
        name: "FOOD STAMP-SELL/TRANSFER UNDER $100 - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.142(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.142",
        }, ],
    },
    {
        name: "BUY OR POSSESS PERSONAL PROTECTION SPRAY UNDER 18",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.160",
        }, ],
    },
    {
        name: "GUIDE ANINMAL RECKLESS INTERFERENCE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.170(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "GUIDE ANIMAL - ALLOW DOG TO INTERFERE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9.91.170(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "CRIMINAL SOLICITATION - MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.28.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.030",
        }, ],
    },
    {
        name: "CRIMINAL CONSPIRACY MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.28.040(3)(e)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.040",
        }, ],
    },
    {
        name: "CRIMINAL MISTREATMENT IV",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.42.037",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.037",
        }, ],
    },
    {
        name: "CRIM MISTREATMENT IV - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.42.037",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.037",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "LEAVE CHILD IN CARE OF SEX OFFENDER",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.42.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.110",
        }, ],
    },
    {
        name: "VOYEURISM II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.115(3)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.115",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "SEX OFFENDER/NON-FELONY FAIL TO REGISTER - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.44.132(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RECKLESS BURNING II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.48.050",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.050",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "DEFACE A STATE MONUMENT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.48.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.110",
        }, ],
    },
    {
        name: "CRIMINAL TRESPASS II",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.52.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.080",
        }, ],
    },
    {
        name: "VEHICLE PROWLING II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.52.100(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.100",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT III - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.050",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.050",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ISSUE BANK CHECKS UNDER $750 - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.060",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.060",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VEHICLE THEFT TOOL MAKE/USE/POSSESS - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.063",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.063",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT RENT/LEASE PROPERTY UNDER $750 - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.096(5)(c)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.096",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PSP III- POSSESS STOLEN PROPERTY - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.170.A",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.170.A",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "SHOPPING CART THEFT OR ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.56.270",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.270",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL IMPERSONATION II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.60.045",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.045",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "OBSTRUCT LAW ENFORCE OFFICER - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "REFUSE TO SUMMON AID FOR PEACE OFFR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.030",
        }, ],
    },
    {
        name: "RESISTING ARREST",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.040",
        }, ],
    },
    {
        name: "CRIMINAL ASSISTANCE II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.080(2)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.080",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CRIMINAL ASSISTANCE II - RELATIVE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.080(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.080",
        }, ],
    },
    {
        name: "CRIMINAL ASSISTANCE III",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.090(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.090",
        }, ],
    },
    {
        name: "ESCAPE III",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.130(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.130",
        }, ],
    },
    {
        name: "ESCAPE III - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.130(2)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.130",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "INTRODUCING CONTRABAND III OR ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.160",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.160",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "BAIL JUMP - MISDEMEANOR",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.76.170(3)(d)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.170",
        }, ],
    },
    {
        name: "MAKE FALSE/MISLEADING STATEMENT TO PUBLIC SERVANT - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.76.175",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.175",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FINANCIAL INSTITUTION DISCLOSURE OF SUBPOENA",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.82.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.170",
        }, ],
    },
    {
        name: "FAIL TO DISPERSE",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.84.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.020",
        }, ],
    },
    {
        name: "DISORDERLY CONDUCT or ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.84.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "FALSE REPORTING - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.84.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PROSTITUTION - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.88.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PATRONIZING A PROSTITUTE - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.88.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.110",
        }, ],
    },
    {
        name: "SOLICIT ANOTHER FOR SEXUAL CONDUCT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.88.110(1)(c)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.88.110",
        }, ],
    },
    {
        name: "COMPUTER TRESPASS II -   ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
            num: "9A.90.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.050",
        }, ],
    },
    {
        name: "SPOOFING - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.90.070",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.070",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ELECTRONIC TAMPER II - ATTEMPT",
        type: "S",
        lfos: [fines[0]],
        rcws: [{
                num: "9A.90.090",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.090",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "OPERATE ANOTHER SHELFISH POT/GEAR",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "220-330-100(3)",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=220-330-100",
        }, ],
    },
    {
        name: "DISORDERLY CONDUCT ON DEPARTMENT LANDS",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "220-500-030(1)(a)",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=220-500-030",
        }, ],
    },
    {
        name: "RESTRICTED AREAS",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "352-37-070",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=352-37-070",
        }, ],
    },
    {
        name: "SPECIAL GROUP RECREATION EVENT PERMIT REQUIRED",
        type: "S",
        lfos: [fines[0]],
        wacs: [{
            num: "352-37-200",
            url: "https://app.leg.wa.gov/wac/default.aspx?cite=352-37-200",
        }, ],
    },
    {
        name: 'CUTTING EARS',
        type: 'S',
        lfos: [fines[0]],
        rcws: [{
            num: '16.52.095',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.095'
        }]
    },
    {
        name: 'DECEIVES VOTER IN RECORDING VOTE',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '29A.84.610(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.610'
        }]
    },
    {
        name: 'MISRECORDS VOTE OF ANY VOTER',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '29A.84.610(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.610'
        }]
    },
    {
        name: 'MISREPRESENT OFFICIAL BALLOT DROP BOX',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '29A.84.610(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.610'
        }]
    },
    {
        name: 'FAIL TO SUBMIT NAME-CHANGE ORDER TO DOC',
        type: 'S',
        lfos: [fines[0]],
        rcws: [{
            num: '4.24.130(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=4.24.130'
        }]
    },
    {
        name: 'REFUSE TO PROVIDE DNA',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '43.43.754(11)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=43.43.754'
        }]
    },
    {
        name: 'USE 988 CRISIS LINE TAX FOR OWN USE',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '82.86.040(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=82.86.040'
        }]
    },
    {
        name: 'KNOWINGLY FAILS TO PAY TAX, MAKE RETURNS, KEEP RECORDS, OR SUPPLY INFO ON CAPITAL ASSETS',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '82.87.140(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=82.87.140'
        }]
    },
    {
        name: 'FAILS TO COLLECT/PAY 988 CRISIS LINE TAX',
        type: 'S',
        lfos: [fines[0]],
        rcws: [{
            num: '82.86.040(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=82.86.040'
        }]
    },
    {
        name: 'IMPERSONATING CENSUS TAKER',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '9A.60.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.080'
        }]
    },
    // ENABLE WHEN CODIFIED
    {
        name: 'FALSELY PETITION FOR EXTREME RISK PROTECTION ORDER',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '7.105.460(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=7.105.460'
        }]
    },
    {
        name: 'ANTIHARASSMENT PROTECTION ORDER VIOLATION - ADULT',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '7.105.455(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=7.105.455'
        }]
    },
    {
        name: 'EXTREME PROTECTION ORDER VIOLATION - 1ST OR 2ND OFFENSE',
        type: 'G',
        lfos: [fines[0]],
        rcws: [{
            num: '7.105.460(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=7.105.460'
        }]
    },
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/noSpecialLFOs.js