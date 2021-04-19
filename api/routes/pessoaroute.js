const {Router}  = require('express');
const PessoaControler = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas',PessoaControler.getAllPessoas)


module.exports= router