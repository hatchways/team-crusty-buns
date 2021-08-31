const asyncHandler = require("express-async-handler");

exports.ping = asyncHandler(async (req, res, next) => {
  const { message } = req.body;
  res.status(200).json({ response: `Server is running. Message received: ${message}` });
});
