import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/friend", routes);

mongoose
  .connect("mongodb://localhost:27017/friendsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected...."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
