import fines from '../LFOs/fines';

const charges = [{
        name: 'NON-HIGHWAY VEHICLE-ENDANGER LIFE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.480(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.480'
        }]
    },
    {
        name: 'NON-HIGHWAY VEHICLE VIOLATION',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.480(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.480'
        }]
    },
    {
        name: 'FAIL TITLE/REGISTER OFF-ROAD VEHICLE - 1ST OFFENSE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.495(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.495'
        }]
    },
    {
        name: 'REGISTERED OFF-ROAD VEHICLE OUT OF WA TO AVOID TAXES/FEES - 1ST OFFENSE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.495(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.495'
        }]
    },
    {
        name: 'SNOWMOBILE - ENDANGER LIFE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.495(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.495'
        }]
    },
    {
        name: 'SNOWMOBILE OPERATE VIOLATION ANIMAL/WEAPON',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.495(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.495'
        }]
    },
    {
        name: 'FAIL TO REGISTER SNOWMOBILE - 1ST OFFENSE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.505(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.505'
        }]
    },
    {
        name: 'REGISTERED SNOWMOBILE OUT OF WA TO AVOID TAXES/FEES - 1ST OFFENSE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.505(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.505'
        }]
    },
    {
        name: 'OPERATE VEHICLE WITHOUT VALID CERTIFICATE OF TITLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.12.550(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.550'
        }]
    },
    {
        name: 'DESTROY VEHICLE - FAIL SURRENDER TITLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.12.600(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.600'
        }]
    },
    {
        name: 'ADVERT/SELL UNFIT VEHICLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.12.610(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.610'
        }]
    },
    {
        name: 'BUY/SELL VEHICLE WITH ALTERED SERIAL NUMBER',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.12.720',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.720'
        }]
    },
    {
        name: 'REGISTER VEHICLE-FALSIFY RESIDENCE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.16A.050(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.050'
        }]
    },
    {
        name: 'OPERATE VEHICLE - REGISTRATION CERTIFICATE CANCELLED/REFUSED',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.16A.070',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.070'
        }]
    },
    {
        name: 'TRIP PERMIT VIOLATION',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.16A.320(3)(a)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320'
            },
            {
                num: '46.16A.320(6)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320'
            }
        ]
    },
    {
        name: 'FALSE STATEMENT IN APPLICATION FOR SPECIAL PLATE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.18.285(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.18.285'
        }]
    },
    {
        name: 'PROVIDE FALSE APPLICATION INFORMATION',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.19.050(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.19.050'
        }]
    },
    {
        name: "DRIVER'S LICENSE - MANUFACTURE/SELL FOR OTHER PURPOSE",
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(3)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: '(DWLS I) - DRIVING WHILE LICENSE SUSPENDED',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.342(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.342'
        }]
    },
    {
        name: '(DWLS II) - DRIVING WHILE LICENSE SUSPENDED',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.342(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.342'
        }]
    },
    {
        name: 'WASHINGTON LICENSE SUSPEND/USING LICENSE OTHER JURISDICTION',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.345',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.345'
        }]
    },
    {
        name: '(IIL) - OPERATE VEHICLE WITHOUT IGNITION INTERLOCK',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.20.740',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.740'
            },
            {
                num: '46.20.410(2)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.410'
            }
        ]
    },
    {
        name: 'CIRCUMVENTING IGNITION INTERLOCK',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.750',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.750'
        }]
    },
    {
        name: 'COMMERCIAL DRIVER - NOTIFICATION REQUIREMENTS',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.25.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.25.030'
        }]
    },
    {
        name: 'EMPLOYER ALLOW ILLEGAL DRIVER TO OPERATE COMMERCIAL VEHICLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.25.040(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.25.040'
        }]
    },
    {
        name: 'COMMERCIAL LICENSE REQUIRED',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.25.050',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.25.050'
        }]
    },
    {
        name: 'CMV DRIVER ALCOHOL/THC IN SYSTEM COMMERCIAL VEHICLE DRIVER ALCOHOL/THC IN SYSTEM',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.25.110',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.25.110'
        }]
    },
    {
        name: 'FORGED PROOF OF FINANCIAL RESPONSIBILITY',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.29.620',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.29.620'
        }]
    },
    {
        name: 'ODOMETER DISCONNECT/RESET',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.37.540',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.540'
        }]
    },
    {
        name: 'SIGNAL PREEMPTION DEVICE - NO AUTHORITY',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.37.672',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.672'
        }]
    },
    {
        name: 'ALTER/FORGE/REUSE MOBILE HOME DECAL',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.44.175(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.44.175'
        }]
    },
    {
        name: 'HIT AND RUN ATTENDED VEHICLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.52.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.020'
        }]
    },
    {
        name: 'HIT AND RUN ACCIDENT/INJURY - ATTEMPT',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.52.020(4)(b)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.020'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'HIT AND RUN - DECEASED PERSON',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.52.020(4)(c)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.020'
        }]
    },
    {
        name: 'FAIL TO STOP, GIVE INFORMATION, OR AID',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.52.020(5)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.020'
        }]
    },
    {
        name: 'TOW TRUCK-OPERATE WITHOUT REGISTRATION',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.55.020(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.55.020'
        }]
    },
    {
        name: 'TOW TRUCK OPERATOR IMPOUND GRATUITY',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.55.035(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.55.035'
        }]
    },
    {
        name: 'TOW TRUCK OPERATOR IMPOUND CONTRACT',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.55.035(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.55.035'
        }]
    },
    {
        name: 'TOW TRUCK OPERATOR IMPOUND OWNERSHIP',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.55.035(1)(c)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.55.035'
        }]
    },
    {
        name: 'ABANDONING JUNK VEHICLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.55.230',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.55.230'
        }]
    },
    {
        name: 'PROPERTY OWNER IMMOBILIZE OTHER VEHICLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.55.300',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.55.300'
        }]
    },
    {
        name: 'RECKLESS ENDANGERMENT EMERGENCY ZONE WORKER',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.212(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.212'
        }]
    },
    {
        name: 'RECKLESS ENDANGERMENT OF HIGHWAY WORKER',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.527(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.527'
        }]
    },
    {
        name: 'RACING',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.530',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.530'
        }]
    },
    {
        name: 'FAIL TO SECURE LOAD I',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.655(7)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.655'
        }]
    },
    {
        name: 'THEFT OF MOTOR VEHICLE FUEL',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.740',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.740'
        }]
    },
    {
        name: 'LICENSE FEE REFUND - FALSE STATEMENT',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.68.010(5)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.68.010'
        }]
    },
    {
        name: 'VEHICLE DEALING',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.021(3)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.021'
        }]
    },
    {
        name: 'IMPROPER USE DEALER PLATES',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.140',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.140'
        }]
    },
    {
        name: 'LIMOUSINE - VEHICLE CERTIFICATE VIOLATION - 2ND OR SUBSEQUENT OFFENSE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.72A.070(3)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.72A.070'
        }]
    },
    {
        name: 'TRANSPORTING HULKS TO SCRAP WITHOUT LICENSE REMOVE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.79.020',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.79.020'
        }]
    },
    {
        name: 'HAUL HULK AUTO WITHOUT LICENCE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.79.120',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.79.120'
        }]
    },
    {
        name: 'VEHICLE WRECKER - NO LICENSE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.020(2)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.020'
        }]
    },
    {
        name: 'RECORDS TO BE KEPT',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.080',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.080'
        }]
    },
    {
        name: 'VEHICLE WRECKER OBTAIN VEHICLE NO TITLE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.110(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.110'
        }]
    },
    {
        name: 'VEHICLE WRECKER FALSIFY VEHICLE CONDITION',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.110(1)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.110'
        }]
    },
    {
        name: 'NO SIGHT- OBSCURING FENCE OR WALL',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.130',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.130'
        }]
    },
    {
        name: 'KEEP VEHICLE AT NON-DESIGNATED PLACE',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.130(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.130'
        }]
    },
    {
        name: 'OPERATE WITHOUT VALID CREDENTIALS',
        type: 'G',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.87.290(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.87.290'
        }]
    },
    {
        name: 'VEHICLE DEALER PLACE BUSINESS VIOLATION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.023',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.023'
        }]
    },
    {
        name: 'CHANGE MOTOR & POSSESS OLD TITLE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.12.590(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.590'
        }]
    },
    {
        name: 'FAIL TO TRANSFER TITLE WITHIN 45 DAYS',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.12.650(7)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.12.650'
        }]
    },
    {
        name: 'TRIP PERMIT VIOLATION - ATTEMPT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.16A.320(6)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.320'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'ALLOW UNAUTHORIZED PERSON TO DRIVE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.16A.520',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.16A.520'
        }]
    },
    {
        name: 'ILLEGALLY OBTAIN SPECIAL PLACARD/LICENSE/IDENTIFICATION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.19.050(8)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.19.050'
        }]
    },
    {
        name: 'SALE OF PLACARD/PLATE/TAB/CARD',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.19.050(9)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.19.050'
        }]
    },
    {
        name: '(NVOL I) - NO VALID OPERATOR\'S LICENSE WITHOUT IDENTIFICATION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.005',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.005'
        }]
    },
    {
        name: 'DRIVERS LICENSE - LEND TO/DISPLAY ANOTHER',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: 'DRIVERS LICENSE - DISPLAY/POSSESS FRAUDULENT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(1)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: 'DRIVERS LICENSE - FAIL TO SURRENDER SUSPENDED/REVOKED/CANCELLED',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(1)(d)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: 'DRIVERS LICENSE - FALSE APPLICATION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(1)(e)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: 'DRIVERS LICENSE - PERMIT UNLAWFUL USE OF',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(1)(f)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: "DRIVER'S LICENSE - UNDER 21 MANUFACTURE FEWER THAN 4 FORGED MISREPRESENTATION OF AGE",
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.0921(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.0921'
        }]
    },
    {
        name: '(DWLS I) - ATTEMPT DRIVING WHILE LICENSE SUSPENDED',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.20.342(1)(a)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.342'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: '(DWLS III) - DRIVING WHILE LICENSE SUSPENDED',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.20.342(1)(c)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.342'
        }]
    },
    {
        name: 'OPERATE VEHICLE WITHOUT IGNITION INTERLOCK - ATTEMPT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.20.740',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.740'
            },
            {
                num: '46.20.410(2)',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.20.410'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'FAIL TO SURRENDER SUSPENDED LICENSE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.29.610',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.29.610'
        }]
    },
    {
        name: 'FALSIFICATION OF INSURANCE IDENTIFCATION CARD',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.30.040',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.30.040'
        }]
    },
    {
        name: 'NON-OWNER ACCESS AUTO RECORD INFORMATION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.35.030',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.35.030'
        }]
    },
    {
        name: 'UNLAWFUL INSTALL OF SUNSCREENING',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.37.435',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.435'
        }]
    },
    {
        name: 'SIGNAL PREEMPTION DEVICE POSSESSION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.37.671',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.37.671'
        }]
    },
    {
        name: 'VEHICLE OPERATOR - REFUSE TO COMPLY POLICE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.020.1',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.020.1'
        }]
    },
    {
        name: 'FAILURE TO IDENTIFY SELF TO LAW OFFICER',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.021(3)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.021'
        }]
    },
    {
        name: 'FAIL TO OBEY/STOP/GIVE INFORMATION TO OFFICER',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.022',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.022'
        }]
    },
    {
        name: 'FAIL TO SECURE LOAD II',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.655(7)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.655'
        }]
    },
    {
        name: 'THEFT OF MOTOR VEHICLE FUEL - ATTEMPT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.61.740',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.740'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'REFUSE TO POST BAIL - NONRESIDENT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.64.035',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.64.035'
        }]
    },
    {
        name: 'ILLEGAL USE OF DEALER LICENSE PLATE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.090',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.090'
        }]
    },
    {
        name: 'NO DEMONSTRATE PERMIT IN POSSESSION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.090(3)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.090'
        }]
    },
    {
        name: 'NO DEALER IDENTIFICATION CARD IN POSSESSION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.090(3)(b)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.090'
        }]
    },
    {
        name: 'VEHICLE DEALER RECORD TRANSACTION VIOLATION',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.120',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.120'
        }]
    },
    {
        name: 'FAIL TO DISCLOSE WRITTEN ASK PRICE OF VEHICLE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.125',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.125'
        }]
    },
    {
        name: 'UNFAIR MOTOR VEHICLE BUSINESS PRACTICE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.180',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.180'
        }]
    },
    {
        name: 'LICENSE IMPOUND FRAUD',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.180(16)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.180'
        }]
    },
    {
        name: 'DEALER - DEPOSIT TO TRUST ACCOUNT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.70.180(9)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.70.180'
        }]
    },
    {
        name: 'LIMOUSINE - VEHICLE CERTIFICATE VIOLATION - 1ST OFFENSE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.72A.070(3)(a)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.72A.070'
        }]
    },
    {
        name: 'VEHICLE WRECKER FRAUDULENT LICENSE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.110(1)(h)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.110'
        }]
    },
    {
        name: 'VIOLATION OF WRECKING YARD REGULATIONS',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.80.170',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.80.170'
        }]
    },
    {
        name: 'OFF-ROAD VEHICLE (ORV) OPERATE WHILE UNDER THE INFLUENCE OF ALCOHOL',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.09.470(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.09.470'
        }]
    },
    {
        name: 'SNOWMOBILE ENDANGER OR UNDER INFLUENCE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.10.490(2)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.10.490'
        }]
    },
    {
        name: 'MOBILE HOME MOVE INSURANCE REQUIREMENT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.44.180(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.44.180'
        }]
    },
    {
        name: 'MOBILE HOME MOVE EVIDENCE OF INSURANCE',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.44.180(4)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.44.180'
        }]
    },
    {
        name: 'HIT AND RUN UNATTENDED VEHICLE/PROPERTY',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.52.010',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.010'
        }]
    },
    {
        name: 'HIT AND RUN ATTENDED VEHICLE - ATTEMPT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.52.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.52.020'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'FAIL TO OBEY POLICE/FLAGGGER/FIREFIGHTERS',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.015(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.015'
        }]
    },
    {
        name: 'RACING - ATTEMPT',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
                num: '46.61.530',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.530'
            },
            {
                num: '9A.28.020',
                url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=9A.28.020'
            }
        ]
    },
    {
        name: 'CHILD IN VEHICLE WITH MOTOR RUNNING',
        type: 'S',
        lfos: [fines[0]],
        tags: ['TITLE 46'],
        rcws: [{
            num: '46.61.685(1)',
            url: 'http://app.leg.wa.gov/rcw/default.aspx?cite=46.61.685'
        }]
    }
];

export default charges;



// WEBPACK FOOTER //
// ./src/lib/charges/title46.js