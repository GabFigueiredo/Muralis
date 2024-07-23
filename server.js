const app = require('./index.js')
const getRoute = require('./routes/GetDespesas.js')
const postRoute = require('./routes/PostDespesas.js')
const bodyParser = require('body-parser')

const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(getRoute)
app.use(postRoute)

// Abertura do servidor
try {
  app.listen(PORT, () => {
    console.log("Servidor está aberto")
  })
} catch (error) {
  console.log("Não foi possível abrir o servidor", error)
}
