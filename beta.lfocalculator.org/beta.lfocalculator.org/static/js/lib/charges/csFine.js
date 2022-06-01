import fines from '../LFOs/fines';

const charges = [{
        name: 'WILLFULLY FURNISHES FALSE INFORMATION FOR ANY CERTIFICATE REQUIRED UNDER CHAPTER 70.58',
        type: 'G',
        lfos: [fines[1]],
        rcws: [{
            num: '70.58.280',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280'
        }]
    },
    {
        name: 'COUNTERFEITING - 2ND CONVICTION',
        type: 'G',
        lfos: [fines[2]],
        rcws: [{
            num: '9.16.035(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035'
        }]
    },
    {
        name: 'PETS - TAKE/CONCEAL/KILL',
        type: 'G',
        lfos: [fines[3]],
        rcws: [{
            num: '9.08.070(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.08.070'
        }]
    },
    {
        name: 'PETS - RECEIVE STOLEN/SELL RESEARCH',
        type: 'G',
        lfos: [fines[4]],
        rcws: [{
            num: '9.08.072(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.08.072'
        }]
    },
    {
        name: 'PROVIDING FALSE RESIDENCY INFORMATION ON APPLICATION FOR CERTIFICATE OF OWNERSHIP',
        type: 'G',
        lfos: [fines[5]],
        wacs: [{
            num: '308.56A.030',
            url: 'https://app.leg.wa.gov/wac/default.aspx?cite=308.56A.030'
        }]
    },
    {
        name: 'PROVIDING FALSE ADDRESS TO DOL',
        type: 'G',
        lfos: [fines[6]],
        wacs: [{
            num: '308.56A.040',
            url: 'https://app.leg.wa.gov/wac/default.aspx?cite=308.56A.040'
        }]
    },
    {
        name: 'RECLAIMED WATER USE PENALTY',
        type: 'G',
        lfos: [fines[7]],
        rcws: [{
            num: '90.46.260',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=90.46.260'
        }]
    },
    {
        name: 'DISCHARGE OF POLLUTING MATTER',
        type: 'G',
        lfos: [fines[8]],
        rcws: [{
            num: '90.48.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=90.48.080'
        }]
    },
    {
        name: 'MAKE FALSE/MISLEADING STATEMENT TO PUBLIC SERVANT',
        type: 'G',
        lfos: [fines[9]],
        rcws: [{
            num: '49.17.190(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=49.17.190'
        }]
    },
    {
        name: 'DANGEROUS CONDITIONS VIOLATION SAFETY STANDARD',
        type: 'G',
        lfos: [fines[10]],
        rcws: [{
            num: '49.17.130',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=49.17.130'
        }]
    },
    {
        name: 'VIOLATION OF ORDER OF IMMEDIATE RESTRAINT',
        type: 'G',
        lfos: [fines[10]],
        rcws: [{
            num: '49.17.190(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=49.17.190'
        }]
    },
    {
        name: 'OUTDOOR BURNING PROHIBITED SUBSTANCES',
        type: 'G',
        lfos: [fines[11]],
        rcws: [{
            num: '70A.15.5010',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70A.15.5010'
        }]
    },
    {
        name: 'OUTDOOR BURNING URBAN GROWTH AREA',
        type: 'G',
        lfos: [fines[11]],
        rcws: [{
            num: '70A.15.5020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70A.15.5020'
        }]
    },
    {
        name: 'PUBLIC ASSISTANCE - FRAUDULENT DISPOSING OF REAL PROPERTY',
        type: 'G',
        lfos: [fines[12]],
        rcws: [{
            num: '74.08.331(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=74.08.331'
        }]
    },
    {
        name: 'SPECIALIZED FOREST PRODUCT PERMIT REQUIRED',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.031',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.031'
        }]
    },
    {
        name: 'SPECIALIZED FOREST PRODUCT BUYER PERMIT VIOLATION',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.101',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.101'
        }]
    },
    {
        name: 'SPECIALIZED FOREST PRODUCT BUYERS RECORD VIOLATION',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.111',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.111'
        }]
    },
    {
        name: 'SELL HUCKLEBERRY/HARVEST SPECIALIZED FOREST PRODUCTS',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.131(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.131'
        }]
    },
    {
        name: 'HARVEST SPECIALIZED FOREST PRODUCT NOT AUTHORIZED PERMIT',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.131(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.131'
        }]
    },
    {
        name: 'HARVEST SPECIALIZED FOREST PRODUCT WITHOUT PERMISSION',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.131(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.131'
        }]
    },
    {
        name: 'HARVEST HUCKLEBERRY WITH RAKE/MECHANICAL DEVICE',
        type: 'G',
        lfos: [fines[13]],
        rcws: [{
            num: '76.48.131(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.48.131'
        }]
    },
    {
        name: 'EROTIC MATERIAL - SELL TO MINOR - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[14]],
        rcws: [{
            num: '9.68.060(5)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.68.060'
        }]
    },
    {
        name: 'RECORDING VIOLATIONS - MISDEMEANOR',
        type: 'G',
        lfos: [fines[15]],
        rcws: [{
            num: '19.25.020(2)(c)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=19.25.020'
        }]
    },
    {
        name: 'KICKBACKS, BRIBES, REBATES',
        type: 'G',
        lfos: [fines[16]],
        rcws: [{
            num: '51.48.280(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=51.48.280'
        }]
    },
    {
        name: 'INDIVIDUAL INSURANCE - HEALTH SERVICE PROVIDER FEE',
        type: 'G',
        lfos: [fines[16]],
        rcws: [{
            num: '51.48.280(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=51.48.280'
        }]
    },
    {
        name: 'FAILURE TO POSSESS/PRODUCE AIR LICENSE',
        type: 'G',
        lfos: [fines[17]],
        rcws: [{
            num: '14.16.040',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=14.16.040'
        }]
    },
    {
        name: 'SCHOOL VIOLENCE',
        type: 'G',
        lfos: [fines[18]],
        rcws: [{
            num: '28A.635.090(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.090'
        }]
    },
    {
        name: 'SCHOOL INTIMIDATION',
        type: 'G',
        lfos: [fines[19]],
        rcws: [{
            num: '28A.635.100(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.100'
        }]
    },
    {
        name: 'OBSTRUCT LIQUOR OFFICER - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[20]],
        rcws: [{
            num: '66.44.370',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.370'
        }]
    },
    {
        name: 'STOP WORK ORDERS',
        type: 'G',
        lfos: [fines[21]],
        rcws: [{
            num: '76.09.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.09.080'
        }]
    },
    {
        name: 'UNAUTHORIZED FOREST PRACTICE',
        type: 'G',
        lfos: [fines[21]],
        rcws: [{
            num: '76.09.190',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.09.190'
        }]
    },
    {
        name: 'FOREST PRACTICES VIOLATION',
        type: 'G',
        lfos: [fines[21]],
        rcws: [{
            num: '76.09.050',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=76.09.050'
        }]
    },
    {
        name: 'ISSUE BANK CHECKS UNDER $750',
        type: 'G',
        lfos: [fines[22]],
        rcws: [{
            num: '9A.56.060',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.060'
        }]
    },
    {
        name: 'UNLAWFUL SALE, TRANSPORTATION OF SPIRIT LIQUOR - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[23]],
        rcws: [{
            num: '66.44.140',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.140'
        }]
    },
    {
        name: 'FORGE/ALTER ID CARD FOR MINOR',
        type: 'G',
        lfos: [fines[24]],
        rcws: [{
            num: '66.44.328',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.328'
        }]
    },
    {
        name: 'UNLAWFUL SALE, TRANS OF SPIRIT LIQUOR - 1ST OFFENSE',
        type: 'G',
        lfos: [fines[25]],
        rcws: [{
            num: '66.44.140',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.140'
        }]
    },
    {
        name: 'INTERFERE WITH HEALTH CARE FACILITY - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[26]],
        rcws: [{
            num: '9A.50.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.50.020'
        }]
    },
    {
        name: 'INTERFERE WITH HEALTH CARE FACILITY - 3RD OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[27]],
        rcws: [{
            num: '9A.50.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.50.020'
        }]
    },
    {
        name: 'INTERFERE WITH HEALTH CARE FACILITY - 1ST OFFENSE',
        type: 'G',
        lfos: [fines[28]],
        rcws: [{
            num: '9A.50.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.50.020'
        }]
    },
    {
        name: 'AIRCRAFT EXCISE TAX EVASION - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[29]],
        rcws: [{
            num: '47.68.255',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.255'
        }]
    },
    {
        name: 'NO AIRCRAFT REGISTRATION/PERMIT',
        type: 'G',
        lfos: [fines[30]],
        rcws: [{
            num: '47.68.230',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.230'
        }]
    },
    {
        name: 'FAILS/NEGLECTS/REFUSES TO COMPLY WITH CHAPTER 70.58 - 2ND OFFENSE',
        type: 'S',
        lfos: [fines[31]],
        rcws: [{
            num: '70.58.280',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280'
        }]
    },
    {
        name: 'FAILS/NEGLECTS/REFUSES TO COMPLY WITH CHAPTER 70.58 - 3RD OR SUBSEQUENT OFFENSE',
        type: 'S',
        lfos: [fines[32]],
        rcws: [{
            num: '70.58.280',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.280'
        }]
    },
    {
        name: 'COUNTERFEITING - FIRST (1ST) CONVICTION',
        type: 'S',
        lfos: [fines[33]],
        rcws: [{
            num: '9.16.035(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.16.035'
        }]
    },
    {
        name: 'DISPOSE OF TRASH IN CHARITY RECEPTACLE',
        type: 'S',
        lfos: [fines[34]],
        rcws: [{
            num: '9.91.130(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.91.130'
        }]
    },
    {
        name: 'FAIL TO ACCOUNT FOR SCHOOL PROPERTY',
        type: 'S',
        lfos: [fines[35]],
        rcws: [{
            num: '28A.635.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.070'
        }]
    },
    {
        name: 'INHALING TOXIC FUMES',
        type: 'S',
        lfos: [fines[36]],
        rcws: [{
            num: '9.47A.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.47A.020'
        }]
    },
    {
        name: 'POSSESS SUBSTANCE - TOXIC FUMES',
        type: 'S',
        lfos: [fines[36]],
        rcws: [{
            num: '9.47A.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.47A.030'
        }]
    },
    {
        name: 'SELL SUBSTANCE - TOXIC FUMES',
        type: 'S',
        lfos: [fines[36]],
        rcws: [{
            num: '9.47A.040',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.47A.040'
        }]
    },
    {
        name: 'MOCK AUCTIONS',
        type: 'S',
        lfos: [fines[37]],
        rcws: [{
            num: '9.45.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.45.070'
        }]
    },
    {
        name: 'LIFE VEST VIOLATION/CARRY PASSENGERS FOR HIRE',
        type: 'S',
        lfos: [fines[38]],
        rcws: [{
            num: '79A.60.160(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.160'
        }]
    },
    {
        name: 'OPERATE WHITEWATER RAFT WITHOUT LICENSE',
        type: 'S',
        lfos: [fines[38]],
        rcws: [{
            num: '79A.60.480',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.480'
        }]
    },
    {
        name: 'FAIL TO SHOW ALCOHOL SERVER PERMIT - 1ST  OFFENSE',
        type: 'S',
        lfos: [fines[39]],
        rcws: [{
            num: '66.20.310(2)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.310'
        }]
    },
    {
        name: 'NO VALID ALCOHOL SERVER PERMIT - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[39]],
        rcws: [{
            num: '66.20.310(2)(e)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.310'
        }]
    },
    {
        name: 'ACCEPT EMPLOYMENT IN SALE/SERVICE OF ALCOHOL WHEN ALCOHOL SERVER PERMIT HAS BEEN DENIED/SUSPENDED/REVOKED - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[39]],
        rcws: [{
            num: '66.20.310(6)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.310'
        }]
    },
    {
        name: 'ASSUMING IDENTIFICATION OF CPA WITHOUT LICENSE - MISDEMEANOR',
        type: 'S',
        lfos: [fines[40]],
        rcws: [{
            num: '18.04.345',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=18.04.345'
        }]
    },
    {
        name: 'USING UNREGISTERED FIRM NAME',
        type: 'S',
        lfos: [fines[40]],
        rcws: [{
            num: '18.04.345(5)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=18.04.345'
        }]
    },
    {
        name: 'TAX REFUND LOAN VIOLATION',
        type: 'S',
        lfos: [fines[41]],
        rcws: [{
            num: '19.265.050',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=19.265.050'
        }]
    },
    {
        name: 'CREATING WATER POLLUTION NUISANCE',
        type: 'S',
        lfos: [fines[42]],
        rcws: [{
            num: '35.88.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=35.88.030'
        }]
    },
    {
        name: 'FORECLOSE - NO REMOVAL OF PROPERTY',
        type: 'S',
        lfos: [fines[43]],
        rcws: [{
            num: '61.12.030(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=61.12.030'
        }]
    },
    {
        name: 'FAIL TO SHOW ALCOHOL SERVER PERMIT - 2ND OR SUBSEQUENT OFFENSE',
        type: 'S',
        lfos: [fines[44]],
        rcws: [{
            num: '66.20.310(2)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.310'
        }]
    },
    {
        name: 'NO VALID ALCOHOL SERVER PERMIT - 2ND OR SUBSEQUENT OFFENSE',
        type: 'S',
        lfos: [fines[44]],
        rcws: [{
            num: '66.20.310(2)(e)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.310'
        }]
    },
    {
        name: 'ACCEPT EMPLOYMENT IN SALE/SERVICE OF ALCOHOL WHEN ALCOHOL SERVER PERMIT HAS BEEN DENIED/SUSPENDED/REVOKED - 2ND OR SUBSEQUENT OFFENSE',
        type: 'S',
        lfos: [fines[44]],
        rcws: [{
            num: '66.20.310(6)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.310'
        }]
    },
    {
        name: 'IDENTIFICATION NOT PRESENTED ON REQUEST OF LIQUOR LICENSEE - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.20.180',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.180'
        }]
    },
    {
        name: 'PURCHASE BEER FROM UNLICENSED WHOLESALE - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.28.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.070'
        }]
    },
    {
        name: 'PERMIT FOR MUSIC & DANCING - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.28.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.080'
        }]
    },
    {
        name: 'SALES OF LIQUOR BY DRINK OR BOTTLE - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.130',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.130'
        }]
    },
    {
        name: 'ILLEGAL POSSESS, TRANSPORT ALCOHOL - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.160',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.160'
        }]
    },
    {
        name: 'ILLEGAL POSSESS LIQUOR TO SELL - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.170',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.170'
        }]
    },
    {
        name: 'OBTAINING LIQUOR FOR INELIGIBLE PERSON - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.210',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.210'
        }]
    },
    {
        name: 'MIP - MINOR INTOXICATED IN PUBLIC PLACE - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.270(2)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.270'
        }]
    },
    {
        name: 'MINOR APPLYING FOR PERMIT - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.280',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.280'
        }]
    },
    {
        name: 'OBSTRUCT LIQUOR OFFICER - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[45]],
        rcws: [{
            num: '66.44.370',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.370'
        }]
    },
    {
        name: 'EROTIC MATERIAL - SELL/DISTRIBUTED TO MINOR - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[46]],
        rcws: [{
            num: '9.68.060(5)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.68.060'
        }]
    },
    {
        name: 'FAIL TO ALLOW INSPECTION - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[47]],
        rcws: [{
            num: '66.28.090',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.090'
        }]
    },
    {
        name: 'VIOLATE CHAPTER REGARDING COMMON CARRIER',
        type: 'S',
        lfos: [fines[48]],
        rcws: [{
            num: '81.29.040',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.29.040'
        }]
    },
    {
        name: 'DISTURB SCHOOL ACTIVITY OR MEETING',
        type: 'S',
        lfos: [fines[49]],
        rcws: [{
            num: '28A.635.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.030'
        }]
    },
    {
        name: 'ABUSING OR INSULTING TEACHERS',
        type: 'S',
        lfos: [fines[51]],
        rcws: [{
            num: '28A.635.010',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.010'
        }]
    },
    {
        name: 'RAILROAD OR RAILWAY VIOLATE STAFFING',
        type: 'S',
        lfos: [fines[52]],
        rcws: [{
            num: '81.40.010',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.40.010'
        }]
    },
    {
        name: 'RAILROAD OR RAILWAY UNIFORM - UNLAWFUL TO REQUIRE PURCHASE',
        type: 'S',
        lfos: [fines[53]],
        rcws: [{
            num: '81.40.060',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.40.060'
        }]
    },
    {
        name: 'WORK PERMIT FOR MINOR REQUIRED',
        type: 'S',
        lfos: [fines[54]],
        rcws: [{
            num: '49.12.123',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=49.12.123'
        }]
    },
    {
        name: 'MINOR LIQUOR PURCHASE OR ATTEMPT',
        type: 'S',
        lfos: [fines[55]],
        rcws: [{
                num: '66.44.290',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.290'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'IDENTIFICATION CARD - TRANSFER ALCOHOL PURCHASE',
        type: 'S',
        lfos: [fines[56]],
        rcws: [{
            num: '66.20.200(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.200'
        }]
    },
    {
        name: 'IDENTIFICATION CARD - PROCURE UNLAWFULLY',
        type: 'S',
        lfos: [fines[57]],
        rcws: [{
            num: '66.20.200(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.200'
        }]
    },
    {
        name: 'VIOLATE HIRING COMPETENT RAILWAY/STREET CAR OPERATORS',
        type: 'S',
        lfos: [fines[58]],
        rcws: [{
            num: '81.64.090',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.64.090'
        }]
    },
    {
        name: 'DISCLOSING EXAMINATION QUESTIONS',
        type: 'S',
        lfos: [fines[59]],
        rcws: [{
            num: '28A.635.040',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=28A.635.040'
        }]
    },
    {
        name: 'FAILURE TO GET BURIAL PERMIT - 2ND OFFENSE',
        type: 'S',
        lfos: [fines[60]],
        rcws: [{
            num: '70.58.230',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.230'
        }]
    },
    {
        name: 'UNLAWFUL TRANSFER OF AGE ID TO MINOR',
        type: 'S',
        lfos: [fines[61]],
        rcws: [{
            num: '66.44.325',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.325'
        }]
    },
    {
        name: 'FAILURE TO GET BURIAL PERMIT - 3RD OR SUBSEQUENT OFFENSE',
        type: 'S',
        lfos: [fines[62]],
        rcws: [{
            num: '70.58.230',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.230'
        }]
    },
    {
        name: 'PEDDLERS - NO LICENSE',
        type: 'S',
        lfos: [fines[63]],
        rcws: [{
            num: '36.71.060',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=36.71.060'
        }]
    },
    {
        name: 'LIMITED ACCESS HIGHWAY VIOLATION',
        type: 'S',
        lfos: [fines[64]],
        rcws: [{
            num: '47.52.120(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=47.52.120'
        }]
    },
    {
        name: 'INFECTIOUS DISEASE - LOCAL BOARD OF HEALTH ENFORCE VIOLATION',
        type: 'S',
        lfos: [fines[65]],
        rcws: [{
            num: '70.05.120(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.05.120'
        }]
    },
    {
        name: 'INFECTIOUS DISEASE - DOCTOR FAIL TO REPORT',
        type: 'S',
        lfos: [fines[66]],
        rcws: [{
            num: '70.05.120(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.05.120'
        }]
    },
    {
        name: 'INFECTIOUS DISEASE - VIOLATIONS',
        type: 'S',
        lfos: [fines[67]],
        rcws: [{
            num: '70.05.120(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.05.120'
        }]
    },
    {
        name: 'REGISTRATION OF AIRCRAFT',
        type: 'S',
        lfos: [fines[68]],
        rcws: [{
            num: '47.68.250',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=47.68.250'
        }]
    },
    {
        name: 'IDENTIFICATION NOT PRESENTED ON REQUEST OF LIQUOR LICENSEE - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.20.180',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.20.180'
        }]
    },
    {
        name: 'PERMIT FOR MUSIC & DANCING - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.28.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.080'
        }]
    },
    {
        name: 'SALES OF LIQUOR BY DRINK OR BOTTLE - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.44.130',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.130'
        }]
    },
    {
        name: 'ILLEGAL POSSESS, TRANSPORT ALCOHOL - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.44.160',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.160'
        }]
    },
    {
        name: 'ILLEGAL POSSESS LIQUOR TO SELL - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.44.170',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.170'
        }]
    },
    {
        name: 'OBTAINING LIQUOR FOR INELIGIBLE PERSON - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.44.210',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.210'
        }]
    },
    {
        name: '(MIP) - MINOR INTOXICATED IN PUBLIC PLACE - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.44.270(2)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.270'
        }]
    },
    {
        name: 'MINOR APPLYING FOR PERMIT - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[69]],
        rcws: [{
            num: '66.44.280',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.44.280'
        }]
    },
    {
        name: 'PURCHASE BEER FROM UNLICENSED WHOLESALE - 2ND OFFENSE',
        type: 'S',
        lfos: [fines[69]],
        rcws: [{
            num: '66.28.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.070'
        }]
    },
    {
        name: 'FAIL TO ALLOW INSPECTION - 2ND OFFENSE',
        type: 'G',
        lfos: [fines[70]],
        rcws: [{
            num: '66.28.090',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=66.28.090'
        }]
    },
    {
        name: 'FAILURE TO GET BURIAL PERMIT - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[71]],
        rcws: [{
            num: '70.58.230',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.58.230'
        }]
    },
    {
        name: 'UNLAWFUL USE CRAB POT REMOVAL PERMIT',
        type: 'S',
        lfos: [fines[72]],
        rcws: [{
            num: '77.70.500',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=77.70.500'
        }]
    },
    {
        name: 'VIOLATE GAS AND HAZARDOUS LIQUID PIPELINES',
        type: 'G',
        lfos: [fines[73]],
        rcws: [{
            num: '81.88.040',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.88.040'
        }]
    },
    {
        name: 'BRING ANIMAL IN STATE WITHOUT VETINARY CERTIFICATION',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.050(1) or 16.36.140(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.050'
        }]
    },
    {
        name: 'TRANSPORT ANIMAL OTHER ADDRESS',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.050(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.050'
        }]
    },
    {
        name: 'MAKE FALSE ANIMAL CERTIFICATE',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.050(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.050'
        }]
    },
    {
        name: 'FALSELY APPLY/ALTER/REMOVE ANIMAL IDENTIFICATION',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.050(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.050'
        }]
    },
    {
        name: 'HINDER/OBSTRUCT STATE VETERINARY',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.050(5)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.050'
        }]
    },
    {
        name: 'VIOLATE DEPARTMENT OF AGRICULTURE RULE',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.050(6)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.050'
        }]
    },
    {
        name: 'INTEFERE WITH AGRICULTURE INSPECTION',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.060',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.060'
        }]
    },
    {
        name: 'IMPORT INFECTED ANIMAL WITHOUT PERMIT',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.080'
        }]
    },
    {
        name: 'TRANSFER/EXPOSE INFECTED ANIMALS',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.082',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.082'
        }]
    },
    {
        name: 'FAIL TO BURY DEAD DISEASED LIVESTOCK',
        type: 'G',
        lfos: [fines[74]],
        rcws: [{
            num: '16.36.102',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.36.102'
        }]
    },
    {
        name: 'VIOLATE ANTI-HARASSMENT ORDER',
        type: 'G',
        lfos: [fines[75]],
        rcws: [{
            num: '10.14.120',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=10.14.120'
        }]
    },
    {
        name: 'APPLY PESTICIDE - RESTRICTED USE - 2ND OFFENSE 5 YEARS OR LESS FROM PREVIOUS CONVICTION',
        type: 'G',
        lfos: [fines[76]],
        rcws: [{
            num: '17.21.150(15)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=17.21.150'
        }]
    },
    {
        name: 'SEXUAL INTERCOURSE NOT INFORM HAVE SEXUALLY TRANSMITTED DISEASE',
        type: 'G',
        lfos: [fines[77]],
        rcws: [{
            num: '70.24.140',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=70.24.140'
        }]
    },
    {
        name: 'NO NAME OR PERMIT NUMBER DISPLAYED (PASSENGER CHARGER AND EXCURSION CARRIERS)',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.70.330',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.70.330'
        }]
    },
    {
        name: 'NO NAME OR PERMIT NUMBER DISPLAYED (MOTOR FREIGHT CARRIERS)',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.305',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.305'
        }]
    },
    {
        name: 'TRANSPORTATION SERVICE - NO FEDERAL  AUTHORITY/REGSITRATION',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.70.370',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.70.370'
        }]
    },
    {
        name: 'FAIL TO OBSERVE ORDER, AID, ABET',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.77.090',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.77.090'
        }]
    },
    {
        name: 'TRANSPORTATION SERVICE - NO FEDERAL AUTHORITY/REGISTRATION',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.77.200',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.77.200'
        }]
    },
    {
        name: 'VIOLATION OF MOTOR CARRIER ACT',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.050',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.050'
        }]
    },
    {
        name: 'NO VALID PERMIT (COMMON/CONTRACT)',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.070'
        }]
    },
    {
        name: 'EXCEEDING PERMIT AUTHORITY',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.100',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.100'
        }]
    },
    {
        name: 'HOURS OF OPERATORS/RULES(DRIVER LOGS)',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.211',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.211'
        }]
    },
    {
        name: 'TARIFF RATES MUST BE CHARGED',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.220',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.220'
        }]
    },
    {
        name: 'OPERATING IN MORE THAN 1 CLASS',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.260',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.260'
        }]
    },
    {
        name: 'TRANSFER OF PERMITS WITHOUT PERMISSON',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.270',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.270'
        }]
    },
    {
        name: 'VIOLATE UTILITIES AND TRANSPORTATION COMMISSION RULES OR REGULATIONS',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.290',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.290'
        }]
    },
    {
        name: 'FAIL TO REGISTER WITH INTERSTATE COMMERCE COMMISSION (ICC) AUTHORITY',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.80.371',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.80.371'
        }]
    },
    {
        name: 'CERTIFICATE OF CONVENIENCE',
        type: 'G',
        lfos: [fines[78]],
        rcws: [{
            num: '81.84.010',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.84.010'
        }]
    },
    {
        name: 'CERTIFICATION REQUIREMENT (CHARTER BUS)',
        type: 'G',
        lfos: [fines[79]],
        rcws: [{
            num: '81.70.220',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=81.70.220'
        }]
    },
    {
        name: 'TRANSPORT UNSTAMPED CIGARETTES',
        type: 'G',
        lfos: [fines[80]],
        rcws: [{
            num: '82.24.250',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=82.24.250'
        }]
    },
    {
        name: 'VIOLATION OF INJUNCTION OR ORDER REGARDING FALSE ADVERTISING',
        type: 'G',
        lfos: [fines[81]],
        rcws: [{
            num: '9.04.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.04.070'
        }]
    },
    {
        name: 'ADVERTISING FUEL PRICES BY SERVICE STATIONS',
        type: 'G',
        lfos: [fines[81]],
        rcws: [{
            num: '9.04.090',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.04.090'
        }]
    },
    {
        name: 'FIREARM TRANSFER/SALE VIOLATION - FIRST (1ST) OFFENSE',
        type: 'G',
        lfos: [fines[82]],
        rcws: [{
            num: '9.41.113',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.113'
        }]
    },
    {
        name: 'STOCK AT LARGE',
        type: 'S',
        lfos: [fines[83]],
        rcws: [{
            num: '16.24.065',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=16.24.065'
        }]
    },
    {
        name: 'COMMERCIAL PEST APPLICATOR LICENSE',
        type: 'S',
        lfos: [fines[84]],
        rcws: [{
            num: '17.21.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=17.21.070'
        }]
    },
    {
        name: 'APPLY PESTICIDE - RESTRICTED USE - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[85]],
        rcws: [{
            num: '17.21.150(15)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=17.21.150'
        }]
    },
    {
        name: 'DUNGENESS CRAB OFFSHORE DELIVERY, NO LICENSE',
        type: 'S',
        lfos: [fines[86]],
        rcws: [{
            num: '77.70.300',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=77.70.300'
        }]
    },
    {
        name: 'ALTERATION OF IDENTIFYING MARKS',
        type: 'S',
        lfos: [fines[87]],
        rcws: [{
            num: '9.41.140',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9.41.140'
        }]
    },
    {
        name: 'MINOR (UNDER 14) OPERATE JET SKI',
        type: 'S',
        lfos: [fines[88]],
        rcws: [{
            num: '79A.60.190(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=79A.60.190'
        }]
    },
    {
        name: 'FAIL TO SUMMON ASSISTANCE',
        type: 'S',
        lfos: [fines[89]],
        rcws: [{
            num: '9A.36.160',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.36.160'
        }]
    },
    {
        name: 'CIVIL PROTECTION ORDER VIOLATION (not antiharassment protection or extreme risk protection orders)',
        type: 'S',
        lfos: [fines[134]],
        rcws: [{
            num: '7.105.450(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=7.105.450'
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/csFine.js