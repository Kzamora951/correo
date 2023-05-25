const express = require('express')
const router = express.Router()
const correoController =  require('../controllers/correo'); 

router.post('/', correoController.enviar);

module.exports = router 
