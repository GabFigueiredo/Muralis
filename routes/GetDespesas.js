const express = require('express')
const ListarDespesas = require('../controllers/ListarDespesas.js')
const router = express.Router()

router.get('/api/despesas', ListarDespesas)

module.exports = router
