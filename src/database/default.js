import { config } from "../config";
import { model } from "../models";

export async function data(req, res) {
  await model.User.updateOne(
    { email: config.credential.email },
    {
      email: config.credential.email,
      password: config.credential.pass,
      userType: config.credential.userType,
      isDeleted: false,
    },
    { upsert: true, new: true }
  );
}
