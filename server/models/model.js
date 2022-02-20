import mongoose from "mongoose";

const friendsSchema = new mongoose.Schema({
  name: String,
  isFavourite: Boolean,
});

const Friends = new mongoose.model("Friends", friendsSchema);

export default Friends;
