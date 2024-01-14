import { roles } from '../helpers/roles'
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  firstName: {
    type: String,
    required: true,
    min: 3,
  },
  lastName: {
    type: String,
    required: true,
    min: 8,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
  },
  role: {
    type: String,
    required: true,
    enums: [roles.admin, roles.normal]
  }
});

export default mongoose.model("Users", userSchema);
