const express = require('express')
const port = 3333;
const app = express();

const routes = require('./routes/index')
routes(app)
app.listen(port,()=>console.log(`servidor rodando na porta ${port}`))

