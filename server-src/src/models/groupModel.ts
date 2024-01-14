const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  members: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  }]
});

export default mongoose.model("Groups", groupSchema);
