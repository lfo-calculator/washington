import React from 'react';

export class LFOOptions extends React.Component {
    constructor(props) {
        super(props);

        this.checkBooleanOption = this.checkBooleanOption.bind(this);
        this.selectRadioOption = this.selectRadioOption.bind(this);
    }

    checkBooleanOption(event) {
        this.props.selectLFOoption(event.target.value, event.target.checked)
    }

    selectRadioOption(event) {
        this.props.selectLFOoption(event.target.name, event.target.value) 
    }
   
    render() {
        let opts = this.props.lfoOptions;

        let bools = [];
        let multis = [];

        if (opts) {
            for (let i in Object.keys(opts)) {
                let key = Object.keys(opts)[i]; 
                let opt = opts[key];
                if (opt == "boolean") {
                    bools.push({
                        'name' : key,
                    });
                }
                else if (opt.indexOf("|") != -1) {
                    multis.push({
                        'name' : key,
                        'vals' : opt.split("|")
                    })
                }
            }
        }

        let bool_opts = bools.map((val, i) => {
            return (
                <div>
                    <input type="checkbox" value={val.name} id={`${val.name}_${i}`} onChange={this.checkBooleanOption}/>
                    <label for={`${val.name}_${i}`}>{val.name}</label>
                </div>
            )
        });

        let multi_opts = multis.map((option, i) => {
            let radios = option.vals.map((val, j) => 
                <div>
                    <input type="radio" name={option.name} id={`${option.name}_${j}`} key={`${option.name}_${j}`} value={val} onChange={this.selectRadioOption} />
                    <label for={`${option.name}_${j}`}>{val}</label>
                </div> 
            );
            return (
                <div>
                    <p>{option.name}:</p>
                    {radios}
                </div>
            )
        });

        console.log(bool_opts);

        return (
            <div>
                { bool_opts }
                { multi_opts }
            </div>
        );
    }
}

