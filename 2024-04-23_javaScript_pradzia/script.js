// let pirm= +(prompt("kiek pirmadieni pamoku?"))
// let antrad= +(prompt("kiek anttradieni pamoku?"))
// let treciad= +(prompt("kiek treciadieni pamoku?"))
// let ketvirtad = +(prompt("kiek ketvirtadieni pamoku?"))
// let penktad = +(prompt("kiek penkatdieni pamoku?"))
// let isViso = pirm+antrad+treciad+ketvirtad+penktad
// console.log(`${isViso} Tai sudaro ${isViso *45} minuciu`);

// ----------------------------------------------------------

let zuvuSkaicius = 5;
let zuvuAdd = 3;
let kiekKartuPridejo = 3;

console.log(
  `Po ${kiekKartuPridejo} dienu akvariume buvo net ${
    zuvuSkaicius + zuvuAdd * kiekKartuPridejo
  }`
);

// ----------------------------------------------------------------------

let centas = 0.01;
let penkiCentai = centas * 5;
let dvidesimtCent = centas * 20;
let duLitai = centas * 200;
console.log(`Taupykleje yra ${penkiCentai * 5 + duLitai * 3} Lt`);

// -----------------------------------------------------------------------

let autoSpeed = 60;
console.log(
  `Automobilis tuneli pravaziuos per ${parseFloat(264 / autoSpeed).toFixed(2)}s`
);
// -----------------------------------------------------------------------

let ausktis = 300;
let ilgis = 400;
let plytosAukstis = 10;
let plytosIlgis = 20;
let kaina = 0.5;

console.log(
  `Plytu kiekis: ${
    (ausktis * ilgis) / (plytosAukstis * plytosIlgis)
  }. O jos kainuos: ${
    ((ausktis * ilgis) / (plytosAukstis * plytosIlgis)) * kaina
  } Lt`
);

// ----------------------------------------------------------------------------
const trapecijosIlgis = 5;
const trapecijosTrumpIlgis = 3;
const trapecijoAukstis = 4;

console.log(
  ` Trapecijos plotas: ${((trapecijosIlgis + trapecijosTrumpIlgis) / 2) * 4}`
);
// ------------------------------------------------------------------------------

const puodeliuskaicius = 7;
const dezutesTalpa = 3;
console.log(`Pilnu dezuciu skaicius ${Math.floor(
  puodeliuskaicius / dezutesTalpa
)},
Nesupakuotu puodeliu skaicius: ${puodeliuskaicius % dezutesTalpa}`);

// ---------------------------------------------------------------------

const autoSkaicius = 27;
const keltoTalpa = 10;
console.log(`Perkels per kartu: ${Math.floor(autoSkaicius / keltoTalpa)}
Liks neperkelta: ${autoSkaicius % keltoTalpa}`);

// -----------------------------------------------------------------------

const tautvydasSausain = 20;
const svveciuSausain = tautvydasSausain * 4;
const dalyviu = 24;
const totalSausain = tautvydasSausain + svveciuSausain;
console.log(`Kiekvienas sventes dalyvis gavo po ${Math.floor(
  totalSausain / dalyviu
)}
Tautvydas papildomai atiteko ${totalSausain % dalyviu} sausainiai`);

// -------------------------------------------------------------------

const gaunaSaldainiu = 15;
const suvalgoSaldainiu = 4;
const dienosikiKaledu = 22;

const isVisoSaldainiuIkiKaledu =
  gaunaSaldainiu * dienosikiKaledu - suvalgoSaldainiu * dienosikiKaledu;
const dovanosSaldainiu = suvalgoSaldainiu;

console.log(
  `Marius davonas paruos ${Math.floor(
    isVisoSaldainiuIkiKaledu / dovanosSaldainiu
  )} draugu
    Supakavus dovanas liks ${
      isVisoSaldainiuIkiKaledu % dovanosSaldainiu
    } saldainiai`
);
// 22222 ----------------------------------------------------------

function parasiutininkas(aukstis, parasiutas) {
  if (Math.sqrt((2 * aukstis) / 9.8) > parasiutas) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// -----------------------------------------------------------------------

function varliuStebejimas(varlesSvorisGramais, varliuKiekis) {
  if (varlesSvorisGramais * varliuKiekis > 5000) {
    console.log("Varliu stebejimui pakanka");
  } else {
    console.log("varliu stebejimui per mazai");
  }
}
varliuStebejimas(100, 1000);
varliuStebejimas(75, 50);
// -------------------------------------------------------------------------

function matematika(paz1, paz2, paz3, paz4, paz5) {
  const pazSum = paz1 + paz2 + paz3 + paz4 + paz5;
  if (pazSum / 5 > 9) {
    console.log("Gauti tris saldainius");
  } else if (pazSum / 5 <= 9 && pazSum / 5 >= 7) {
    console.log("Petriukas gaus du saldainius");
  } else {
    console.log("Gaus viena saldaini");
  }
}
matematika(8, 9, 6, 5, 10);
matematika(10, 10, 8, 9, 10);
matematika(5, 5, 4, 5, 5);

// ---------------------------------------------------------------------------------

function bandeles(k, a, b, n1, n2, n3) {
  if (k <= a) {
    console.log(`Uz bandeles bus sumoketa: ${(n1 * k).toFixed(2)} Lt`);
  } else if (k <= b) {
    console.log(`Uz bandeles bus suoketa ${(n2 * k).toFixed(2)} Lt `);
  } else if (a < b) {
    console.log(`Uz bandeles bus sumoketa ${k} lt`);
  }
}
// bandeles(1.30, 1.50,0,3)
bandeles(1.6, 1.5, 1.7, 3, 2, 1);
bandeles(2.05, 1.5, 1.7, 3, 2, 1);
// --------------------------------------------------------------------------

function geriausiaKlase(vidurk1, vidurk2, vidurk3, vidurk4) {
  const geriausiasVidurkis = Math.max(vidurk1, vidurk2, vidurk3, vidurk4);
  const klases = [vidurk1, vidurk2, vidurk3, vidurk4];
  const geriausiosKlasesIndex = klases.indexOf(geriausiasVidurkis);

  console.log(geriausiosKlasesIndex);

  const skirtumas = [];

  for (let i = 0; i < klases.length; i++) {
    if (i != geriausiosKlasesIndex) {
      skirtumas.push(geriausiasVidurkis - klases[i]);
    }
  }
  console.log(skirtumas);
  console.log(`Didziausias vidurkis: ${geriausiasVidurkis}
    Kitu klasiu vidurkiai skiriasi: ${skirtumas[0]}, ${skirtumas[1]}, ${skirtumas[2]}`);
}
geriausiaKlase(7, 8, 9.5, 6);
// -----------------------------------------

function ziemojantysPauksciai(val1,val2,val3){
    const birdsArray = [val1,val2,val3]
    birdsArray.sort((a, b) => b - a);
    console.log(birdsArray);

    birdsArray.forEach(item => {
        console.log(item)
    })    
    console.log(`Skirtumas tarp didziausio ir maziausio kiekio: ${birdsArray[0] - birdsArray[2]} `);
}
ziemojantysPauksciai(1000, 50,350)