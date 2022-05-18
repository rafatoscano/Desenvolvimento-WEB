const express = require('express');
const app = express();

//app.get('/', (req, res) => {
//    res.send('Olá Backend!!!');
//})

app.use(express.static('documentos'));
app.use(express.static('imagens'));

app.listen(3000);