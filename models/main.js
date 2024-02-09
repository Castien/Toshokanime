const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    volumeSubtitle: { type: String },
    format: { type: String },
    studios: { type: [String] },
    releaseDate: { type: Date },
    upcIsbn: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

const Main = mongoose.model('Main', mainSchema);

module.exports = Main;
