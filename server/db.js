const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const requestRouter = require("./routes/request.route.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/request', requestRouter);

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  }))
  .catch((error) => {
    console.log(error.message);
  });

  //console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
