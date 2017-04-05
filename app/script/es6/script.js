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
      todos: ['1', '2', '3', '4', '5', '6', '7']
    }
  })

})();
