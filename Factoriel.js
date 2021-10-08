#! node

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
