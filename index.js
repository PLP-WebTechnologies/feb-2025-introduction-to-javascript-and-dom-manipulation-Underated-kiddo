function changeText(){
    document.getElementById("dynamicBox").innerText ="Yooooow this is the new text my guy";
}

function changeStyle(){
const box = 
document.getElementById("dynamicBox");
box.style.backgroundColor="Peru";
box.style.color = "cyan";
box.style.fontWeight = "bold"
}

let isCyan = true;
window.onload = function() {
    document.body.style.backgroundColor = "cyan";
    document.body.style.color = "black";

};

function changeColor() {
    if (isCyan) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "cyan";
        document.body.style.color = "black";

    }
    isCyan = !isCyan; // this flips the state
}

    
