import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  language: String,
  platform: String,
  enabledCookie: Boolean,
  sizeScreen: String,
  positionUser: {
    latitude: Number, 
    longitude: Number
  }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;