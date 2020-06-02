const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDos(text) {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function delToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintToDos(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delbtn.innerHTML = "❌";
  delbtn.addEventListener("click", delToDos);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delbtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDosObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDosObj);
  saveToDos(toDos);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentToDos = toDoInput.value;
  paintToDos(currentToDos);
  toDoInput.value = "";
}

function something(toDo) {
  console.log(toDo.text);
}

function loadtoDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const paredToDos = JSON.parse(loadedToDos);
    paredToDos.forEach(something);
  }
}

function init() {
  loadtoDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
