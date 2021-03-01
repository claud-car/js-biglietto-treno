var nomecognomepasseggero1 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 1: " + nomecognomepasseggero1);

var etapasseggero1 = prompt("Inserire l'età del passeggero");
console.log("età passeggero 1 = " + etapasseggero1);

var percorso = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 1 = " + percorso + "km");

var prezzobiglietto = (0.21 * percorso);

if (etapasseggero1 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto / 100 *80);
} else if (etapasseggero1 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto / 100 *60);
} else {
  console.log("Il prezzo totale del biglietto del passeggero 1 è : " + prezzobiglietto);
}

// SECONDO PASSEGGERO

var nomecognomepasseggero2 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 2: " + nomecognomepasseggero2);

var etapasseggero2 = prompt("Inserire l'età del passeggero 2");
console.log("età passeggero 2 = " + etapasseggero2);

var percorso = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 2 = " + percorso + "km");

var prezzobiglietto = (0.21 * percorso);

if (etapasseggero2 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto / 100 *80);
} else if (etapasseggero2 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto / 100 *60);
} else {
  console.log("Il prezzo totale del biglietto del passeggero 2 è : " + prezzobiglietto);
}

// TERZO PASSEGGERO

var nomecognomepasseggero3 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 3: " + nomecognomepasseggero3);

var etapasseggero3 = prompt("Inserire l'età del passeggero 3");
console.log("età passeggero 3 = " + etapasseggero3);

var percorso = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 3 = " + percorso + "km");

var prezzobiglietto = (0.21 * percorso);

if (etapasseggero3 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto / 100 *80);
} else if (etapasseggero3 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto / 100 *60);
} else {
  console.log("Il prezzo totale del biglietto del passeggero 3 è : " + prezzobiglietto);
}
