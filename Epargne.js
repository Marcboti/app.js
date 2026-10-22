const prix = 50000
let i = 0 
let s = 0 
while (i < prix) {
    console.log(i);
    i+= 4000
    s++ 
}
console.log(`Il me faudra ${s} semaines pour acheter l'objet. Total de l'épargne : ${i} FCFA`);