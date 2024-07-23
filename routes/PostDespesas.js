const express = require('express')
const CriarDespesas = require('../controllers/CriarDespesas.js')
const router = express.Router()

router.post('/api/despesas', CriarDespesas)

module.exports = router
