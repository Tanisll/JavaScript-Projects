document.write(typeof "Pizza");

document.write(typeof 382163);

document.write("10"+5)

function nan(){
    document.getElementById("nan").innerHTML=0/0
}

function tru(){
    document.getElementById("tru").innerHTML=isNaN('Test');
}

function fals(){
    document.getElementById("fals").innerHTML=isNaN(123);
}

function inf(){
    document.write(2E310)
}

function neginf(){
    document.write(-3E310)
}

document.write(10>2);
document.write(10<2);

console.log(5+10);
console.log(5>10);

document.write(10==9)
document.write(10==10)

var A = 10;
    B = 10;
    C = 6;
    D = "ten";
    E = "ten";
    F = "six";

document.write(A===B)
document.write(D===C)
document.write(A===E)
document.write(E===F)

document.write(10>4 && 4>2)
document.write(10<4 && 4>2)
document.write(10>4 || 4>2)
document.write(10<4 || 4<2)

function not_t(){
    document.getElementById("not_t").innerHTML=!(10<4);
}

function not_f(){
    document.getElementById("not_f").innerHTML=!(10>4);
}