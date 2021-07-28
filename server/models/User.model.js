const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['UserWalk', 'UserOwner'],
    required: true,
    default: "UserWalk"
  },
  email: {
    type: String,
  },
  telephone: { type: String },
  experience: {
    type: String,
  },
  postalCode: {
    type: Number,
  },
  price: {
    type: String,
  },
  dogTrainer: {
    type: Boolean,
  },
  admissionPPP: {
    type: Boolean,
  },
  maximumDogs: {
    type: Number,
  },
  numberDogs: {
    type: Number,
  },
  dogsPPP: {
    type: Boolean,
  },
  image: String

}, {
  timestamps: true
})

const User = model("User", userSchema);

module.exports = User;
