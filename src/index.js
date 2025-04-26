const express = require('express');
const port = 3015;
const app = express();

app.use(express.json());






app.listen(port,() =>{console.log(`Servidor rodando na porta ${port}`);});

