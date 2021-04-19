const bodyParser = require('body-parser')

module.exports=app=>{
    app.use(bodyParser.json())
    app.get('/pessoas',(req,res)=>{
        res.send('ola')
    })
}