import config from "../config";
import axios, { AxiosResponse } from "axios";
import {
    API_URL
} from '../constant/constant'
import {
    TypeMovieDetails,
    TypeSearch
} from '../constant/types'

/**
 * Get all movies
 * @param req 
 * @param res 
 */
export const getMovies = async (req:any, res: any) => {
    try {
        // undefined by default
        const title = req.query.title

        axios.get(`${API_URL}?s=${title}&apikey=${config.apiKey}`)
        .then((response: AxiosResponse) => {
            const results: TypeSearch = response.data
            res.json(results)
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
        const id = req.params.id

        axios.get(`${API_URL}?i=${id}&apikey=${config.apiKey}`)
        .then((response: AxiosResponse) => {
            const results: TypeMovieDetails = response.data
            res.json(results)
        })
    } catch(err: any) {
        res.status(400).send(err.message);
    }
}