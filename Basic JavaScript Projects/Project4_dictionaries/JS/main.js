function family(){
    var Tainson = {
        Age:8,
        Gender:"Male",
        Hair_Color:"Brown",
        Height:"4-foot 6-inches",
        Favorite_Food:"Pizza",
    };
    delete Tainson.Height;
    document.getElementById("dictionary").innerHTML=Tainson.Height
}