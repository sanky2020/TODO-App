var inputText = document.getElementById("input-text");
var mainList = document.getElementById("list-container");
var formData = document.getElementById("form-data");

//to add following elements;
/* 
<div class="todo-item">
<p class="todo-text">Buy Mangoes</p>
<input type="text" value="Buy Mangoes">
<div class="icon-wrapper">
    <i class="far fa-check-square" id="tick"></i>
    <i class="fas fa-pen" id="edit"></i>
    <i class="fas fa-trash-alt" id="del"></i>
    <i class="fas fa-save"></i>
</div>
</div> 
*/

function addItems(text){
    var addDiv = document.createElement("div");
    addDiv.classList.add("todo-item");
    mainList.appendChild(addDiv); 

    var addPara = document.createElement("p");
    addPara.classList.add("todo-text");
    addPara.innerText = text;
    addDiv.appendChild(addPara);

    var inputbox = document.createElement("input");
    inputbox.type = "text";
    inputbox.value = text;
    inputbox.id = "input-text2";
    addDiv.appendChild(inputbox);
    inputbox.style.display="none";

    var anotherDiv = document.createElement("div");
    anotherDiv.classList.add("icon-wrapper");
    addDiv.appendChild(anotherDiv);

    var addIcon1 = document.createElement("i");
    addIcon1.className= "far fa-check-square";
    addIcon1.id= "tick";
    anotherDiv.appendChild(addIcon1);

    var addIcon2 = document.createElement("i");
    addIcon2.className= "fas fa-pen";
    addIcon2.id = "edit";
    anotherDiv.appendChild(addIcon2);

    var addIcon3 = document.createElement("i");
    addIcon3.className= "fas fa-trash-alt";
    addIcon3.id= "del";
    anotherDiv.appendChild(addIcon3);

    var addIcon4 = document.createElement("i");
    addIcon4.className= "fas fa-save";
    addIcon4.id= "save";
    anotherDiv.appendChild(addIcon4);
    addIcon4.style.display="none";
    addIcon4.onclick = function(){
        addPara.style.display="block";
        addPara.innerText = inputbox.value;
        inputbox.style.display = "none";
        addIcon4.style.display="none";
        addIcon1.style.display="flex";
        addIcon2.style.display="flex";
        addIcon3.style.display="flex";
        addPara.style.textDecoration = "none";
    }
    
    addIcon3.addEventListener("click", function(){
        addDiv.remove();
    })
    addIcon1.onclick = function(){
        addPara.style.textDecoration = "line-through";
    }
    addIcon2.onclick = function(){
        addPara.style.display="none";
        inputbox.style.display="block";
        addIcon4.style.display="flex";
        addIcon1.style.display="none";
        addIcon2.style.display="none";
        addIcon3.style.display="none";
    }   
}

formData.addEventListener("submit", function(obj){
    obj.preventDefault();
    addItems(inputText.value);
    inputText.value = "";
});
