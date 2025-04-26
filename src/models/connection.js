const {Pool} = require('pg');

const connection = new Pool ({
    connectionString: "postgres:FrBTNulcOTMUEkBnnNYQfRuABUECcOmv@maglev.proxy.rlwy.net:26331/railway"
})

module.exports = connection;