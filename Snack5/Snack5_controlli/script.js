var numeri = [];
var numeroUtente;

var controllo = /[a-zA-Z]+$/;



if (controlloInserimento == null && numeroUtente != "") {
  for (var i = 0; i < 6; i++) {
    numeroUtente = parseInt(prompt("Inserisci un numero"));
    var controlloInserimento = numeroUtente.match(controllo);
    
    if (numeroUtente % 2 != 0) {
      numeri.push(numeroUtente);
    }
  }
} else {
  alert("Verifica di aver inserito i dati correttamente");
}

console.log(numeri);
