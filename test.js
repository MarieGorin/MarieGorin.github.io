//setTimeout(function addElement(){
document.body.onload = addElement();

function addElement(){

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("If you are interested in my profile, do not hesitate to contact me!");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("theEnd");
    document.body.insertBefore(newDiv, currentDiv);
}
//,10000);



