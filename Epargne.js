const prix = 50000 // prix de l'objet que je veux acheter
let i = 0 // mon epargne par semaine
let s = 0 // nombre de semaines
while (i < prix) {
    console.log(`J'ai épargné ${i} FCFA cette semaine.`);
    i += 4000 // j'épargne 4000 FCFA par semaine
    s++ // j'incrémente le nombre de semaines
}
console.log(`Il me faudra ${s} semaines pour acheter l'objet. Total de l'épargne : ${i} FCFA`);