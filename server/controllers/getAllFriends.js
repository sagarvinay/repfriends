import Friends from "../models/userModel.js";

export const getAllFriends = (req, res) => {
  Friends.find({}, (err, foundFriends) => {
    if (err) {
      console.log(err);
    } else {
      res.send(foundFriends);
    }
  });
};
