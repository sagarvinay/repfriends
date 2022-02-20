import Friends from "../models/model.js";

export const postFriend = (req, res) => {
  const name = req.body.name;

  const newFriend = new Friends({
    name: name,
    isFavourite: false,
  });

  newFriend.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
