(() => {
  "use strict";

  const addButton = document.querySelector('.add');
  const removeButton = document.querySelector('.remove');
  const input = document.querySelector('.add-todo');
  const todoTemplate = document.querySelector('.todo-template')
  const appList = document.querySelector('.app');
  const app = {};


  app.getInputValue = function getValue(){
    var val = input.value

    if(!val) return;

    app.addTodo(val);
  }

  app.addTodo = function addTodo(val){
    var todoClone = todoTemplate.cloneNode(true);

    todoClone.classList.remove('todo-template')
    todoClone.querySelector('.todo-text').textContent = val;

    appList.appendChild(todoClone);
  }


  addButton.addEventListener('click', app.getInputValue);


  appList.addEventListener('click', (e) => {
    var target = e.target;

    if(target.classList.contains('remove')){
      target.parentNode.remove();
    }
  })
})();
