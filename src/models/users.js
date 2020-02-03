const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userid: { type: String, required: true }, // String is shorthand for {type: String}
  password: { type: String, required: true },
  firstname: String,
  lastname: String
  //createddate: { type: Date, default: Date.now }
});

const User = model("User", UserSchema);

// const myTestUser = new User({
//   userid: "malles26",
//   password: "malles26",
//   firstname: "Hemanika",
//   lastname: "Malleswar"
// });

// myTestUser
//   .save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error);

module.exports = User;
