import fines from '../LFOs/fines';

const charges = [{
        name: 'FIREARM TRANSFER/SALE VIOLATION  2ND OR SUBSEQUENT OFFENSE',
        type: 'F',
        lfos: [fines[106]],
        tags: ['DNA'],
        rcws: [{
            num: '9.41.113',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.113'
        }]
    },
    {
        name: 'EXTREME HAZARDOUS WASTE - DISPOSE UNLAWFUL',
        type: 'F',
        lfos: [fines[107]],
        tags: ['DNA'],
        rcws: [{
            num: '70A.300.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70A.300.070'
        }]
    },
    {
        name: 'IMITATING LAWFUL BRAND - Felony',
        type: 'F',
        lfos: [fines[108]],
        tags: ['DNA'],
        rcws: [{
            num: '9.16.020(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.020'
        }]
    },
    {
        name: 'EROTIC MATERIAL - SELL TO MINOR - 3RD OR SUBSEQUENT OFFENSE',
        type: 'F',
        lfos: [fines[109]],
        tags: ['DNA'],
        rcws: [{
            num: '9.68.060(5)(c)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.68.060'
        }]
    },
    {
        name: 'RECORDING VIOLATIONS - FELONY',
        type: 'F',
        lfos: [fines[110]],
        tags: ['DNA'],
        rcws: [{
            num: '19.25.020(2)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=19.25.020'
        }]
    },
    {
        name: 'ASSUMING IDENTIFICATION OF CPA WITHOUT LICENSE - FELONY',
        type: 'F',
        lfos: [fines[111]],
        tags: ['DNA'],
        rcws: [{
            num: '18.04.345',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=18.04.345'
        }]
    },
    {
        name: 'FINANCIAL INFORMATION IMPROPERLY OBTAINED',
        type: 'F',
        lfos: [fines[112]],
        tags: ['DNA'],
        rcws: [{
            num: '9.35.010',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.35.010'
        }]
    },
    {
        name: 'MONEY LAUNDERING',
        type: 'F',
        lfos: [fines[113]],
        tags: ['DNA'],
        rcws: [{
            num: '9A.83.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.83.020'
        }]
    },
    {
        name: 'FALSE INSTRUMENT - FILE IN PUBLIC OFFICE',
        type: 'F',
        lfos: [fines[114]],
        tags: ['DNA'],
        rcws: [{
            num: '40.16.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=40.16.030'
        }]
    },
    {
        name: 'POISON/HARMFUL OBJECT IN FOOD/EDIBLES',
        type: 'F',
        lfos: [fines[115]],
        tags: ['DNA'],
        rcws: [{
            num: '69.40.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=69.40.030'
        }]
    },
    {
        name: 'RAILROAD OR RAILWAY EQUIPMENT STEAL/INTERFERE',
        type: 'F',
        lfos: [fines[116]],
        tags: ['DNA'],
        rcws: [{
            num: '81.60.080(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.60.080'
        }]
    },
    {
        name: 'RAILROAD OR RAILWAY EQUIPMENT- RECEIVE STOLEN PROPERTY',
        type: 'F',
        lfos: [fines[116]],
        tags: ['DNA'],
        rcws: [{
            num: '81.60.080(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.60.080'
        }]
    },
    {
        name: 'PETS-RECEIVE STOLEN/SELL RESEARCH SUBSEQUENT VIOLATION',
        type: 'F',
        lfos: [fines[117]],
        tags: ['DNA'],
        rcws: [{
            num: '9.08.072(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.08.072'
        }]
    },
    {
        name: 'COUNTERFEITING - 3RD or SUBSEQUENT CONVICTION',
        type: 'F',
        lfos: [fines[118]],
        tags: ['DNA'],
        rcws: [{
            num: '9.16.035(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035'
        }]
    },
    {
        name: 'CIVIL PROTECTION ORDER VIOLATION - FELONY  (not antiharassment protection or extreme risk protection orders)',
        type: 'F',
        lfos: [fines[134]],
        tags: ['DNA'],
        rcws: [{
            num: '7.105.450(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=7.105.450'
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/dnaAndCsFine.js