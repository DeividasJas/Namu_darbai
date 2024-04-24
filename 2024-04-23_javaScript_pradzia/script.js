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

function ziemojantysPauksciai(val1, val2, val3) {
  const birdsArray = [val1, val2, val3];
  birdsArray.sort((a, b) => b - a);
  console.log(birdsArray);

  birdsArray.forEach((item) => {
    console.log(item);
  });
  console.log(
    `Skirtumas tarp didziausio ir maziausio kiekio: ${
      birdsArray[0] - birdsArray[2]
    } `
  );
}
ziemojantysPauksciai(1000, 50, 350);

// ---------------------------------------------------------------

function jonukoProblema(uzdVariantas, a, b) {
  if (uzdVariantas == 1) {
    console.log((x = a * b + 3));
  }
  if (uzdVariantas == 2) {
    console.log((x = a + b));
  }
  if (uzdVariantas == 3) {
    console.log((x = a - b));
  }
}

jonukoProblema(2, 2, 3);
// ---------------------------------------------------------------------

const skaiciai = (a, b, c) => {
  // a1 = a % 3;
  // b1 = b % 3
  // c1 = c % 3
  // const answers = [a1,b1,c1]
  // console.log(...answers);
  // const gooodValue = answers.find( (item) => item == 0 )
  // console.log(`Atsakymas: ${gooodValue}`);
  if (a % 3 === 0) {
    return console.log(`Atsakymas: ${a}`);
  }
  if (b % 3 === 0) {
    return console.log(`Atsakymas: ${b}`);
  }
  if (c % 3 === 0) {
    return console.log(`Atsakymas: ${c}`);
  } else {
    console.log("ats nera");
  }
};
skaiciai(8, 9, 12);
// ---------------------------------------------------------------------------------
// console.log("TRECIA TRECIA TRECIA TRECIA TRECIA TRECIA TRECIA TRECIA");

// const konkursas = (a, b) => {
//   const intervalas = [];
//   let sum = 0;

//   for (let = a; a <= b; a++) {
//     if (a % 6 == 0) {
//       sum++;
//     }
//   }
//   console.log(`Reikalingas marskineliu skaicius: ${sum}`);
// };
// konkursas(31, 62);
// ----------------------------------------------------------------------------------------

const keliasImokykla = (zingsniai) => {
  let num = [];
  let suploja = 0;
  let spragsi = 0;
  // 0 ir 5

  for (let i = 1; i <= zingsniai; i++) {
    num.push(i.toString());
  }
  num.forEach((item) => {
    if (item[item.length - 1] == 0) {
      suploja++;
    }
  });
  num.forEach((item) => {
    if (item[item.length - 1] == 5) {
      spragsi++;
    }
  });

  console.log(`Suplojimu bus: ${suploja}. Spragtelejimu bus: ${spragsi}`);
};

keliasImokykla(426);
// ***************************************************************************
// pirma - kiek iskrito snaigiu pirma, kiekLaiko - kiek s snigo. dvigubinasi kiekviena sekunde
const snaigesUzLango = (pirma, kiekLaiko) => {
  let ats = 0 + pirma;

  for (let i = 1; i < kiekLaiko; i++) {
    pirma = pirma * 2;
    ats += pirma;
  }
  console.log(`po ${kiekLaiko} sekundziu, ${ats} snaigiu uz lango`);
};
snaigesUzLango(2, 4);
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888

const kaledinesEglutes = (n, el) => {
  let bendrasAukstis = 0;

  for (let i = 0; i < n; i++) {
    bendrasAukstis += el[i];
  }
  // console.log(bendrasAukstis)
  let vidurkis = bendrasAukstis / 6;
  console.log(`Eglutes aukscio vidurkiai: ${vidurkis} cm`);
};

const kaledinesEgl = [167, 134, 145, 156, 155, 176];
kaledinesEglutes(6, kaledinesEgl);
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const drauguSkaiciai = (numArr) => {
  let kiekis = 0;
  numArr.forEach((number) => {
    if (number % 2 == 0) {
      kiekis++;
    }
  });

  if (kiekis > 0) {
    console.log(`Turime: ${kiekis} lyginiu numerius`);
  } else {
    console.log("Nera");
  }
};
const drauguSkaic = [5, 3, 99, 55, 35, 47, 11, 63, 51, 91];
drauguSkaiciai(drauguSkaic);
// ##########################################################################################

const kauliukai = (kauliukuSkaicius) => {
  let maxPoints = kauliukuSkaicius * 6;

  let diceValues = [6, 6, 2, 2, 5, 4, 5];
  let sumOfValues = diceValues.reduce((a, c) => a + c, 0);
  let loterija = "";

  if (maxPoints / 2 < sumOfValues) {
    loterija += "laimeta";
  } else {
    loterija += "pralaimeta";
  }

  console.log(`Is viso galima surinkti tasku: ${maxPoints}
Tomas is viso surinko ${sumOfValues}
Jo tasku vidurkis ${(sumOfValues / kauliukuSkaicius).toFixed(1)}
Loterija ${loterija}.`);
};
kauliukai(7);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const suoliaiPerVirvute = (kiekKartu, bandymai) => {
  let total = 0;
  for (let i = 0; i < kiekKartu; i++) {
    total += bandymai[i];
  }
  console.log(`Is viso: ${total}. Vidutiniskai ${total / kiekKartu}`);
};
let bandymai = [10, 20];
suoliaiPerVirvute(2, bandymai);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const begimovarzybos = (begikuArr) => {
  let n = begikuArr.length;
  let average = begikuArr.reduce((a, c) => a + c, 0) / n;
  let bestTime = Math.min(...begikuArr);
  let fasterBy = (average - bestTime).toFixed(2);
  let fasterByNum = parseFloat(fasterBy);

  console.log(
    `Greiciausias begiko laikas: ${bestTime} sek. Jis buvo: ${fasterByNum} sek geresnis uz vidurki. vidurkis: ${average.toFixed(
      2
    )}`
  );
  console.log(bestTime, average, fasterByNum);
};

const begikuArr = [22, 20, 25, 25];
begimovarzybos(begikuArr);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const pirkiniai = (pirkiniaiArr) => {
  let totalWeight = 0;
  let totalPrice = 0;
  let galeNegales = "";
  pirkiniaiArr.forEach((pirknys) => {
    totalWeight += pirknys.svoris;
    totalPrice += pirknys.kaina;
  });
  let avgPrice = totalPrice / pirkiniaiArr.length;
  let litas = Math.floor(avgPrice / 100);
  let centas = avgPrice % 100;
  if (totalWeight <= 5000) {
    galeNegales = "gales";
  } else {
    galeNegales = "negales";
  }

  console.log(
    `Pirkinio vidutine kaina: ${litas}Lt ${centas}ct. Petriukas ${galeNegales} parnesti pirkinius`
  );
};
const pirkiniaiArr = [
  { kaina: 105, svoris: 2000 },
  { kaina: 1655, svoris: 2550 },
];

pirkiniai(pirkiniaiArr);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
console.log(
  "KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS KETVIRTAS "
);

const voveryte = (riesutai, voveres) => {
  let ziemaTrunka = 92;
  let perDienaVisiSuvalgo = (voveres + 1) * 3;

  let turimiRiesutai = riesutai;
  let riesutuDienos = 0;
  // let kiekDienuUzteks = turimiRiesutai / perDienaVisiSuvalgo
  // let arUzteksZiemai = ""
  // if(kiekDienuUzteks>ziemaTrunka){
  //   arUzteksZiemai = "uzteks"
  // }
  // console.log(`riesutu sukaupta ${kiekDienuUzteks} dienoms. Riesutu ${arUzteksZiemai} visai ziemai`);

  do {
    turimiRiesutai -= perDienaVisiSuvalgo;
    riesutuDienos += 1;
  } while (turimiRiesutai > 0);

  console.log(riesutuDienos, ziemaTrunka);
};

voveryte(900, 2);

// ------------------------------------------------------------

const degalai = (talpa, sunaudoja) => {
  // console.log(sunaudaLitru);

  let diena = 0;

  let degaluTalpa = talpa;
  // console.log(degaluTalpa);

  while (degaluTalpa > 0) {
    let sunaudaLitru = sunaudoja;

    if (diena % 2 == 0) {
      sunaudaLitru = sunaudaLitru * 2;
    }

    degaluTalpa -= sunaudaLitru;
    diena = diena + 1;
  }
  console.log(`Keliauti bus galima ${diena} dienu / as / a`);
};
degalai(20, 5);
// +=+++++++++++==========+++++++++++++++++++++++++++++++++++++====================

const saldainiai = (n, arr) => {
  let turimiSaldainiai = n

  let kiekSuvalgeArr = arr
  console.log(kiekSuvalgeArr[0]);
  console.log(turimiSaldainiai);

  while (turimiSaldainiai > 0){

    for(let i=0 ;i <kiekSuvalgeArr.length; i++){
      
      if(turimiSaldainiai- kiekSuvalgeArr[i] < 0){
       
        break
      } else {
        turimiSaldainiai -= kiekSuvalgeArr[i]

      }


      
    }
  }

  console.log('labas');
}

const saldainiuArr = [7,7,8,5]
saldainiai(25, saldainiuArr)



