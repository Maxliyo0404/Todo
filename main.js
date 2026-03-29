
function addTodo (){
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const list = document.getElementById("list");
  if (input.value === "") return
  let  item = document.createElement("item");
  item.textContent = input.value;
} 