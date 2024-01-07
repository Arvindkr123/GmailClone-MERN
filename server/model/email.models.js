import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  body: String,
  date: {
    type: Date,
    required: true,
  },
  image: String,
  name: {
    type: String,
    required: true,
  },
  starred: {
    type: Boolean,
    required: true,
    default: false,
  },
  bin: {
    type: Boolean,
    required: true,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
});

const EmailModel = mongoose.model("emails", emailSchema);
export { EmailModel };
