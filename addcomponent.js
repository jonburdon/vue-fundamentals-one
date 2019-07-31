Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })
  
// Note there is no link between the parent data and the child component.

  var app = new Vue({
    el: '#app'
  })