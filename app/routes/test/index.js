const router = require("express").Router();

router.get("/", (req, res, next) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });

  promise.then((value) => {
    console.log(`Resolved: ${value}`);
  });

  console.log("Main program");
});

module.exports = router;
