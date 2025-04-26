const express = require('express');
const router = express.Router();
const filmesControllers = require('../controllers/filmesControllers');


// Rota para inserir um filme
router.post('/filmes', filmesControllers.insertFilme);



module.exports = router;

