import * as mongoose from "mongoose";

const Schema = mongoose.Schema,
  ContactSchema = new Schema({
    firstName: {
      type: String,
      required: "Enter a first name"
    },
    lastName: {
      type: String,
      required: "Enter a last name"
    },
    email: {
      type: String
    },
    company: {
      type: String
    },
    phone: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

ContactSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});

const Contact = mongoose.model( "Contact", ContactSchema );

export default Contact;