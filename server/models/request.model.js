const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
      },
    sitter_id: {
        type: String,
        required: true
      },
    start: {
        type: Date,
        default: Date.now
    },
    end: {
        type: Date,
        default: Date.now
    },
    accepted: {
        type: Boolean,
        default: false
    },
    declined: {
        type: Boolean,
        default: false
    },
    paid: {
        type: Boolean,
        default: false
    }
}); 

const RequestInfo = mongoose.model('request', requestSchema);

module.exports = RequestInfo;