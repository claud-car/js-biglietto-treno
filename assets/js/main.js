var nomecognomepasseggero1 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 1: " + nomecognomepasseggero1);

var etapasseggero1 = prompt("Inserire l'età del passeggero");
console.log("età passeggero 1 = " + etapasseggero1);

var percorsopasseggero1 = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 1 = " + percorsopasseggero1 + "km");

var prezzobiglietto1 = (0.20 * percorsopasseggero1);

if (etapasseggero1 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto1 / 100 *80);
} else if (etapasseggero1 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto1 / 100 *60);
} else {
  console.log("Il prezzo totale del biglietto del passeggero 1 è : " + prezzobiglietto1);
}

document.getElementById('nomecognomepasseggero1').innerHTML = "Nome Cognome = " + nomecognomepasseggero1;

document.getElementById('etapasseggero1').innerHTML ="Età : " + etapasseggero1 + " anni.";

document.getElementById('nomecognomepasseggero1').innerHTML = "Nome Cognome = " + nomecognomepasseggero1;

document.getElementById('percorsopasseggero1').innerHTML = "Kilometri da percorrere= " + percorsopasseggero1 + "Km.";

document.getElementById('totalepasseggero1').innerHTML = "Prezzo totale del biglietto = " + prezzobiglietto1;


// SECONDO PASSEGGERO

var nomecognomepasseggero2 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 2: " + nomecognomepasseggero2);

var etapasseggero2 = prompt("Inserire l'età del passeggero 2");
console.log("età passeggero 2 = " + etapasseggero2);

var percorsopasseggero2 = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 2 = " + percorsopasseggero2 + "km");

var prezzobiglietto2 = (0.20 * percorsopasseggero2);

if (etapasseggero2 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto2 / 100 *80);
} else if (etapasseggero2 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto2 / 100 *60);
} else {
  console.log("Il prezzo totale del biglietto del passeggero 2 è : " + prezzobiglietto2);
}

document.getElementById('nomecognomepasseggero2').innerHTML = "Nome Cognome = " + nomecognomepasseggero2;

document.getElementById('etapasseggero2').innerHTML ="Età : " + etapasseggero2 + " anni.";

document.getElementById('nomecognomepasseggero2').innerHTML = "Nome Cognome = " + nomecognomepasseggero2;

document.getElementById('percorsopasseggero2').innerHTML = "Kilometri da percorrere= " + percorsopasseggero2 + "Km.";

document.getElementById('totalepasseggero2').innerHTML = "Prezzo totale del biglietto = " + prezzobiglietto2;


// TERZO PASSEGGERO

var nomecognomepasseggero3 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 3: " + nomecognomepasseggero3);

var etapasseggero3 = prompt("Inserire l'età del passeggero 3");
console.log("età passeggero 3 = " + etapasseggero3);

var percorsopasseggero3 = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 3 = " + percorsopasseggero3 + "km");

var prezzobiglietto3 = (0.20 * percorsopasseggero3);

if (etapasseggero3 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto3 / 100 *80);
} else if (etapasseggero3 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto3 / 100 *60);
} else {
  console.log("Il prezzo totale del biglietto del passeggero 3 è : " + prezzobiglietto3);
}

document.getElementById('nomecognomepasseggero3').innerHTML = "Nome Cognome = " + nomecognomepasseggero3;

document.getElementById('etapasseggero3').innerHTML ="Età : " + etapasseggero3 + " anni.";

document.getElementById('nomecognomepasseggero3').innerHTML = "Nome Cognome = " + nomecognomepasseggero3;

document.getElementById('percorsopasseggero3').innerHTML = "Kilometri da percorrere= " + percorsopasseggero3 + "Km.";

document.getElementById('totalepasseggero3').innerHTML = "Prezzo totale del biglietto = " + prezzobiglietto3;



var prezzototaledeibiglietti = (prezzobiglietto1 + prezzobiglietto2 + prezzobiglietto3);
console.log(prezzototaledeibiglietti);

document.getElementById('totale-biglietti').innerHTML = "Totale da pagare = " + prezzobiglietto1 + prezzobiglietto2 + prezzobiglietto3;


// // RISPONDO SALUTANDO L'UTENTE
// document.getElementById('nome').innerHTML = "Ciao " + nome + " , piacere di conoscerti.";
