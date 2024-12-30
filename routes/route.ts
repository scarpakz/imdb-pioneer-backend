import express from 'express';
import {
    getMovies,
    getMoviesById
} from "../controllers/api";

const router = express.Router();

// Routes
router.get('/movies', getMovies)
router.get('/movie/:id', getMoviesById)

export default router;