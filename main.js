
function addTodo (){
    const input = document.getElementById("input");
    const list = document.getElementById("list");
  if (event) event.preventDefault();
  if (input.value === "") return
  let  li = document.createElement("li");
  li.textContent = input.value;
  
  let button = document.createElement("button");
  button.textContent = "Delete"
  button.onclick = function(){
    li.remove();
  }
  li.appendChild(button)
  list.appendChild(li);
  input.value = "";
} 