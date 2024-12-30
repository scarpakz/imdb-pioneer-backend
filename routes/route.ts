import express from 'express';
import {
    getMovies,
    getMoviesByTitle
} from "../controllers/api";

const router = express.Router();

// Routes
router.get('/movies', getMovies)
router.get('/movie/:id', getMoviesByTitle)

export default router;