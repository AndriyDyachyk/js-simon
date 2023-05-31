console.log('principi.js loaded');

document.getElementById('2').style.visibility='hidden';

// generazione sequenza di 5 numeri randomici
let simonsArray = []

for (let i = 0; simonsArray.length<5; i++) {
    simonsArray.push(Math.floor(Math.random() * 9));
    document.getElementById('simon_sais').innerText = simonsArray.join(' ');
}

console.log(simonsArray)
// pulizia del numero su schermo in 5 sec
const timeout = setTimeout(timeLimit, 5000);

function timeLimit() {
    document.getElementById('1').style.visibility='hidden';
    setTimeout(userTurn, 50);
}

// richiesta all'utente di ripetere la sequenza di numeri + verifica che sia stato inserito un numero
let userArray = []
let remove = userArray.pop()
let score = 0;

function userTurn() {
    while (userArray.length<5) {
        let userNumber = parseInt(prompt('Riscrivivi i numeri che ti ricordi, uno alla volta'));
        console.log(userNumber)
        if (isNaN(userNumber)){
            remove
        } else{
            userArray.push(userNumber)
            console.log(userArray)
            document.getElementById('user_sais').innerText = userArray.join(' ');
            scoreCounter(userNumber, userArray, simonsArray,score)
        }
    }
    document.getElementById('1').style.visibility='visible';
    document.getElementById('2').style.visibility='visible';
}


// NOTA BENE! NON RIESCO A FAR SI CHE SCORE++ FUNZIONI, MI ENTRA SEMPRE NELLA FUNZIONE E NELL'IF... MA DA SEMPRE CONSOLE.LOG(SCORE) = 1
//rappresentazione del punteggio
function scoreCounter (userNumber, userArray, simonsArray,score){
    console.log(userArray)
    if(simonsArray.includes(userNumber)){
        score ++;
        console.log(score)
        document.getElementById('score').innerText = score
    }
}
