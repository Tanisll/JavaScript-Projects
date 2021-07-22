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