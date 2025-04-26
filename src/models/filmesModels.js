const connection = require("./connection");

async function insertFilme(filme) {
  const insertFilme = await connection.query(
    `ÌNSERT INTO filmes (titulo,genero,ano.minutos)``VALUES ($1,$2,$3,$4)
        Returning *

        `,
    [filme.titulo, filme.genero, filme.ano, filme.minutos]
  );
  return insertFilmensertFilme.rows[0];
}

module.exports = {
  insertFilme,
};
