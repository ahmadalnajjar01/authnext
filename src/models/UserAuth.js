import mongoose from "mongoose";

const UserAuthSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.models.UserAuth || mongoose.model("UserAuth", UserAuthSchema);
