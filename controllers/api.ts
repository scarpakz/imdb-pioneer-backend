import config from "../config";
import axios, { AxiosResponse } from "axios";
import API_URL from '../constant'

/**
 * Get all movies
 * @param req 
 * @param res 
 */
export const getMovies = async (req:any, res: any) => {
    try {
        // undefined by default
        const search = req.query.s

        axios.get(`${API_URL.API_URL}?s=${search}&apikey=${config.apiKey}`)
        .then((response: AxiosResponse) => {
            res.json(response.data)
        })
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