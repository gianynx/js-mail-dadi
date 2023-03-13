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
const btnCanc = document.getElementById('btnCanc');
// console.log(btnCanc);

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
    let invited = false;
    let message_1 = 'Valid email address!';
    const signIn = document.getElementById('signIn');
    signIn.innerHTML = `${message_1}`;
    let message_2 = 'Not available!';
    const notAvailable = document.getElementById('notAvailable');
    notAvailable.innerHTML = `${message_2}`;
    for (let a = 0; a < addresses.length; a++) {
        if (addresses[a] === emailInput.value) {
            invited = true;
        }
    }
    if (invited === true) {
        signIn.classList.remove("d-none");
        notAvailable.classList.add("d-none");
    } else {
        signIn.classList.add("d-none");
        notAvailable.classList.remove("d-none");
    }
}

btnCanc.addEventListener('click', function(event) {
    event.preventDefault();
    emailInput.value = '';
    let invited = '';
    signIn.classList.add("d-none");
    notAvailable.classList.add("d-none");
});