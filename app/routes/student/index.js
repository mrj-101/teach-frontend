const router = require("express").Router();
const student = require("./student");

router.get("/", async function (req, res) {
  const students = await student.getStudent();
  if (students.length == 0) {
    return res.status(404).json({
      success: false,
      message: "No-data!!",
    });
  }
  res.status(200).json({
    success: true,
    data: students,
  });
});

router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const students = await student.getStudentById(id);
  if (students.length == 0) {
    return res.status(404).json({
      success: false,
      message: "No-data!!",
    });
  }
  res.status(200).json({
    success: true,
    data: students,
  });
});

router.post("/", async function (req, res) {
  const body = req.body;
  const students = await student.postStudent(body);
  if (students.affectedRows == 0) {
    return res.status(500).json({
      success: false,
      message: "Error on POST !!",
    });
  }

  res.status(200).json({
    success: true,
  });
});

router.put("/:id", async function (req, res) {
  const id = req.params.id;
  const body = req.body;
  const students = await student.putStudent(id, body);
  if (students.affectedRows == 0) {
    return res.status(500).json({
      success: false,
      message: "Error on PUT !!",
    });
  }

  res.status(200).json({
    success: true,
  });
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const students = await student.deleteStudent(id);
  if (students.affectedRows == 0) {
    return res.status(500).json({
      success: false,
      message: "Error on DELETE !!",
    });
  }

  res.status(200).json({
    success: true,
  });
});

module.exports = router;
