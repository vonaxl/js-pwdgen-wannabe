var nome = prompt("Inserisci il tuo NOME");
var cognome = prompt("Inserisci il tuo COGNOME");
var colPref = prompt("Il tuo colore preferito?");
var output = nome+cognome+colPref+"19";
console.log(output);
document.getElementById("cnome").innerHTML = nome;
document.getElementById("outp").innerHTML = output;
