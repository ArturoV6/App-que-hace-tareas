const buttonInput = document.getElementById("button-input");
buttonInput.addEventListener("click", buttonClick);

function buttonClick() {
    let inputTask = document.getElementById("input-task");
    const taskInput = inputTask.value;

    let inputTime = document.getElementById("input-time");
    const timeInput = inputTime.value;

    const contenedor = document.getElementById("div-section");

    const fragmento = document.createDocumentFragment();

    let createP = document.createElement("p");

    createP.innerHTML = taskInput + " " + timeInput;

    fragmento.appendChild(createP);

    contenedor.appendChild(fragmento);
};