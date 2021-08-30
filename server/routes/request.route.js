const express = require("express");

const { getRequests, updateRequest, createRequest } = require('../controllers/request.controller.js') 

const router = express.Router();

router.get('/', getRequests);
router.patch('/:id', updateRequest);
router.post('/', createRequest);

module.exports = router;