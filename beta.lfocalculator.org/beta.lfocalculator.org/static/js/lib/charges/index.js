import av from "./av";
import csFee from "./csFee";
import csFine from "./csFine";
import dna from "./dna";
import dnaAndCsFee from "./dnaAndCsFee";
import dnaAndCsFine from "./dnaAndCsFine";
import dnaAndDrugFund from "./dnaAndDrugFund";
import dnaAndDVPO from "./dnaAndDVPO";
import dnaAndTitle46 from "./dnaAndTitle46";
import dnaDrugFundAndCsFee from "./dnaDrugFundAndCsFee";
import dnaDrugFundCsFeeAndCsFine from "./dnaDrugFundCsFeeAndCsFine";
import dnaTitle46AndAv from "./dnaTitle46AndAv";
import dnaVucsaSpecial from "./dnaVucsaSpecial";
import dui from "./dui";
import dvpo from "./dvpo";
import noSpecialLFOs from "./noSpecialLFOs";
import title46 from "./title46";
import title46AndCsFine from "./title46AndCsFine";
import title46AndAv from "./title46AndAv";

let availableCharges = [].concat.apply(
    [], [
        av,
        csFee,
        csFine,
        dna,
        dnaAndCsFee,
        dnaAndCsFine,
        dnaAndDrugFund,
        dnaAndDVPO,
        dnaAndTitle46,
        dnaDrugFundAndCsFee,
        dnaDrugFundCsFeeAndCsFine,
        dnaTitle46AndAv,
        dnaVucsaSpecial,
        dui,
        dvpo,
        noSpecialLFOs,
        title46,
        title46AndCsFine,
        title46AndAv
    ]
);

export default availableCharges;



// WEBPACK FOOTER //
// ./src/lib/charges/index.js