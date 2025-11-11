const express = require('express')
const professorRouter = require('./routes/professor')

const app = express();
const port = 3000;

app.use(express.json());
app.use('/professores', professorRouter)

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
})