import { config } from "../config";
import { model } from "../models";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    const { email, userType } = req?.body;
    const user = await model.User.findOne({ email });

    if (userType === "manager") res.send("userType is invalid");
    else if (user) res.send("user is already exists");
    else {
      await model.User.create(req?.body);

      await model.User.findOne({ email })
        .then((resData) => {
          res.send({ status: 200, result: resData });
        })
        .catch((err) => {
          res.send({ status: 400, err: err.message });
        });
    }
  } catch (err) {
    res.send({ status: 400, err: err.message });
  }
};
export const update = (req, res) => {};
export const login = async (req, res) => {
  const { email, password } = req?.body;

  const user = await model.User.findOne({ email });
  const token = jwt.sign(
    { email: user.email, userType: user.userType },
    config.secret_key
  );
  if (user.password === password) res.send({ status: 200, token: token });
  // if()
};

let userFilter = {
  admin: ["manager", "hod", "sr_executive", "jr_executive"],
  manager: ["hod", "sr_executive", "jr_executive"],
  hod: ["sr_executive", "jr_executive"],
  sr_executive: ["jr_executive"],
};
export const get = async (req, res) => {
  const { userType } = req?.loginUser;
  const filter = { userType: { $in: userFilter[userType] } };

  const user = await model.User.find(filter);
};
export const Delete = (req, res) => {};
