'use strict';

(function () {

  Vue.component('todo', {
    props: ['todo'],
    template: '<li class="todo list-item">' + '<span class="todo-text">{{todo}}</span>' + '<button class="remove btn">X</button>' + '</li>'
  });

  var app = new Vue({
    el: '.app',

    data: {
      todos: [],
      todo: ''
    },

    methods: {
      addTodo: function addTodo() {
        if (!this.todo) return;
        this.todos.push(this.todo);
      },

      removeTodo: function removeTodo(e) {
        if (e.target.classList.contains('remove')) {
          e.target.parentNode.remove();
        }
      }
    }
  });
})();
