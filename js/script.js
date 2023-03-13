/* Consegna:
- Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
- Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// Mail
const mail = document.getElementById('mail');

const emailInput = document.querySelector('input[name="email"]');
// console.log(emailInpunt);
const btnSend = document.getElementById('btnSend');
// console.log(btnSend);

// const access = [
//     "gianmarcoincocciati@gmail.com",
//     "mariorossi@gmail.com",
//     "pippolucarelli@gmail.com",
//     "lucarelliloco@gmail.com",
//     "antonioincocciati@gmail.com",
//     "alessandrodelpiero@gmail.com",
//     "booleancareers@gmail.com"
// ];

btnSend.addEventListener('click', checklist);
function checklist(event) {
    event.preventDefault();
    const address = [
        "gianmarcoincocciati@gmail.com",
        "mariorossi@gmail.com",
        "pippolucarelli@gmail.com",
        "lucarelliloco@gmail.com",
        "antonioincocciati@gmail.com",
        "alessandrodelpiero@gmail.com",
        "booleancareers@gmail.com"
    ];
    let addresses = address;
    addresses = emailInput;
    if (addresses === emailInput) {
        console.log('ciao');
    } else {
        console.log('null');
    }
}