function add(){
    var addition = 2 + 2;
    document.getElementById("plus").innerHTML= "2 + 2 = "+ addition;
}

function minus(){
    var subtraction = 4 - 2;
    document.getElementById("take-away").innerHTML= "4 - 2 = "+ subtraction;
}

function times(){
    var multiply = 5 * 2;
    document.getElementById("times").innerHTML= "5 * 2 = "+ multiply;
}

function divide(){
    var divide = 9 / 3;
    document.getElementById("divide").innerHTML= "9 / 3 = "+ divide;
}

function all_together(){
    var all_together = (1+2)*10/2-5;
    document.getElementById("all_together").innerHTML= "(1 + 2) * 10 / 2 - 5 = "+ all_together;
}

function remainder(){
    var remainder = 25%6;
    document.getElementById("remainder").innerHTML= "25 divided 6 has a remainder of "+ remainder;
}

function random(){
    document.getElementById("random").innerHTML = Math.random() * 10;
}

function moreminus(){
    var moreminus = 10;
    moreminus--;
    document.getElementById("moreminus").innerHTML= moreminus;
}

function moreadd(){
    var moreadd=10;
    moreadd++;
    document.getElementById("moreadd").innerHTML=moreadd;
}