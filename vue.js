var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!'
  }
})
