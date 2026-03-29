
function addTodo (){
    const input = document.getElementById("input");
    const list = document.getElementById("list");
  if (input.value === "") return
  let  li = document.createElement("li");
  li.textContent = input.value;
  li.innerHTML  = <span>${input.value}</span>
 <button class ="delete-btn"</button>
  list.appendChild("li");
  input.value = "";
} 