import fines from "../LFOs/fines";

const charges = [{
        name: "OPERATE COMMERCIAL VEHICLE WITH MORE THAN 1 LICENSE",
        type: "G",
        lfos: [fines[91]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.25.020",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.25.020"
        }]
    },
    {
        name: "LICENSE VEHICLE OUT OF STATE- 1ST OFFENSE",
        type: "G",
        lfos: [fines[92]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.16A.030(6)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.030"
        }]
    },
    {
        name: "FLIP LICENSE PLATE VIOLATION/FALSE REGISTRATION VIOLATION - 1ST OFFENSE",
        type: "G",
        lfos: [fines[93]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.37.685(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.685"
        }]
    },
    {
        name: "FLIP LICENSE PLATE VIOLATION/FALSE REGISTRATION VIOLATION - 2ND OFFENSE",
        type: "G",
        lfos: [fines[94]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.37.685(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.685"
        }]
    },
    {
        name: "LICENSE VEHICLE OUT OF STATE - 2ND OR SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[95]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.16A.030(6)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.030"
        }]
    },
    {
        name: "FLIP LICENSE PLATE VIOLATION/FALSE REGISTRATION VIOLATION - 3RD AND SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[96]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.37.685(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.685"
        }]
    },
    {
        name: "UNLAWFUL DISTRIBUTION/USE OF DOL PERSONAL INFORMATION",
        type: "G",
        lfos: [fines[97]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.12.640(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.640"
        }]
    },
    {
        name: "OWNERSHIP OF VEHICLE BY PERSON UNDER 18",
        type: "G",
        lfos: [fines[98]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.12.755(3)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.755"
        }]
    },
    {
        name: "GIVE/SELL VEHICLE TO PERSON UNDER 18",
        type: "S",
        lfos: [fines[98]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.12.755(3)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.755"
        }]
    },
    {
        name: "FOR HIRE VEHICLE - INSURANCE/PERMIT REQUIRED",
        type: "G",
        lfos: [fines[99]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.72.100(2)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.72.100"
        }]
    },
    {
        name: "DRIVING WITH SUSPENDED VEHICLE REGISTRATION",
        type: "G",
        lfos: [fines[100]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.29.605(6)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.29.605"
        }]
    },
    {
        name: "OUT OF SERVICE TRANSPORTATION NUMBER -1ST OFFENSE",
        type: "G",
        lfos: [fines[101]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.16A.320(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320"
        }]
    },
    {
        name: "RESTRICTED/OCCUPATIONAL LICENSE VIOLATION",
        type: "G",
        lfos: [fines[102]],
        tags: ["TITLE 46"],
        rcws: [{
                num: "46.20.394",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.394"
            },
            {
                num: "46.20.410(1)",
                url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.410"
            }
        ]
    },
    {
        name: "OUT OF SERVICE TRANSPORTATION NUMBER -2ND or SUBSEQUENT OFFENSE",
        type: "G",
        lfos: [fines[103]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.16A.320(2)(b)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320"
        }]
    },
    {
        name: "HAZARDOUS MATERIAL CARRIER VIOLATION",
        type: "S",
        lfos: [fines[104]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.48.175",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.48.175"
        }]
    },
    {
        name: "FAIL TO SURRENDER LICENSE PLATES",
        type: "S",
        lfos: [fines[105]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.29.605(4)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.29.605"
        }]
    },
    {
        name: "CONFIDENTIAL DRIVING RECORD VIOLATION (NEGLIGENT)",
        type: "G",
        lfos: [fines[133]],
        tags: ["TITLE 46"],
        rcws: [{
            num: "46.52.130(6)(a)",
            url: "http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.130"
        }]
    },
    {
        name: 'FAIL TITLE/REGISTER OFF-ROAD VEHICLE - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[132]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.495(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.495'
        }]
    },
    {
        name: 'REGISTERED OFF-ROAD VEHICLE OUT OF WA TO AVOID TAXES/FEES - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[132]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.495(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.495'
        }]
    },
    {
        name: 'FAIL TO REGISTER SNOWMOBILE - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[135]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.505(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.505'
        }]
    },
    {
        name: 'REGISTERED SNOWMOBILE OUT OF WA TO AVOID TAXES/FEES - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[135]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.505(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.505'
        }]
    },
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/title46AndCsFine.js