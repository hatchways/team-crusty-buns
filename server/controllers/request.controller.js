const RequestInfo = require('../models/request.model.js');

exports.getRequests = async (req, res) => {
    try {
        const requestInfos = await RequestInfo.find();
        res.status(200).json(requestInfos);
    } catch (error) {
        res.status(404).json( {message: error.message} );
    }
}

exports.getById = (getRequestById, (req, res) => {
    res.json(res.requests);
}) 

exports.createRequest = async (req, res) => {
    const newRequest = new RequestInfo({
        user_id: req.body.user_id,
        sitter_id: req.body.sitter_id,
        start: req.body.start,
        end: req.body.end
    });

    try {
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(409).json( { message: error.message } );
    }
}

exports.updateRequest = (getRequestById, async (req, res) => {
    console.log(res.request.accepted);
    res.request.accepted = req.body.accepted;
    res.request.declined = req.body.declined;

    try {
        const updatedRequest = await res.request.save();
        res.json(updatedRequest);
    } catch (error) {
        res.status(409).json( { message: error.message } );
    }
})

// get by id 

async function getRequestById(req, res, next) {
    let request
    
    try {
        request = await RequestInfo.findById(req.params.id);
        if (request == null) {
            return res.status(404).json( { message: "Cannot find requests!" } );
        }
    } catch (err) {
        return res.status(500).json( { message: err.message } );
    }

    res.request = request
    next();
}