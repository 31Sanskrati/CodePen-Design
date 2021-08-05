//prompt("HAHA")

function AgeInDays() {
    //input year
    var year = prompt("Which year you were born in...");
    //calculate days
    var age = (2021 - year) * 365;
    //create a h1 element with id AgeInDays
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'AgeInDays');
    //create a text 
    var text = document.createTextNode(age + ' Days');
    //add the text in h1
    h1.appendChild(text);
    
    document.getElementById('print').appendChild(h1);
}

function reset() {
    //remove the id AgeInDays
    document.getElementById('AgeInDays').remove();
}