import React from 'react';
import lfos from '../lfos.json';
import charges from '../charges.json';
import appliesParser from './parser';
import { LFOOptions } from './LFOOptions';

export class LFOLookup extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            applicableLFOs: [],
            lfoOptions: {},
            lfoSelectedOptions: {},
            currentCitation: ""
        });

        this.findApplicableLFOs = this.findApplicableLFOs.bind(this);
        this.selectLFOoption = this.selectLFOoption.bind(this);
        this.enterCitation = this.enterCitation.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    selectLFOoption(name, val) {
        let opts = this.state.lfoSelectedOptions;
        opts[name] = val;
        this.setState({
            lfoSelectedOptions : opts
        });
        this.findApplicableLFOs();
    }

    handleSelect(event) {
        let selected_charge = charges[event.target.value];
        this.setState({
            lfoOptions : selected_charge.context,
            currentCitation : selected_charge.num
        });
        this.findApplicableLFOs();
    };
    
    enterCitation() {
        this.setState({
            lfoOptions : {},
            lfoSelectedOptions : {},
            currentCitation: document.querySelector("#citation").value
        });
        this.findApplicableLFOs(document.querySelector("#citation").value);
    }

    findApplicableLFOs () {

        let citation = this.state.currentCitation;
        console.log(this.state.lfoSelectedOptions);
        let matches = [];

        for (let lfo of lfos) {
            try {
                let applies = appliesParser.parse(lfo.applies);
                let bareCitation = appliesParser.parse(citation, { startRule : "BareCitation"});
                let isMatch = applies(bareCitation, this.state.lfoSelectedOptions);
    
                console.log(lfo.name, "(" + lfo.applies + ") applies to ", citation, "?");
                console.log('with the options');
                console.log(this.state.lfoSelectedOptions);
                console.log(isMatch, appliesParser);
    
                if (isMatch)
                  matches.push(lfo);
            }
            catch (e) {
                console.error("Could not parse applies field for", lfo.name, lfo.applies, e);
            }
        }

        this.setState({
            applicableLFOs: matches
        });
    }

    render() {

        return (
            <div>
                <label>Select Charge: 
                <select onChange={this.handleSelect}>
                    {
                        charges.map((charge, i) =>
                            <option context={charge.context} value={i} key={`chargeoption_${i}`} >{charge.name}</option>
                        )
                    }
                </select>
                <LFOOptions citation={this.state.currentCitation} selectLFOoption={this.selectLFOoption} lfoOptions={this.state.lfoOptions} />

                </label>
                <div>
                    {this.state.applicableLFOs.map((lfo, i) => <p key={`applicableLFO_${i}`}>{lfo.name}</p>)}
                </div>
            </div>
        );
    }
}

