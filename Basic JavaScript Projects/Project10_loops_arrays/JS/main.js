function count(){
    var Digit=""
    var X=1;
    while(X<11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML=Digit;
}

function str_Length(){
    var A="how many characters are in this sentence?";
    document.getElementById("length").innerHTML=A.length;
}

function forloop(){
    var instruments = ["Guitar", "Drums", "Piano","Bass", "Violin","Trumpet","Flute"];
    var content="";
    var Y;
    for (Y=0;Y<instruments.length;Y++){
        content += instruments[Y]+"<br>";
    }
    document.getElementById("list").innerHTML=content;
}

function cat(){
    var catpic=[];
    catpic[0]="sleeping";
    catpic[1]="playing";
    catpic[2]="eating";
    catpic[3]="purring";
    document.getElementById("cat").innerHTML="In this picture, the cat is "+catpic[2]+".";
}

function music(){
    const musinst={type:"guitar",brand:"Fender",color:"black"};
    musinst.color="blue";
    musinst.price="$900";
    document.getElementById("constant").innerHTML="The cost of the " + musinst.type+" was "+musinst.price+".";
}
var X = "This is a global variable."
function global(){
    document.getElementById("global").innerHTML=X
}

{
    let X="This is a block scope variable";
    document.getElementById("block").innerHTML=X
}

function return_func() {
    return Math.PI;
  }
    document.getElementById("return").innerHTML=return_func();

let car={
    make:"Dodge ",
    model:"Ram 1500.",
    year:"2005 ",
    color:"Silver and Black ",
    description: function(){
        return "My favorite vehicle I've ever owned was a "+this.year+this.color+this.make+this.model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();

function break_func() {
    var text = "";
    var x;
    for (x = 0; x < 10; x++) {
      if (x === 5) {
        break;
      }
      text += "The number is " + x + "<br>";
    }
    document.getElementById("break").innerHTML = text;
  }

  function cont_func() {
    var text = "";
    var y;
    for (y = 0; y < 5; y++) {
      if (y === 3) {
        continue;
      }
      text += "The number is " + y + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
  }