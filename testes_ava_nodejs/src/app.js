import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test_apirest', { useNewUrlParser: true, useUnifiedTopology: true });

routes(app);

app.listen(3000, () => console.log('Express has been started...'))

export default app;