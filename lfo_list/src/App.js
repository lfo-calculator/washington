import './App.css';
import lfos from "./lfos";

function LFO_TABLE() {


    var tables = lfos.map(function(lfo, i) {

      var header = Object.keys(lfo).map(function(key) {
        var id_th = i + "_" + key;
        return (
            <th key={id_th}>{ key }</th>
        )
      });
      
      var row = Object.keys(lfo).map(function(key) {
        var id_td = i + "_" + key + "_val";
        var val = JSON.stringify(lfo[key]);
        // console.log(val);
        return (
            <td key={id_td}>{ val } </td>
        )
      });

      console.log(header);
      console.log(row);
      
      return (
        <table>
        <tbody>
          <tr>
            { header }
          </tr>
          <tr>
            { row }
          </tr>
      
        </tbody>
        </table>
      );

    });

    return (
      <div id="LFO_tables">
        { tables }   
      </div>
    );

  }

function App() {
    // console.log(lfos);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            LFO List
          </p>
        </header>

              
            < LFO_TABLE />

      </div>
    );
  }
export default App;
