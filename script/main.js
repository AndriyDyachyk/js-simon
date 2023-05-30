console.log('principi.js loaded');


let simonsArray = []

for (let i = 0; simonsArray.length<5; i++) {
    simonsArray.push(Math.floor(Math.random() * 9));
    console.log(simonsArray)
    document.getElementById('simon_sais').innerText = simonsArray.join(' ');
}

