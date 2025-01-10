import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    Title: { type: String, required: true},
    Year: { type: String, required: true},
    imdbId: { type: String, required: true},
    Type: { type: String, required: true},
    Poster: { type: String, required: true}
})

const Subscriber = mongoose.model('Subscriber',subscriberSchema)
export default Subscriber;