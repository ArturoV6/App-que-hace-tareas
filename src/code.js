const buttonInput = document.getElementById("button-input");
buttonInput.addEventListener("click", buttonClick);

function buttonClick() {
    let inputTask = document.getElementById("input-task");
    const taskInput = inputTask.value;

    if (taskInput ==  0) {
        
        const contenedorH = document.getElementById("div-header");

        if (contenedorH.children.length === 0) {
            const fragmento = document.createDocumentFragment();

            let createDivH = document.createElement("div");

            let createId = document.createAttribute("id");

            createId.value = "div-child"

            createDivH.setAttributeNode(createId);

            fragmento.appendChild(createDivH);

            contenedorH.appendChild(fragmento);

            createDivH.innerHTML="<p id=divChildNode> agrega texto </p>";
        }else{}
        
    }else {
        const contenedorH = document.getElementById("div-header");

        if (contenedorH.children.length === 1) {
            const divP = document.getElementById("div-child");

            contenedorH.removeChild(divP);
        }else{
            const contenedor = document.getElementById("div-section");

            const fragmento = document.createDocumentFragment();
            const fragmento2 = document.createDocumentFragment();

            let createDiv = document.createElement("div");

            let createClass = document.createAttribute("class");

            createClass.value = "div-class";

            createDiv.setAttributeNode(createClass);

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
 
            
    }
};