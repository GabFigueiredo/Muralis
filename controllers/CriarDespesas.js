
const client = require('../model/postgres.js')

const CriarDespesas = async (req, res) => {
  const body = req.body
  try {
    await client.connect()
    const query = `
      INSERT INTO despesas (id, valor, data_compra, descricao, tipo_pagamento_id, categoria_id)
      VALUES ($1, $2, CURRENT_DATE, $3, $4, $5)
    `
    const values = [body.id, body.valor, body.descricao, body.tipo_pagamento_id, body.categoria_id]
    await client.query(query, values)
    res.status(200).json({
      "data": null,
      "success": true
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      "data": null,
      "success": false,
    })
  }
  await client.end()
}

module.exports = CriarDespesas

