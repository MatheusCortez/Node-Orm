const bodyParser = require('body-parser')
const pessoas = require('./pessoaroute')


module.exports=app=>{
    app.use(bodyParser.json())
    app.use(pessoas)
    app.get('/teste',(req,res)=>{
        res.send({message:'ola'})
    })
}