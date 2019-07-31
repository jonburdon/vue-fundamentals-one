var app = new Vue({
    el: '#app',
    data: {
      message: 'Father Christmas'
    },
    // NOTE: This method will update the data but it won't access the DOM at all. That is handled by Vue
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  