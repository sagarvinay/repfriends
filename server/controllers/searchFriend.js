import Friends from "../models/userModel.js";

export const searchFriend = (req, res) => {
  const searchVariable = req.body.name;

  Friends.find(
    { name: new RegExp(".*" + searchVariable + ".*") },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
