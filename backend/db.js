const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "990511",
  host: "localhost",
  port: "5432",
  database: "table_db"
});

module.exports = pool;
