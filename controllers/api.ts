import config from "../config";
import axios from "axios";

/**
 * Get all movies
 * @param req 
 * @param res 
 */
export const getMovies = async (req:any, res: any) => {
    try {
        const search = req.query.s
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${config.apiKey}`)
        .then((response) => {
            res.json(response.data)
        })
    } catch(err: any) {
        res.status(400).send(err.message);
    }
}

/**
 * Get all movies by title
 * @param req 
 * @param res 
 */
export const getMoviesByTitle = async (req: any, res: any) => {
    try {

    } catch(err: any) {
        res.status(400).send(err.message);
    }
}

/**
 * Get all movies by ID
 * @param req 
 * @param res 
 */
export const getMoviesById = async (req: any, res: any) => {
    try {

    } catch(err: any) {
        res.status(400).send(err.message);
    }
}