const { Router } = require("express");
const moviesRouter = require("./movies");

const router = Router();
router.use("/", moviesRouter);

module.exports = router;
