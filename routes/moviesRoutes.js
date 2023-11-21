const express = require('express');
const moviesController = require('../Controllers/moviesController')

const router = express.Router();

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.postMovie);
router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.patchMovie)
    .delete(moviesController.deleteMovie);

module.exports = router;