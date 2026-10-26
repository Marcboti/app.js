function factorielle(n) {
   let resultat = 1 ;
   for (let i = 2 ; i <= n ; i++) {
       resultat *= i;
   }
   return resultat;
}
const notes= [2, 1, 7, 4, 8];
const resultat = notes.map(factorielle);
console.log (resultat);