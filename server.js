const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cookbook',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use(express.json())
app.use(cors())
app.use("/app", routesUrls)
app.listen(PORT, () =>  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));