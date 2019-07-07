var numeri = [];
var numeroUtente;

for (var i = 0; i < 6; i++) {
  numeroUtente = parseInt(prompt("Inserisci un numero"));

  if (numeroUtente % 2 != 0) {
    numeri.push(numeroUtente);
  }
}

console.log(numeri);
