import React, {
    Component
} from 'react';
import _ from 'lodash';
import {
    formatNum
} from '../../lib/helpers';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import ScreeningAlert from './ScreeningAlert';
import Colloquy from './Colloquy';
import PCRInfo from './PCRInfo';
import IndigencyInfo from './IndigencyInfo';
import doc from '../../assets/financial-status-declaration.docx';
import './ScreeningPage.css';

const styles = {
    textField: {
        width: 130,
        marginRight: 20
    },
    checkbox: {
        width: '100%'
    },
    checkboxBold: {
        fontWeight: 'bold'
    },
    link: {
        color: '#1FBCD3',
        textDecoration: 'none'
    }
};

class ScreeningPage extends Component {
    constructor(props) {
        super(props);

        const initialState = {
            open: false,
            annualIncome: '',
            monthlyIncome: '',
            householdSize: 1,
            totalCurrDebt: '',
            currDebtPayment: 50,
            currDebtRepayYrs: ''
        };

        const state = sessionStorage.getItem('financialInfo') ?
            JSON.parse(sessionStorage.getItem('financialInfo')) :
            initialState;

        this.state = state;
    }

    trackLinkClick = (authority, description) => {
        window.woopra.track('screening_page_link', {
            link_description: description,
            authority_num: authority
        });
    };

    handleOpen = () => {
        window.woopra.track('help_link', {
            link_name: 'lfo_colloquy'
        });
        this.setState({
            open: true
        });
    };

    handleClose = () => this.setState({
        open: false
    });

    handleDeclaration = () => {
        window.woopra.track('download_link', {
            link_name: 'declaration_of_financial_status'
        });
    };

    updateAffordLFOs = () => {
        const affordLFOs = !this.props.affordLFOs;
        window.woopra.track('defendant_afford_lfos', {
            afford_lfos: affordLFOs
        });
        this.props.updateState({
            affordLFOs
        });
    };

    saveFinancialInfo = state => {
        this.setState(state, () => {
            const financialInfo = _.omit(this.state, ['open']);
            sessionStorage.setItem('financialInfo', JSON.stringify(financialInfo));
        });
    };

    updateAnnualIncome = (event, value) => {
        const state = { ...this.state
        };
        state.annualIncome = value;
        state.monthlyIncome = formatNum(value / 12);
        this.saveFinancialInfo(state);
    };

    updateMonthlyIncome = (event, value) => {
        const state = { ...this.state
        };
        state.monthlyIncome = value;
        state.annualIncome = formatNum(value * 12);
        console.log(state);
        this.saveFinancialInfo(state);
    };

    updateHouseholdSize = (event, value) =>
        this.setState({
            householdSize: value
        }, this.saveFinancialInfo(this.state));

    updateCurrDebt = (event, value) => {
        const state = { ...this.state
        };
        state.totalCurrDebt = value;
        state.currDebtRepayYrs = formatNum(value / state.currDebtPayment / 12);
        this.saveFinancialInfo(state);
    };

    updateCurrDebtPayment = (event, value) => {
        const state = { ...this.state
        };
        state.currDebtPayment = value;
        state.currDebtRepayYrs = formatNum(state.totalCurrDebt / value / 12);
        this.saveFinancialInfo(state);
    };

    updateStatedPayment = (event, value) =>
        this.props.updateState({
            statedPayment: value
        });

    calculatePovertyLevel = () => {
        const {
            householdSize
        } = this.state;

        const $minAnnualIncome = 15950;
        const $householdSize = householdSize - 1;
        const $annualIncomeDiff = 5600;
        const povertyLevel = $minAnnualIncome + $householdSize * $annualIncomeDiff;
        return povertyLevel;
    };

    handleIncomeBlur = e => {
        const {
            householdSize,
            monthlyIncome,
            annualIncome
        } = this.state;

        window.woopra.track('defendant_income', {
            annual_income: annualIncome,
            monthly_income: monthlyIncome,
            household_size: householdSize
        });
    };

    handleDebtBlur = e => {
        const {
            totalCurrDebt,
            currDebtPayment,
            currDebtRepayYrs
        } = this.state;

        window.woopra.track('defendant_debt', {
            total_debt: totalCurrDebt,
            monthly_payment: currDebtPayment,
            years_to_pay: currDebtRepayYrs
        });
    };

    handleStatedPaymentBlur = e => {
        const {
            statedPayment
        } = this.props;

        window.woopra.track('defendant_ability_to_pay', {
            ability_to_pay: statedPayment,
            component: 'screening page'
        });
    };

    renderAlert = () => {
        const {
            householdSize
        } = this.state;
        const annualIncome =
            this.state.annualIncome === '' ? undefined : this.state.annualIncome;
        const monthlyIncome =
            this.state.monthlyIncome === '' ? undefined : this.state.monthlyIncome;
        const {
            indigent,
            mentalIllness
        } = this.props;
        const povertyLevel = this.calculatePovertyLevel();
        const monthlyPovertyLevel = Math.round((povertyLevel * -1) / 12) * -1;
        const belowPovertyLevel = povertyLevel >= annualIncome || monthlyPovertyLevel >= monthlyIncome;

        if (indigent || mentalIllness || belowPovertyLevel) {
            return ( <
                ScreeningAlert povertyLevel = {
                    povertyLevel
                }
                householdSize = {
                    householdSize
                }
                monthlyIncome = {
                    monthlyIncome
                }
                indigent = {
                    indigent
                }
                mentalIllness = {
                    mentalIllness
                }
                belowPovertyLevel = {
                    belowPovertyLevel
                }
                trackLinkClick = {
                    this.trackLinkClick
                }
                />
            );
        }
    };

    render() {
        const {
            indigent,
            mentalIllness,
            court,
            affordLFOs,
            statedPayment,
            updateMentalIllness,
            updateIndigent,
            charges,
            pcr
        } = this.props;
        const {
            annualIncome,
            monthlyIncome,
            householdSize,
            totalCurrDebt,
            currDebtPayment,
            currDebtRepayYrs
        } = this.state;

        if (!charges.length) {
            return ( <
                div >
                <
                h3 className = "tab-header" > Determining Ability to Pay < /h3> <
                div className = "no-charges-message" >
                <
                p > No Charges Have Been Selected. < /p> <
                p > Please Return to Step 1 to Add Charges < /p> <
                /div> <
                /div>
            );
        }

        return ( <
            div id = "screening-page" >
            <
            h3 className = "tab-header" > Determining Ability to Pay < /h3> <
            div >
            <
            FlatButton label = "Where do I start?"
            primary = {
                true
            }
            fullWidth = {
                true
            }
            onClick = {
                this.handleOpen
            }
            /> <
            FlatButton label = "Download Declaration of Financial Status"
            primary = {
                true
            }
            fullWidth = {
                true
            }
            href = {
                doc
            }
            onClick = {
                this.handleDeclaration
            }
            /> <
            Colloquy open = {
                this.state.open
            }
            handleClose = {
                this.handleClose
            }
            linkStyle = {
                styles.link
            }
            trackLinkClick = {
                this.trackLinkClick
            }
            /> <
            form id = "screening-form" > {!pcr && ( <
                    Checkbox label = "Defendant is NOT indigent."
                    labelPosition = "right"
                    checked = {
                        affordLFOs
                    }
                    disabled = {
                        mentalIllness || indigent
                    }
                    onCheck = {
                        this.updateAffordLFOs
                    }
                    style = {
                        styles.checkboxBold
                    }
                    />
                )
            } <
            PCRInfo court = {
                court
            }
            pcr = {
                pcr
            }
            linkStyle = {
                styles.link
            }
            trackLinkClick = {
                this.trackLinkClick
            }
            /> {
                court === 'superior' && ( <
                    div className = "mentalCondition-wrap" >
                    <
                    p className = {
                        affordLFOs || indigent ? 'disabled' : null
                    } >
                    Does the defendant suffer from a & nbsp; <
                    span className = "tooltip" > mental health condition & nbsp; <
                    span className = "tooltiptext" >
                    A defendant suffers from a mental health condition when the defendant has been diagnosed with a mental disorder that prevents the defendant from participating in gainful employment, as evidenced by a determination of mental disability as the basis
                    for the defendants enrollment in a public assistance program, a record of involuntary hospitalization, or by competent expert evaluation.RCW 9.94 A .777(2). <
                    /span> <
                    /span>
                    and also not have the ability to pay any LFOs ?
                    <
                    /p> <
                    Checkbox labelPosition = "right"
                    checked = {
                        mentalIllness
                    }
                    disabled = {
                        affordLFOs || indigent
                    }
                    onCheck = {
                        updateMentalIllness
                    }
                    style = {
                        styles.checkbox
                    }
                    className = "mentalCondition-input" /
                    >
                    <
                    /div>
                )
            } <
            div className = {
                mentalIllness || affordLFOs ? 'disabled' : null
            } >
            <
            Checkbox labelPosition = "right"
            checked = {
                indigent
            }
            disabled = {
                mentalIllness || affordLFOs
            }
            onCheck = {
                updateIndigent
            }
            style = {
                styles.checkbox
            }
            className = "indigent-input" /
            >
            <
            IndigencyInfo pcr = {
                pcr
            }
            linkStyle = {
                styles.link
            }
            trackLinkClick = {
                this.trackLinkClick
            }
            court = {
                court
            }
            />

            <
            /div> <
            div className = {
                mentalIllness || affordLFOs || indigent ? 'disabled' : null
            } >
            <
            p >
            Defendants Household Income(used to determine poverty level) <
            /p> <
            div className = "screening-input" >
            <
            span className = "currency-label" > $ < /span> <
            TextField onChange = {
                this.updateAnnualIncome
            }
            onBlur = {
                this.handleIncomeBlur
            }
            disabled = {
                mentalIllness || affordLFOs || indigent
            }
            value = {
                annualIncome
            }
            name = "annualIncome"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelText = "Annually"
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            div className = "screening-input" >
            <
            span className = "currency-label" > $ < /span> <
            TextField onChange = {
                this.updateMonthlyIncome
            }
            onBlur = {
                this.handleIncomeBlur
            }
            disabled = {
                mentalIllness || affordLFOs || indigent
            }
            value = {
                monthlyIncome
            }
            name = "monthlyIncome"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelText = "Monthly"
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            div className = "screening-input" >
            <
            TextField onChange = {
                this.updateHouseholdSize
            }
            onBlur = {
                this.handleIncomeBlur
            }
            disabled = {
                mentalIllness || affordLFOs || indigent
            }
            value = {
                householdSize
            }
            name = "householdSize"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelText = "Household Size"
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            p > Estimated Total Current Debt Before Sentencing < /p> <
            div className = "screening-input" >
            <
            span className = "currency-label" > $ < /span> <
            TextField onChange = {
                this.updateCurrDebt
            }
            onBlur = {
                this.handleDebtBlur
            }
            disabled = {
                mentalIllness || affordLFOs || indigent
            }
            value = {
                totalCurrDebt
            }
            name = "totalCurrDebt"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelText = "Total Debt"
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            div className = "screening-input" >
            <
            span className = "currency-label" > $ < /span> <
            TextField onChange = {
                this.updateCurrDebtPayment
            }
            onBlur = {
                this.handleDebtBlur
            }
            disabled = {
                mentalIllness || affordLFOs || indigent
            }
            value = {
                currDebtPayment
            }
            name = "currDebtPayment"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelText = "Monthly Payment"
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            div className = "screening-input" >
            <
            TextField disabled = {
                mentalIllness || affordLFOs || indigent
            }
            value = {
                currDebtRepayYrs
            }
            name = "currDebtRepayYrs"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelText = "Yrs of Repayment"
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            /div> <
            div className = {
                mentalIllness ? 'disabled' : null
            } >
            <
            p > What can the defendant pay per month ? < /p> <
            div className = "screening-input" >
            <
            span className = "currency-label" > $ < /span> <
            TextField onChange = {
                this.updateStatedPayment
            }
            onBlur = {
                this.handleStatedPaymentBlur
            }
            disabled = {
                mentalIllness
            }
            value = {
                statedPayment
            }
            name = "statedPayment"
            type = "number"
            style = {
                styles.textField
            }
            floatingLabelFixed = {
                true
            }
            /> <
            /div> <
            /div> <
            /form> {
                this.renderAlert()
            } <
            /div> <
            /div>
        );
    }
}

export default ScreeningPage;



// WEBPACK FOOTER //
// ./src/components/ScreeningPage/ScreeningPage.js