const express = require('express');
const app = express()
const port = 3001;

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello word')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`criando dados de ${req.body.name}`)
})

app.listen(port, () =>{
    console.log('listening')
})