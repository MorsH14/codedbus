import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true, // ✅ converts email to lowercase automatically
      trim: true        // ✅ removes extra spaces
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6      // ✅ adds a minimum length for better security
    },
  },
  { timestamps: true }
);

// Avoid overwrite error in dev
const User = models.User || model("User", UserSchema);

export default User;
