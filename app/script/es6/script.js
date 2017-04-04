Vue.component('hi', {
  props: ['todo'],
  template: '<li>{{ todo }}</li>'
})


let list = new Vue({
  el: '#list',
  data: {
    items: [{item: 'item1'},{item: 'item2'},{item: 'item3'}]
  }
})
