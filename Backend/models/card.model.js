
import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({

    title: {
        type: String,
    },

    heading: {
        type: String,
    },

    description1: {
        type: String,
    },

    description2: [
        {
            type: String,
        },
    ],

    imageUrl: {
        type: String,
    },

    hoverText: {
        type: String,
    },   

    date: {
        type: Date,
        default: Date.now
    },

    hero: {
        image: String,
        heading: String,
        description: String
    },

});


export const Card = mongoose.model("Card", cardSchema);