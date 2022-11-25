const { Router } = require("express");
const router = Router();
const { getMovies, movieDetail } = require("../controller/index");

router.get("/movies", getMovies);
router.get("/movies/:id", movieDetail);

module.exports = router;
