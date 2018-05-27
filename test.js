
setTimeout(function addElement(){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("If you are interested in my profile, do not hesitate to contact me!");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    console.log('it worked!');
}, 5000);





