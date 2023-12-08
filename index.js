
let names = new Array();
function savetxt() {
    let name = document.querySelector('.input').value;
    names.push(name);
    console.log(names);
    console.log("button clicked!");
}