const client = require('../model/postgres.js')

const ListarDespesas = async (req, res) => {
  console.log('Rota get foi acessada')
  client.connect()
  const queryPorDespesas = await client.query("SELECT * FROM despesas")
  const data = queryPorDespesas.rows
  client.end()
  console.log(queryPorDespesas)
  res.status(200).json({ data })
}

module.exports = ListarDespesas
