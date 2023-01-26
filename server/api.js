const router = require("express").Router();

router.get("/login", (req, res) => {
   res.json("hello");
});

module.exports = router;
