var input = document.getElementById('input');
var addButton = document.getElementById('add');
var list = document.getElementById('list');
addButton.onclick = CreateList;
function CreateList(){
  var li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
}