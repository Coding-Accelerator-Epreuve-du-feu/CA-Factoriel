#! node
/* Script qui permet de calculer la factoriel d'un nombre */

if (isNaN(process.argv[2]) || process.argv[2] < 2) {
  console.log("Veuillez indiquer au script, un nombre supérieur à 2 en argument");
  process.argv[2] = 1;
}
let fact = process.argv[2];

function factor(fact) {
  if(fact === 1) {
    return fact;
  } else {
    var result = factor(fact - 1) * fact;
    return result;
  }
}

console.log(factor(fact));
