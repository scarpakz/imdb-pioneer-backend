import config from "../config";
import Subscriber from '../models/subscriber'

export const dbGetMovies = async (req: any, res: any) => {
    try {
        const subs = await Subscriber.find()
        res.json(subs)
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}