function ride_function(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height<52)? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride."
}

function age_finder(){
    var age, can_vote; 
    age = document.getElementById("age").value;
    can_vote = (age<18)? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote."
}

function car(Make,Model,Year,Color){
    this.car_make=Make;
    this.car_model=Model;
    this.car_year=Year;
    this.car_color=Color;
}

var Jack=new car("Dodge","Viper",2020,"Red");
var Emily=new car("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new car("Ford","Pinto",1971,"Mustard");

function MF(){
    document.getElementById("car").innerHTML="Erik dreives a " + Erik.car_color + "-colored "+Erik.car_model+" manufactured in "+Erik.car_year;
}

function Addition(){
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function Plus_One(){starting_point +=1;}
            Plus_One();
            return starting_point;
    }
}