import React from 'react';
import lfos from '../lfos.json';
import appliesParser from './parser';

export class LFOLookup extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            applicableLFOs: []
        });

        this.find_applicable_lfos = this.find_applicable_lfos.bind(this);
    }

    find_applicable_lfos () {

        let matches = [];
        let citation = document.querySelector("#citation").value;
        
        for (let lfo of lfos) {
          try {
            console.log(appliesParser);
            let applies = appliesParser.parse(lfo.applies);
            if (applies(citation))
              matches.push(lfo);
          } catch (e) {
            console.error("Could not parse applies field for", lfo.name, lfo.applies);
          }
        }

        this.setState({
            applicableLFOs: matches
        });
    }

    render() {
        return (
            <div>
                <p>
                    Enter Charge: <input type="text" id="citation" />
                </p>
                <p>
                <input type="submit" value="Go" id="go" onClick={this.find_applicable_lfos} />
                </p>
                <div>
                    {this.state.applicableLFOs.map((lfo, i) => <p key={i}>{lfo.name}</p>)}
                </div>
            </div>
        );
    }
}
          