var X=24

function local_variable(){
    var Y=20
    document.write(Y)
}

function get_date(){
    if (new Date().getHours() <18){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function clock(){
    if (new Date().getHours() <5){
        document.getElementById("time").innerHTML="Go to bed!";
    }
}

function bed_time(){
    bed=document.getElementById("bed").value;
    if (bed>=2200 || bed<=700){ //or i could have used "bed > 2200 == bed < 700" 
        answer="You're staying up WAY too late! Go to bed!";
    }
    else {
        answer="You can stay up a little bit later";
    }
    document.getElementById("answer").innerHTML=answer;
}

function money_check(){
    var money=document.getElementById("amount").value;
    var your_money;
    if (money<=100){
        your_money="You're broke! Stop spending or get a job!";
    }
    else if (money>100 == money<2000){
        your_money="You still have some but don't go crazy.";
    }
    else {
        your_money="You have enough money in reserve. Go ahead and spend a little";
    }
    document.getElementById("advice").innerHTML=your_money;
}

function concat(){
    var A="I don't know ";
    var B="why you'd ever ";
    var C="want to ";
    var D="do this!";
    var in_full=A.concat(B,C,D);
    document.getElementById("full").innerHTML=in_full;
}