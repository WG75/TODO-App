(() => {

  Vue.component('todo', {
     props: ['todo'],
     template: '<li class="todo list-item">' +
                 '<span class="todo-text">{{todo}}</span>' +
                 '<button class="remove btn">X</button>' +
               '</li>'
   })

  const app = new Vue({
    el: '.app',
    data: {
      todos: [],
      todo: ''
    },

    methods: {
      addTodo: function() {
        console.log(this.todos)
      }
    }
  })

})();
