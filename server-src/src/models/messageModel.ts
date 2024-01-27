const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    message: { type: String, required: true },

    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    createdAt: {
      type: "Date",
      default: new Date()
    },
    type: {
      type: "String",
      default: "MESSAGES",
      enums: ["MESSAGES", "CREATED","USER_ADDED","USER_REMOVED"]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);
