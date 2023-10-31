import mongoose from "mongoose";
import { config } from "../config";
import { data } from "./default";

export const dbConnection = () => {
  console.log("connection has started...");
  mongoose
    .set("strictQuery", false)
    .connect(config.db_url)
    .then(() => {
      console.log("Your database has been connected now...");
    })
    .catch((err) => {
      console.log("Your database has been thrown err", err);
    });
  data();
};
