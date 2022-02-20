import Friends from "../models/model.js";

export const getAllFriends = (req, res) => {
  Friends.find({}, (err, foundFriends) => {
    if (err) {
      console.log(err);
    } else {
      res.send(foundFriends);
    }
  });
};
