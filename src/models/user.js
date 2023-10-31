import mongoose from "mongoose";
import validator from "validator";

const isEmail = (email) => validator.isEmail(email);
const password = (password) => validator.isStrongPassword(password);

const userSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      validate: [isEmail, "email is not valid"],
    },
    password: {
      type: String,
      validate: [password, "password is not strong"],
    },
    number: Number,
    dob: Date,
    address: {
      address: String,
      area: String,
      state: String,
      pincode: Number,
    },
    userType: {
      type: String,
      enum: ["manager", "hod", "sr_executive", "jr_executive"],
    },
    isDeleted: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export default mongoose.model("User", userSchema);
