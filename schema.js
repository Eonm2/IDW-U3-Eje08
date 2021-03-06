var moongose = require('moongose');

module.exports = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: { type: Boolean, default: false },
    meta: {
        votes: Number,
        favs: Number
    }
});