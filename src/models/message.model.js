import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: [true, "Please provide a chat ID"],
    },
    content: {
      type: String,
      required: [true, "Please provide message content"],
      trim: true,
      minlength: [1, "Message cannot be empty"],
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },
    role: {
      type: String,
      enum: {
        values: ["user", "ai"],
        message: "Role must be either 'user' or 'ai'",
      },
      required: [true, "Please specify the role"],
    },
  },
  {
    timestamps: true,
  },
);

// Index for efficient message retrieval
messageSchema.index({ chat: 1, createdAt: 1 });

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
