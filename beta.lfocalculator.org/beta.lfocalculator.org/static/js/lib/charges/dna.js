import fines from "../LFOs/fines";
import csFees from "../LFOs/csFees";

const charges = [{
        name: "STALKING - FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.46.110(5)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.110",
        }, ],
    },
    {
        name: "HARASSMENT",
        type: "G",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.46.020(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.020",
        }, ],
    },
    {
        name: "CYBERSTALKING - FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.61.260(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.260",
        }, ],
    },
    {
        name: "HOMICIDE BY WATERCRAFT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "79A.60.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.050",
        }, ],
    },
    {
        name: "MURDER I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.32.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.32.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MURDER II OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.32.050",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.32.050",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "HOMICIDE BY ABUSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.32.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.32.055",
        }, ],
    },
    {
        name: "ASSAULT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.011",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.011",
        }, ],
    },
    {
        name: "ASSAULT I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.36.011",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.011",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ASSAULT II or ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.36.021",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.021",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ASSAULT III",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.031",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.031",
        }, ],
    },
    {
        name: "ASSAULT IV - PRIOR DOMESTIC VIOLENCE (DV)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.041",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.041",
        }, ],
    },

    {
        name: "ASSAULT IV  WITH SEXUAL MOTIVATION",
        type: "G",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.36.041",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.041",
            },
            {
                num: "9.94A.835",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.835",
            },
        ],
    },

    {
        name: "DRIVE-BY SHOOTING",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.045",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.045",
        }, ],
    },
    {
        name: "MALICIOUS HARASSMENT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.080",
        }, ],
    },
    {
        name: "KIDNAPPING I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.40.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "KIDNAPPING II OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.40.030(3)(a)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "UNLAWFUL IMPRISONMENT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.40.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.040",
        }, ],
    },
    {
        name: "RAPE I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.040",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.040",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RAPE II OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.050",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.050",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "SEX OFFENDER/FELONY FAIL TO REGISTER",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.132(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
        }, ],
    },
    {
        name: "MALICIOUS MISCHIEF I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.48.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.070",
        }, ],
    },
    {
        name: "MALICIOUS MISCHIEF II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.48.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.080",
        }, ],
    },
    {
        name: "MALICIOUS MISCHIEF II - DAMAGE OVER $750",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.48.080(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.080",
        }, ],
    },
    {
        name: "RESIDENTIAL BURGLARY OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.52.025",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.025",
        }, ],
    },
    {
        name: "BURGLARY II or ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.52.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "SEXUAL MISCONDUCT WITH MINOR II",
        type: "G",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.096",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.096",
        }, ],
    },
    {
        name: "SEX OFFENDER/NON-FELONY FAIL TO REGISTER",
        type: "G",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.132(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
        }, ],
    },
    {
        name: "CUSTODIAL SEXUAL MISCONDUCT II",
        type: "G",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.170",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.170",
        }, ],
    },
    {
        name: "DANGEROUS DOG - FELONY C",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "16.08.100(2)-(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.08.100",
        }, ],
    },
    {
        name: "UNUSED PROPERTY MERCHANT-PROHIBITED SALES - 3RD OR SUBSEQUENT OFFENSE WITHIN 5 YEARS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "19.210.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.210.020",
        }, ],
    },
    {
        name: "VOTER-MULTIPLE VOTES",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "29A.84.650",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.650",
        }, ],
    },
    {
        name: "BALLOT VIOLATION-FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "29A.84.680(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.680",
        }, ],
    },
    {
        name: "DESTROY/INJURE INSURED PROPRTY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "48.30.220",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=48.30.220",
        }, ],
    },
    {
        name: "INTIMIDATE/HARASS EXPLOSIVE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "70.74.275",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.275",
        }, ],
    },
    {
        name: "ORGANIZED RETAIL THEFT II - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.350(3)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.350",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CHILD SELLING/BUYING",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.64.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.64.030",
        }, ],
    },
    {
        name: "ESCAPE III - 2 OR MORE PRIOR CONVICTIONS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.130(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.130",
        }, ],
    },
    {
        name: "BAIL JUMPING - FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.170(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.170",
        }, ],
    },
    {
        name: "DISCLOSING INTIMATE IMAGES - 2ND OR SUBSEQUENT OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.86.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.86.010",
        }, ],
    },
    {
        name: "AGGRAVATED MURDER I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "10.95.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=10.95.020",
        }, ],
    },
    {
        name: "ANIMAL FIGHTING FURTHERANCE OF",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "16.52.117",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=16.52.117",
        }, ],
    },
    {
        name: "HEALTH PROFESSIONAL - UNLICENSED PRACTICE - 2ND OR SUBSEQUENT OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "18.130.190(7)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=18.130.190",
        }, ],
    },
    {
        name: "NO SCRAP METAL LICENSE 2ND OR SUBSEUENT OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "19.290.100(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.290.100",
        }, ],
    },
    {
        name: "INNKEEPER - DEFRAUDING $75 OR MORE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "19.48.110(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=19.48.110",
        }, ],
    },
    {
        name: "PRACTICE LAW UNLAWFULLY SUBSEQUENT VIOLATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "2.48.180(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=2.48.180",
        }, ],
    },
    {
        name: "VOTER REGISTRATION VIOLATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "29A.84.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.130",
        }, ],
    },
    {
        name: "INITIATIVE/REFERENDUM - FALSE SIGNATURE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "29A.84.230(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.84.230",
        }, ],
    },
    {
        name: "MISAPPROPRIATION/FALSIFICATION OF ACCOUNTS BY PUBLIC OFFICER",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "42.20.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=42.20.070",
        }, ],
    },
    {
        name: "MISAPPROPRIATION/FALSIFICATION OF ACCOUNTS BY PUBLIC OFFICER - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "42.20.070",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=42.20.070",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "LIQUOR SEAL VIOLATION - 3RD OR SUBSEQUENT OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "66.44.120(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.120",
        }, ],
    },
    {
        name: "LOTTERY TICKET FORGE/FRAUD OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "67.70.130",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=67.70.130",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "MISBRAND FOOD/SHELL FISH I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "69.04.938(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.04.938",
        }, ],
    },
    {
        name: "LEGEND DRUG VIOLATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "69.41.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.020",
        }, ],
    },
    {
        name: "LEGEND DRUGS FALSE STATEMENT PRESCRIPTION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "69.41.020(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.020",
        }, ],
    },
    {
        name: "LEGEND DRUG - SELL NO PRESCRIPTION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "69.41.030(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.030",
        }, ],
    },
    {
        name: "POSSESS STEROID OVER 200 TABS/8-2CC BOTTLES",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "69.41.350(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.41.350",
        }, ],
    },
    {
        name: "VAPOR UNLICENSED BUSINESS ACTIVITY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "70.345.030(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.345.030",
        }, ],
    },
    {
        name: "MANUFACTURE/PURCHASE/SELL EXPLOSIVES WITHOUT LICENSE OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "70.74.022(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.022",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "EXPLOSIVE DEVICE POSSESSION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "70.74.180",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.180",
        }, ],
    },
    {
        name: "MALICIOUS PLACEMENT OF EXPLOSIVE (ALL DEGREES)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "70.74.270",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.270",
        }, ],
    },
    {
        name: "MALICIOUS PLACE IMITATION DEVICE (ALL DEGREES)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "70.74.272",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.272",
        }, ],
    },
    {
        name: "MALICIOUS EXPLOSION (ALL DEGREES)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "70.74.280",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=70.74.280",
        }, ],
    },
    {
        name: "ESCAPE FROM COMMUNITY CUSTODY (FAIL TO INFORM DOC OF WHEREABOUTS)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "72.09.310",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=72.09.310",
        }, ],
    },
    {
        name: "PUBLIC ASSISTANCE - FALSE DECLARATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "74.08.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.08.055",
        }, ],
    },
    {
        name: "PUBLIC ASSISTANCE - FRAUD-THEFT I ",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "74.08.331(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.08.331",
        }, ],
    },
    {
        name: "PUBLIC ASSISTANCE - THEFT - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "74.08.331(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=74.08.331",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "TAKING ENDANGERED FISH/WILDLIFE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.120(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.120",
        }, ],
    },
    {
        name: "TRAFFICKING IN FISH/WILDLIFE II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.260(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.260",
        }, ],
    },
    {
        name: "TRAFFICKING IN FISH/WILDLIFE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.260(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.260",
        }, ],
    },
    {
        name: "COMMERCIAL FISHING WITHOUT LICENSE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.500(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.500",
        }, ],
    },
    {
        name: "USE NONDESIGNATED VESSEL SAME DAY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.530.4",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.530.4",
        }, ],
    },
    {
        name: "VIOLATE COMMERCIAL FISHING AREA/TIME I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.550(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.550",
        }, ],
    },
    {
        name: "TAKE FISH/SHELLFISH IN TREATY AREA",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.570(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.570",
        }, ],
    },
    {
        name: "UNLAWFUL USE OF NETS I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.580(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.580",
        }, ],
    },
    {
        name: "UNLAWFUL FISH CATCH ACCOUNTING I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.630(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.630",
        }, ],
    },
    {
        name: "PURCHASE/USE LICENSE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.650(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.650",
        }, ],
    },
    {
        name: "UNLAWFUL HUNTING/FISHING PRIVILEGE SUSPENDED/REVOKED I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.670(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.670",
        }, ],
    },
    {
        name: "UNLAWFUL TRADE IN SHARK FIN I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "77.15.770(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=77.15.770",
        }, ],
    },
    {
        name: "ASSAULT BY WATERCRAFT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "79A.60.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.060",
        }, ],
    },
    {
        name: "ELUDING LAW ENFORCEMENT VESSEL",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "79A.60.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.090",
        }, ],
    },
    {
        name: "BOATING HIT & RUN WITH INJURY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "79A.60.200(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.200",
        }, ],
    },
    {
        name: "RAILROAD PROPERTY - TAMPER/OBSTRUCT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "81.60.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=81.60.070",
        }, ],
    },
    {
        name: "FORGE/COUNTERFEIT CIGARETTE TAX STAMP",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "82.24.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.24.100",
        }, ],
    },
    {
        name: "POSSESS/TRANSPORT/RECEIVE OVER 10,000 CIGARETTES NO TAX",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "82.24.110(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.24.110",
        }, ],
    },
    {
        name: "CIGARETTES - BUSINESS WITHOUT LICENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "82.24.500",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.24.500",
        }, ],
    },
    {
        name: "SPECIAL FUEL TAX/LICENSE MULTIPLE VIOLATIONS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "82.38.270(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.38.270",
        }, ],
    },
    {
        name: "UNAUTHORIZED ABORTION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.02.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.02.120",
        }, ],
    },
    {
        name: "COUNTERFEITING ENDANGERS SAFETY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.16.035(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035",
        }, ],
    },
    {
        name: "TELECOMMUNICATIONS - FRAUD OVER $250 IN 90 DAYS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.26A.110(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.26A.110",
        }, ],
    },
    {
        name: "IDENTITY THEFT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.35.020(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.35.020",
        }, ],
    },
    {
        name: "IDENTITY THEFT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.35.020(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.35.020",
        }, ],
    },
    {
        name: "INCENDIARY DEVICE POSSESS/MANUFACTURE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.40.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.40.120",
        }, ],
    },
    {
        name: "(UPF) UNLAWFUL POSSESSION OF FIREARM I or II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.41.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.040",
        }, ],
    },
    {
        name: "DELIVERY OF FIREARM TO INELIGIBLE PERSON",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.41.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.080",
        }, ],
    },
    {
        name: "ALIEN UNLAWFUL POSSESS FIREARM",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.41.171",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.171",
        }, ],
    },
    {
        name: "POSSESS UNLAWFUL FIREARM",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.41.190",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.190",
        }, ],
    },
    {
        name: "CHEATING AT GAMBLING I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.46.1961",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.1961",
        }, ],
    },
    {
        name: "GAMBLING INFO VIA PHONE/INTERNET",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.46.240",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.46.240",
        }, ],
    },
    {
        name: "BOMB THREAT - INTENT TO ALARM",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.61.160(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.160",
        }, ],
    },
    {
        name: "TELEPHONE HARASSMENT - PREVIOUS CONVICTION/DEATH THREAT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.61.230(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.61.230",
        }, ],
    },
    {
        name: "MALICIOUS PROSECUTION - FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.62.010(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.62.010",
        }, ],
    },
    {
        name: "SEXUAL EXPLOITATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.040",
        }, ],
    },
    {
        name: "DEAL DEPICTIONS OF MINOR ENGAGED IN SEXUALLY EXPLICIT CONDUCT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.050(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.050",
        }, ],
    },
    {
        name: "DEAL DEPICTIONS OF MINOR ENGAGED IN SEXUlALLY EXPLICIT CONDUCT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.050(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.050",
        }, ],
    },
    {
        name: "SEND DEPICTIONS OF MINOR SEXIALLY EXPLICIT CONDUCT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.060(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.060",
        }, ],
    },
    {
        name: "SEND DEPICTIONS OF MINOR ENGAGED IN SEXUALLY EXPLICIT CONDUCT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.060(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.060",
        }, ],
    },
    {
        name: "POSSESS DEPICTIONS OF MINOR ENGAGED IN SEXUALLY EXPLICIT CONDUCT I OR II",
        type: "F",
        lfos: [fines[0], csFees[30]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.070",
        }, ],
    },
    {
        name: "VIEW DEPICTIONS OF MINOR ENGAGED IN SEXUALLY EXPLICIT CONDUCT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.075(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.075",
        }, ],
    },
    {
        name: "VIEW DEPICTIONS OF MINOR ENGAGED IN SEXUALLY EXPLICIT CONDUCT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.075(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.075",
        }, ],
    },
    {
        name: "COMMUNICATE WITH MINOR FOR IMMORAL PURPOSE FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.68A.090(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.68A.090",
        }, ],
    },
    {
        name: "FEDERAL FOOD STAMP ACT VIOLATION -SELL/TRANSFER OVER $100",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.91.142(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.142",
        }, ],
    },
    {
        name: "FOOD STAMPS REDEMPTION VIOLATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.91.144",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.144",
        }, ],
    },
    {
        name: "GUIDE ANIMAL - INTENT INJURE/DEATH",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.91.170(5)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.170",
        }, ],
    },
    {
        name: "POSSESS WEAPON IN STATE CORRECTIONAL INSTITUTE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.94.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94.040",
        }, ],
    },
    {
        name: "STATE PRISONER (PCS) POSSESS CONTROLLED SUBSTANCE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.94.041(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94.041",
        }, ],
    },
    {
        name: "NON-PRISONER (PCS) POSSESS CONTROLLED SUBSTANCE OR NON-PRISCRIBED NARCOTIC ON PREMISES OF STATE CORRECTIONAL INSTITUTION II ",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9.94.045",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9.94.045",
        }, ],
    },
    {
        name: "CRIMINAL SOLICITATION - FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.28.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.030",
        }, ],
    },
    {
        name: "CRIMINAL CONSPIRACY FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.28.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.040",
        }, ],
    },
    {
        name: "MANSLAUGHTER I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.32.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.32.060",
        }, ],
    },
    {
        name: "MANSLAUGHTER II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.32.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.32.070",
        }, ],
    },
    {
        name: "PROMOTING A SUICIDE ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.060",
        }, ],
    },
    {
        name: "CUSTODIAL ASSAULT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.100",
        }, ],
    },
    {
        name: "ASSAULT OF CHILD I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.120",
        }, ],
    },
    {
        name: "ASSAULT OF CHILD II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.130",
        }, ],
    },
    {
        name: "ASSAULT OF CHILD III",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.36.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.140",
        }, ],
    },
    {
        name: "CUSTODIAL INTERFERENCE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.40.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.060",
        }, ],
    },
    {
        name: "LURING OF MINOR",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.40.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.40.090",
        }, ],
    },
    {
        name: "CRIMINAL MISTREATMENT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.42.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.020",
        }, ],
    },
    {
        name: "CRIMINAL MISTREATMENT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.42.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.030",
        }, ],
    },
    {
        name: "ABANDON DEPENDENT PERSON I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.42.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.060",
        }, ],
    },
    {
        name: "ABANDON DEPENDENT PERSON II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.42.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.070",
        }, ],
    },
    {
        name: "ENDANGERMENT WITH CONTROLLED SUBSTANCE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.42.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.42.100",
        }, ],
    },
    {
        name: "RAPE III",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.060",
        }, ],
    },
    {
        name: "RAPE OF A CHILD I -  ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.073",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.073",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RAPE OF A CHILD II OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.076",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.076",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RAPE OF A CHILD III",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.079",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.079",
        }, ],
    },
    {
        name: "CHILD MOLESTATION I or ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.083",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.083",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CHILD MOLESTATION II or ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.086",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.086",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "CHILD MOLESTATION III",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.089",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.089",
        }, ],
    },
    {
        name: "SEXUAL MISCONDUCT WITH MINOR I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.093",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.093",
        }, ],
    },
    {
        name: "INDECENT LIBERTIES or ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.44.100(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.100",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VOYEURISM I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.115(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.115",
        }, ],
    },
    {
        name: "SEX OFFENDER/FELONY FAIL TO REGISTER 2 PRIORS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.132(1)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
        }, ],
    },
    {
        name: "KIDNAP OFFENDER/FELONY FAIL TO REGISTER",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.132(3)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.132",
        }, ],
    },
    {
        name: "CUSTODIAL SEXUAL MISCONDUCT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.44.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.44.160",
        }, ],
    },
    {
        name: "HARASSMENT - PREVIOUS CONVICTION/THREAT TO KILL FELONY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.46.020(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.020",
        }, ],
    },
    {
        name: "CRIMINAL GANG INTIMIDATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.46.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.46.120",
        }, ],
    },
    {
        name: "ARSON I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.48.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ARSON II or ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.48.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "RECKLESS BURNING I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.48.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.48.040",
        }, ],
    },
    {
        name: "LASER UNLAWFUL DISCHARGE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.49.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.49.020",
        }, ],
    },
    {
        name: "BURGLARY I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.52.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.020",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "VEHICLE PROWLING I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.52.095",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.095",
        }, ],
    },
    {
        name: "VEHICLE PROWLING II - 3RD OR SUBSEQUENT CONVICTION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.52.100(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.52.100",
        }, ],
    },
    {
        name: "THEFT I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.030",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.030",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.040",
        }, ],
    },
    {
        name: "ISSUE BANK CHECKS OVER $750",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.060",
        }, ],
    },
    {
        name: "THEFT OF MOTOR VEHICLE OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.065",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.065",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "POSSESS OF STOLEN VEHICLE OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.068",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.068",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "TAKE VEHICLE WITHOUT PERMISSION I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.070(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.070",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "TAKE A MOTOR VEHICLE WITHOUT PERMISSON II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.075",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.075",
        }, ],
    },
    {
        name: "THEFT OF LIVESTOCK I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.080(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.080",
        }, ],
    },
    {
        name: "THEFT OF LIVESTOCK II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.083(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.083",
        }, ],
    },
    {
        name: "THEFT RENTAL/LEASE PROPERTY OVER OR EQUAL $5000",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.096(5)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.096",
        }, ],
    },
    {
        name: "THEFT RENT/LEASE PROPERTY $750-$5000",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.096(5)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.096",
        }, ],
    },
    {
        name: "EXTORTION I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.120",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.120",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "PSP I - POSSESS STOLEN PROPERTY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.150",
        }, ],
    },
    {
        name: "PSP II - POSSESS STOLEN PROPERTY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.160",
        }, ],
    },
    {
        name: "ROBBERY I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.200",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.200",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "ROBBERY II OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.210",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.210",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "THEFT OF TELECOMMUNICATION SERVICES",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.262",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.262",
        }, ],
    },
    {
        name: "SALE OF TELECOMMUNICATION DEVICE UNLAWFUL",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.266",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.266",
        }, ],
    },
    {
        name: "CREDIT CARD - UNLAWFUL FACTORING - 1ST OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.290(4)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.290",
        }, ],
    },
    {
        name: "CREDIT CARD - UNLAWFUL FACTORING - 2ND OR SUBSEQUENT OFFENSE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.290(4)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.290",
        }, ],
    },
    {
        name: "THEFT OF A FIREARM OR ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.56.300",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.300",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "POSSESS A STOLEN FIREARM",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.310",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.310",
        }, ],
    },
    {
        name: "FINANCIAL FRAUD-UNLAWFUL PRODUCTION/POSSESSION OF PAYMENT INSTRUMENT/PERSONAL IDENTIFICACTION DEVICE/FICTITIOUS IDENTIFICATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.320",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.320",
        }, ],
    },
    {
        name: "THEFT WITH INTENT TO RESELL I & II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.340",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.340",
        }, ],
    },
    {
        name: "ORGANIZED RETAIL THEFT I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.350(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.350",
        }, ],
    },
    {
        name: "ORGANIZED RETAIL THEFT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.350(3)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.350",
        }, ],
    },
    {
        name: "RETAIL THEFT SPECIAL CIRCUMSTANCE (ALL DEGREES)",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.360",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.360",
        }, ],
    },
    {
        name: "MAIL THEFT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.370",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.370",
        }, ],
    },
    {
        name: "POSSESS OF STOLEN MAIL",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.380",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.380",
        }, ],
    },
    {
        name: "THEFT VULNERABLE ADULT II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.56.400(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.400",
        }, ],
    },
    {
        name: "FORGERY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.60.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.020",
        }, ],
    },
    {
        name: "OBTAIN A SIGNATURE BY DECEPTION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.60.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.030",
        }, ],
    },
    {
        name: "CRIMINAL IMPERSONATION I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.60.040(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.60.040",
        }, ],
    },
    {
        name: "DEFRAUD PUBLIC UTILITY II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.61.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.61.040",
        }, ],
    },
    {
        name: "INCEST I & II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.64.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.64.020",
        }, ],
    },
    {
        name: "BRIBERY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.68.010",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.68.010",
        }, ],
    },
    {
        name: "REQUESTING UNLAWFUL COMPENSATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.68.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.68.020",
        }, ],
    },
    {
        name: "RECEIVING OR GRANTING UNLAWFUL COMPENSATION",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.68.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.68.030",
        }, ],
    },
    {
        name: "TRADING IN PUBLIC OFFICE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.68.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.68.040",
        }, ],
    },
    {
        name: "TRADING IN SPECIAL INFLUENCE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.68.050",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.68.050",
        }, ],
    },
    {
        name: "PERJURY I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.020",
        }, ],
    },
    {
        name: "PERJURY II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.030",
        }, ],
    },
    {
        name: "BRIBING A WITNESS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.090",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.090",
        }, ],
    },
    {
        name: "BRIBE RECEIVING BY A WITNESS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.100",
        }, ],
    },
    {
        name: "INTIMIDATING A WITNESS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.110",
        }, ],
    },
    {
        name: "TAMPERING WITH A WITNESS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.120",
        }, ],
    },
    {
        name: "INTIMIDATING A JUROR",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.130",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.130",
        }, ],
    },
    {
        name: "INTIMIDATING A JUDGE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.72.160",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.72.160",
        }, ],
    },
    {
        name: "DISARM LAW ENFORCEMENT OFFICER",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.023(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.023",
        }, ],
    },
    {
        name: "DISARM LAW ENFORCE OFFFICER/GUN DISCHARGE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.023(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.023",
        }, ],
    },
    {
        name: "CRIMINAL ASSISTANCE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.070(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.070",
        }, ],
    },
    {
        name: "ESCAPE I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.110",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.110",
        }, ],
    },
    {
        name: "ESCAPE II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.120",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.120",
        }, ],
    },
    {
        name: "INTRODUCING CONTRABAND I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.140",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.140",
        }, ],
    },
    {
        name: "INTRODUCING CONTRABAND II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.150",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.150",
        }, ],
    },
    {
        name: "INTIMIDATING A PUBLIC SERVANT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.76.180",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.76.180",
        }, ],
    },
    {
        name: "EXTORTIONATE EXTENSION OF CREDIT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.020",
        }, ],
    },
    {
        name: "ADVANCE MONEY/PROPERTY FOR EXTORTIONATE EXTENSIONS OF CREDIT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.030",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.030",
        }, ],
    },
    {
        name: "EXTORTIONATE MEANS TO COLLECT EXTENSIONS OF CREDIT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.040",
        }, ],
    },
    {
        name: "STOLEN PROPERTY TRAFFICKING I - ATTEMPT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
                num: "9A.82.050(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.050",
            },
            {
                num: "9A.28.020",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020",
            },
        ],
    },
    {
        name: "STOLEN PROPERTY TRAFFICKING II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.055",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.055",
        }, ],
    },
    {
        name: "ORGANIZED CRIME -LEAD/ORGANIZE/MANAGING/INCITE VIOLENCE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.060",
        }, ],
    },
    {
        name: "INFLUENCE OUTCOME OF SPORTING EVENT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.070",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.070",
        }, ],
    },
    {
        name: "CRIMINAL PROFITEERING - USE PROCEEDS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.080(1)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.080",
        }, ],
    },
    {
        name: "CRIMINAL PROFITEERING - ACQUIRE PROPERTY",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.080(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.080",
        }, ],
    },
    {
        name: "CRIMINAL PROFITEERING - CONSPIRE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.080(3)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.080",
        }, ],
    },
    {
        name: "CRIMINAL PROFITEERING LIEN - TRUSTEE EVADE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.82.160(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.82.160",
        }, ],
    },
    {
        name: "CRIMINAL MISCHIEF - DEADLY WEAPON",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.84.010(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.010",
        }, ],
    },
    {
        name: "COMPUTER TRESPASS I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.90.040",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.040",
        }, ],
    },
    {
        name: "ELECTRONIC DATA SERVICE INTERFERENCE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.90.060",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.060",
        }, ],
    },
    {
        name: "ELECTRONIC DATA TAMPERING I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.90.080",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.080",
        }, ],
    },
    {
        name: "ELECTRONIC DATA THEFT",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.90.100",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.90.100",
        }, ],
    },
    {
        name: "FALSE REPORTING II",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.84.040(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.040",
        }, ],
    },
    {
        name: "FALSE REPORTING I",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "9A.84.040(2)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=9A.84.040",
        }, ],
    },
    {
        name: "KNOWINGLY ATTEMPTS TO EVADE PAYING TAXES ON CAPITAL ASSETS",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: "82.87.140(1)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=82.87.140",
        }, ],
    },
    {
        name: 'EXTREME PROTECTION ORDER VIOLATION - FELONY',
        type: 'F',
        lfos: [fines[0]],
        tags: ["DNA"],
        rcws: [{
            num: '7.105.460(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=7.105.460'
        }]
    },
    {
        name: "DELIVER IMMITATION CONTROLLED SUBSTANCE",
        type: "F",
        lfos: [fines[0]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
            num: "69.50.4012",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4012"
        }]
    },
    {
        name: "DELIVER IMMITATION CONTROLLED SUBSTANCE - ATTEMPT/CONSPIRACY",
        type: "S",
        lfos: [fines[0]],
        tags: ["DNA", "VUCSA"],
        rcws: [{
                num: "69.50.4012",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4012"
            },
            {
                num: "69.50.407",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=69.50.407"
            }
        ]
    },
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dna.js