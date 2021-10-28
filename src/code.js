const buttonInput = document.getElementById("button-input");
buttonInput.addEventListener("click", buttonClick);

function buttonClick() {
    let inputTask = document.getElementById("input-task");
    const taskInput = inputTask.value;

    if (taskInput ==  0) {
        const contenedor = document.getElementById("los");

        const sabes = document.getElementById("p")

        const fragmento = document.createDocumentFragment();

        let createDiv = document.createElement("p");

        let a = document.createAttribute("id");

        a.value = "ps"

        sabes.setAttribute(a);

        let att = document.createAttribute("class");

        att.value = "div-clas";

        inputTask.setAttributeNode(att);
      
        let attz = document.createAttribute("class");

        attz.value = "clas";

        sabes.setAttributeNode(attz);

        fragmento.appendChild(sabes);

        contenedor.appendChild(fragmento);

        sabes.innerText = "Porfavor agrega texto tonto"

    }else {
        porque();

        let cl = document.createAttribute("class");

        cl.value = "input-task";

        inputTask.setAttributeNode(cl);

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
    }

    function porque() {
        let contener = document.getElementById("los");

        let parrafo = document.getElementById("ps");
        if (contener.childNodes.length = 1) {
            contener.removeChild(parrafo);
        }else if (contener.childNodes.length = 0) {
            console.log("g")
        }
    }
};