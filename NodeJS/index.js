const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World 2')
})

app.get('/mensagens', function (request, response) {
    response.send('Exibir todas as mensagens. 2')
})
 
app.listen(3000)
