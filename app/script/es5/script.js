'use strict';

(function () {
  "use strict";

  var addButton = document.querySelector('.add');
  var removeButton = document.querySelector('.remove');
  var input = document.querySelector('.add-todo');
  var todoTemplate = document.querySelector('.todo-template');
  var appList = document.querySelector('.app');
  var app = {};

  app.getInputValue = function getValue() {
    var val = input.value;

    if (!val) return;

    app.addTodo(val);
  };

  app.addTodo = function addTodo(val) {
    var todoClone = todoTemplate.cloneNode(true);

    todoClone.classList.remove('todo-template');
    todoClone.querySelector('.todo-text').textContent = val;

    appList.insertBefore(todoClone, input.parentNode);
  };

  addButton.addEventListener('click', app.getInputValue);

  appList.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('remove')) {
      target.parentNode.remove();
    }
  });
})();