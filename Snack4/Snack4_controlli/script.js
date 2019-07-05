// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var nomi, nomeUtente, controllo;

var elemento = document.getElementById('mio_id');

nomi = ["Mario", "Luigi", "Francesco", "Giuseppe", "Franco", "Maria", "Francesca"];

nomeUtente = prompt("Inserisci il tuo nome");

for (var i = 0; i < nomi.length; i++) {
  if (nomeUtente === nomi[i]) {
    controllo = 1;
  }
}


if (controllo == 1) {
  elemento.innerHTML = nomeUtente + " il tuo nome è presente nella lista, puoi partecipare alla festa.";
} else {
  elemento.innerHTML = nomeUtente + " il tuo nome NON è presente nella lista, NON puoi partecipare alla festa.";
}
