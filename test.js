
setTimeout(function addElement(){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("If you are interested in my profile, do not hesitate to contact me!");
    newDiv.appendChild(newContent);
    document.getElementById("div1").appendChild(newDiv);
    console.log('it worked!');
}, 7000);





