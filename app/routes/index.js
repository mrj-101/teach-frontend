const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello, world.",
  });
});

router.use("/student", require("./student/"));
router.use("/test", require("./test/"));

module.exports = router;
