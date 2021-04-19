const {Router}  = require('express');
const PessoaControler = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas',PessoaControler.getAllPessoas)
router.get('/pessoas/:id',PessoaControler.getOnePessoa)
router.post('/pessoas',PessoaControler.createPessoa)
router.put('/pessoas/:id',PessoaControler.updatePessoa)
router.delete('/pessoas/:id',PessoaControler.deletePessoa)


module.exports= router