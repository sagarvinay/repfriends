import Friends from "../models/userModel.js";

export const getAllFriends = (req, res) => {
  // console.log(req.params);
  if (req.params.num) {
    Friends.find({})
      .count()
      .then((data) => {
        res.send({
          cnt: data,
        });
      });
  } else {
    Friends.find({}, (err, foundFriends) => {
      if (err) {
        console.log(err);
      } else {
        res.send(foundFriends);
      }
    });
  }
};
