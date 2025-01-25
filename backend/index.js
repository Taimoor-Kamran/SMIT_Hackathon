import express from "express";
import mongosse from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

mongosse
  .connect(URL)
  .then(() => {
    console.log("DB Connected Successfully");

    app.listen(PORT, () => console.log(`Server is running PORT:${PORT}`));
  })
  .catch((error) => console.log(error));

app.use('/api', route)