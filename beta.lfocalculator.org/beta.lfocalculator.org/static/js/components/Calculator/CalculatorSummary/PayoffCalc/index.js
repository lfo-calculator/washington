import React, {
    Component
} from 'react';
import CljPayoffCalc from './CljPayoffCalc';
import SuperiorPayoffCalc from './SuperiorPayoffCalc';

class PayoffCalc extends Component {
    render() {
        const {
            court
        } = this.props;

        if (court === 'clj') {
            return <CljPayoffCalc { ...this.props
            }
            />;
        } else {
            return <SuperiorPayoffCalc { ...this.props
            }
            />;
        }
    }
}

export default PayoffCalc;



// WEBPACK FOOTER //
// ./src/components/Calculator/CalculatorSummary/PayoffCalc/index.js