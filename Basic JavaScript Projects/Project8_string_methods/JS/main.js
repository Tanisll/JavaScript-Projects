function slice_Method(){
    var Sentence="All work and no play makes Johnny... something...";
    var Section=Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

function UPPERCASE(){
    var str="Johnny";
    var res=str.toUpperCase();
    document.getElementById("UpperCase").innerHTML=res
}

function search(){
    var A = "This is how we clean our room"
    document.getElementById("search").innerHTML=A.search("clean");
}

function string_Method(){
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

function precision_Method(){
    var X=12938.3216549874561;
    document.getElementById("Precision").innerHTML=X.toPrecision(6);
}

function fixed_Method(){
    var X=12938.3216549874561;
    document.getElementById("Fixed").innerHTML=X.toFixed(1);
}

function value_Method(){
    var X=12938.3216549874561;
    document.getElementById("value").innerHTML=X.valueOf();
}