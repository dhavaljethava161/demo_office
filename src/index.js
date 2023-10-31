import "dotenv/config";
import express from "express";
import { routes } from "./router";
import { dbConnection } from "./database";
import { config } from "./config";
import cors from "cors";

const app = express();
const port = config.port || 3000;
app.use(express.json());
app.use(cors());

app.use("/", routes.user);

app.listen(port, () => {
  dbConnection();
  console.log(`your server is running at http://localhost:${port}`);
});
