const student = require("express").Router();
const mysql = require("mysql2");

student.get("/", async (req, res, next) => {
  const db = req.db;
  const queryString = "select * from students";

  try {
    await db
      .promise()
      .query(queryString)
      .then((rows) => {
        if (rows.length == 0) {
          res.status(404).json({
            success: false,
            message: "No-data",
          });
          next();
        }
        res.status(200).json({
          success: true,
          data: rows[0],
        });
        next();
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = student;
