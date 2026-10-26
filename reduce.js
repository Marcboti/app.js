const nombres = [1, 2, 3, 4];
const total= nombres.reduce ((caa,n) =>caa + n, 0) / nombres.length;
console.log(total);