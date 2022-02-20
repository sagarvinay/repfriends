import Friends from "../models/userModel.js";

export const sortFriends = (req, res) => {
  Friends.find({})
    .sort({ isFavourite: -1 })
    .exec((err, foundFriends) => {
      if (err) {
        console.log(err);
      } else {
        res.send(foundFriends);
      }
    });
};
