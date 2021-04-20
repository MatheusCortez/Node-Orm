const bodyParser = require('body-parser')
const pessoas = require('./pessoaroute')
const niveis = require('./niveisRoute')
const turma = require('./turmaroute')
module.exports=app=>{
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turma)
}