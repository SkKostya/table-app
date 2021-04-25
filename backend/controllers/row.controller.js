const db = require("../db");

const OPERATORS = {
  "equal": "=",
  "contains": ">=",
  "more": ">",
  "less": "<"
};

class RowController {
  async createRow(req, res) {
    const { name, amount, distance } = req.body;
    const createdAt = new Date();
    const newRow = await db.query(
      "INSERT INTO row (name, amount, distance, createdAt) values ($1, $2, $3, $4) RETURNING *",
      [name, amount, distance, createdAt]
    );

    res.json(newRow.rows[0]);
  }

  async getRows(req, res) {
    const dataRows = await db.query("SELECT * FROM row");

    res.json(dataRows.rows);
  }

  async getRowByName(req, res) {
    const name = req.params.name;
    const dataRow = await db.query("SELECT * FROM row where name = $1", [name]);

    res.json(dataRow.rows);
  }

  async getRowByAmount(req, res) {
    const operator = req.params.operator;
    const amount = req.params.amount;

    const query = operator === "equal"
      ? `SELECT * FROM row where amount ${OPERATORS[operator]} $1`
      : `SELECT * FROM row where amount ${OPERATORS[operator]} $1 order by row.amount ASC`;
    const dataRow = await db.query(query, [amount]);

    res.json(dataRow.rows);
  }

  async getRowByDistance(req, res) {
    const operator = req.params.operator;
    const distance = req.params.distance;

    const query = operator === "equal"
      ? `SELECT * FROM row where distance ${OPERATORS[operator]} $1`
      : `SELECT * FROM row where distance ${OPERATORS[operator]} $1 order by row.amount ASC`;
    const dataRow = await db.query(query, [distance]);

    res.json(dataRow.rows);
  }
  
  async getOneRow(req, res) {
    const id = req.params.id;
    const dataRow = await db.query("SELECT * FROM row where id = $1", [id]);

    res.json(dataRow.rows[0]);
  }
  
  async updateRow(req, res) {
    const { id, name, amount, distance } = req.body;
    const dataRow = await db.query(
      "UPDATE row set name = $1, amount = $2, distance = $3 where id = $4 RETURNING *",
      [name, amount, distance, id]
    );

    res.json(dataRow.rows[0]);
  }
  
  async deleteRow(req, res) {
    const id = req.params.id;
    const dataRow = await db.query("DELETE FROM row where id = $1", [id]);

    res.json(dataRow.rows[0]);
    
  }
};

module.exports = new RowController();
