const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookName: { type: String }, // String is shorthand for {type: String}
  bookCount: { type: Number }
});
