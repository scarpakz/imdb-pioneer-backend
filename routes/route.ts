import express from 'express';
import {
    getMovies,
    getMoviesById
} from "../controllers/api";
import {
    dbGetMovies
} from '../controllers/db'

const router = express.Router();

// Routes
router.get('/movies', getMovies)
router.get('/movie/:id', getMoviesById)

// Routes from MongoDB
router.get('/dbmovies', dbGetMovies)

export default router;