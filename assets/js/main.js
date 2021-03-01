// PRIMO PASSEGGERO

// NOME PASSEGGERO 1
var nomecognomepasseggero1 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 1: " + nomecognomepasseggero1);

if (!isNaN(nomecognomepasseggero1)){
  console.log("non è una stringa");
}


// ETA PASSEGGERO 1
var etapasseggero1 = prompt("Inserire l'età del passeggero");
console.log("età passeggero 1 = " + etapasseggero1);

if (isNaN(etapasseggero1)){
  console.log("Inserire un numero");
}

// PERCORSO PASSEGGERO 1
var percorsopasseggero1 = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 1 = " + percorsopasseggero1 + "km");

if (isNaN(percorsopasseggero1)){
  console.log("Inserire un numero");
}

// PREZZO BIGLIETTO 1
var prezzobiglietto1 = (0.20 * percorsopasseggero1);

if (etapasseggero1 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto1 / 100 *80);
  prezzobiglietto1 = prezzobiglietto1 /100 *80 ;
} else if (etapasseggero1 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto1 / 100 *60);
  prezzobiglietto1 = prezzobiglietto1 /100 *60 ;
} else {
  console.log("Il prezzo totale del biglietto del passeggero 1 è : " + prezzobiglietto1);
}

//STAMPA HTML BIGLIETTO 1

document.getElementById('nomecognomepasseggero1').innerHTML = "Nome Cognome = " + nomecognomepasseggero1;

document.getElementById('etapasseggero1').innerHTML ="Età : " + etapasseggero1 + " anni.";

document.getElementById('nomecognomepasseggero1').innerHTML = "Nome Cognome = " + nomecognomepasseggero1;

document.getElementById('percorsopasseggero1').innerHTML = "Kilometri da percorrere= " + percorsopasseggero1 + "Km.";

document.getElementById('totalepasseggero1').innerHTML = "Prezzo totale del biglietto = " + prezzobiglietto1;


// SECONDO PASSEGGERO

// NOME PASSEGGERO 2
var nomecognomepasseggero2 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 2: " + nomecognomepasseggero2);

if (!isNaN(nomecognomepasseggero2)){
  console.log("non è una stringa");
}

// ETA PASSEGGERO 2
var etapasseggero2 = prompt("Inserire l'età del passeggero 2");
console.log("età passeggero 2 = " + etapasseggero2);

if (isNaN(etapasseggero2)){
  console.log("Inserire un numero");
}

// PERCORSO PASSEGGERO 2
var percorsopasseggero2 = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 2 = " + percorsopasseggero2 + "km");

if (isNaN(percorsopasseggero2)){
  console.log("Inserire un numero");
}

// PREZZO BIGLIETTO 2
var prezzobiglietto2 = (0.20 * percorsopasseggero2);

if (etapasseggero2 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto2 / 100 *80);
  prezzobiglietto2 = prezzobiglietto2 /100 *80 ;
} else if (etapasseggero2 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto2 / 100 *60);
  prezzobiglietto2 = prezzobiglietto2 /100 *60 ;
} else {
  console.log("Il prezzo totale del biglietto del passeggero 2 è : " + prezzobiglietto2);
}

// STAMPA IN HTML BIGLIETTO 2

document.getElementById('nomecognomepasseggero2').innerHTML = "Nome Cognome = " + nomecognomepasseggero2;

document.getElementById('etapasseggero2').innerHTML ="Età : " + etapasseggero2 + " anni.";

document.getElementById('nomecognomepasseggero2').innerHTML = "Nome Cognome = " + nomecognomepasseggero2;

document.getElementById('percorsopasseggero2').innerHTML = "Kilometri da percorrere= " + percorsopasseggero2 + "Km.";

document.getElementById('totalepasseggero2').innerHTML = "Prezzo totale del biglietto = " + prezzobiglietto2;


// TERZO PASSEGGERO

//NOME PASSEGGERO 3
var nomecognomepasseggero3 = prompt("inserire nome e cognome");
console.log("Nome Cognome passeggero 3: " + nomecognomepasseggero3);

if (!isNaN(nomecognomepasseggero3)){
  console.log("non è una stringa");
}

//ETA PASSEGGERO 3
var etapasseggero3 = prompt("Inserire l'età del passeggero 3");
console.log("età passeggero 3 = " + etapasseggero3);

if (isNaN(etapasseggero3)){
  console.log("Inserire un numero");
}

//PERCORSO PASSEGGERO 3
var percorsopasseggero3 = prompt("Quanti kilometri vuoi percorrere");
console.log("Lunghezza percorso passeggero 3 = " + percorsopasseggero3 + "km");

if (isNaN(percorsopasseggero3)){
  console.log("Inserire un numero");
}


//PREZZO BIGLIETTO 3
var prezzobiglietto3 = (0.20 * percorsopasseggero3);

if (etapasseggero3 < 18) {
  console.log("Sconto del 20% applicato, totale : " + prezzobiglietto3 / 100 *80);
  prezzobiglietto3 = prezzobiglietto3 /100 *80 ;
} else if (etapasseggero3 > 65) {
  console.log("Sconto del 40% applicato, totale : " + prezzobiglietto3 / 100 *60);
  prezzobiglietto3 = prezzobiglietto3 /100 *60 ;
} else {
  console.log("Il prezzo totale del biglietto del passeggero 3 è : " + prezzobiglietto3);
}

//STAMPA IN HTML BIGLIETTO 3
document.getElementById('nomecognomepasseggero3').innerHTML = "Nome Cognome = " + nomecognomepasseggero3;

document.getElementById('etapasseggero3').innerHTML ="Età : " + etapasseggero3 + " anni.";

document.getElementById('nomecognomepasseggero3').innerHTML = "Nome Cognome = " + nomecognomepasseggero3;

document.getElementById('percorsopasseggero3').innerHTML = "Kilometri da percorrere= " + percorsopasseggero3 + "Km.";

document.getElementById('totalepasseggero3').innerHTML = "Prezzo totale del biglietto = " + prezzobiglietto3;

//PREZZO TOTALE BIGLIETTI
var prezzototaledeibiglietti = (prezzobiglietto1 + prezzobiglietto2 + prezzobiglietto3);
console.log(prezzototaledeibiglietti);

//STAMPA IN HTML PREZZO TOTALE DEI BIGLIETTI
document.getElementById('totale-biglietti').innerHTML = "Totale da pagare = " + prezzototaledeibiglietti;
