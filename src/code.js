const buttonInput = document.getElementById("button-input");
buttonInput.addEventListener("click", buttonClick);

function buttonClick() {
    let inputTask = document.getElementById("input-task");
    const taskInput = inputTask.value;

    const contenedor = document.getElementById("div-section");

    const fragmento = document.createDocumentFragment();
    const fragmento2 = document.createDocumentFragment();

    let createDiv = document.createElement("div");

    let att = document.createAttribute("class");

    att.value = "div-class";

    createDiv.setAttributeNode(att);

    let createButton = document.createElement("button");

    createButton.innerText = "Eliminar"

    createButton.addEventListener("click", (evento)=>{
        evento.target.parentNode.remove();
    });

    createDiv.innerHTML = `<p> ${taskInput} </p>`;

    fragmento.appendChild(createDiv);

    fragmento2.appendChild(createButton);
    
    contenedor.appendChild(fragmento);

    createDiv.appendChild(fragmento2);
};