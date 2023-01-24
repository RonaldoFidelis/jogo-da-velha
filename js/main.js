let container = document.querySelector(".container");
let display = ["","","","","","","","",""];
let options = ["X", "O"];

for (i in display){
    let btn = document.createElement("button")
    btn.classList.add("button-display");
    btn.innerHTML = `${"X"}`;
    container.appendChild(btn);
    console.log(display[i]);
}