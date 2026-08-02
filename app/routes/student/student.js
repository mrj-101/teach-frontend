const db = require("../../lib/db");

const getStudent = async () => {
  return new Promise((resolve, reject) => {
    db.query(`select * from students`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const getStudentById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`select * from students where student_id = ${id}`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const postStudent = (body) => {
  return new Promise((resolve, reject) => {
    db.query(
      `insert into students values('${body.student_id}', '${body.student}', '${body.email}', '${body.address}')`,
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      },
    );
  });
};

const putStudent = (id, body) => {
  return new Promise((resolve, reject) => {
    db.query(
      `update students set student = '${body.student}', email = '${body.email}', address = '${body.address}' where student_id = '${id}'`,
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      },
    );
  });
};

const deleteStudent = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`delete from students where student_id = '${id}'`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

module.exports = {
  getStudent,
  getStudentById,
  postStudent,
  putStudent,
  deleteStudent,
};
