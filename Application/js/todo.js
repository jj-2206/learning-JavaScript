const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

// input 입력값을 배열로 만들기
const toDos = [];

// localStorage에 저장, 3:00
function saveToDos() {
  localStorage.setItem('todos', toDos);
}

// target 이벤트 특정하기 -> 부모 요소 찾기
function deleteToDo(event) {
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  // Array.prototype.push()
  toDos.push(newTodo);
  // console.log(toDos);
  paintToDo(newTodo);
}
toDoForm.addEventListener('submit', handleTodoSubmit);