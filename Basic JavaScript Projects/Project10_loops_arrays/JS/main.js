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