//JS for changing the colors of buttons by selecting from the list

var allButtons = document.getElementsByTagName('button');
console.log(allButtons);

var copyAllButtons = ['btn-first', 'btn-second', 'btn-third', 'btn-fourth', 'btn-fifth'];
console.log(copyAllButtons);

function buttonColorChange(property) {
    if (property.value == 'blue') {
        buttonBlue();
    }
    else if (property.value == 'green') {
        buttonGreen();
    }
    else if (property.value == 'yellow') {
        buttonBlue();
    }
    else if (property.value == 'purple') {
        buttonYellow();
    }
    else if (property.value == 'red') {
        buttonRed();
    }
    else if (property.value == 'random') {
        buttonRandom();
    }
    else if (property.value == 'reset') {
        buttonReset();
    }
}

function buttonBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-first');
    }
}
function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-second');
    }
}
function buttonYellow() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-fourth');
    }
}
function buttonPurple() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-third');
    }
}
function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-fifth');
    }
}

function buttonReset(){
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom(){
    let choice = ['btn-first', 'btn-second', 'btn-third', 'btn-fourth', 'btn-fifth'];
    for (let i = 0; i < allButtons.length; i++) {
        let num = random();
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[num]);
    }
}

function random(){
    return Math.floor(Math.random() * 5);
}