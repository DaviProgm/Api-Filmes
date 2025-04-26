const express = require('express');
const port = 3015;
const app = express();
const filmesRoutes = require('./routes/filmesRoutes')
// middleware para analisar o corpo da requisição como JSON
app.use(express.json());
// importando o arquivo de rotas
app.use(filmesRoutes);
app.listen(port,() =>{console.log(`Servidor rodando na porta ${port}`);
});

