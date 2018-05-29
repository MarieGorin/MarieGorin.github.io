
setTimeout(function addElement(){
    var newDiv = document.createElement("div");
    newDiv.classList.add("alert");
    newDiv.classList.add("alert-secondary");
    var newContent = document.createTextNode("If you are interested in my profile, do not hesitate to contact me!");
    newDiv.appendChild(newContent);
    document.getElementById("div1").appendChild(newDiv);
    console.log('it worked!');
}, 7000);





