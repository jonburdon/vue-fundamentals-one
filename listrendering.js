var app = new Vue({
    el: '#app',
    data: {
      todos: [
        { text: 'This is an object called data' },
        { text: 'It contains name value pairs as normal' },
        { text: 'The v-on directive can be used to add it to <li> elements in the dom' }
      ]
    }
  });
  
// Change the array itself, and the new item in the array will be displayed in the DOM usinf the v-for directive.

  app.todos.push({ text: 'Add to the data, and the v-for directive will update the dom element.' })