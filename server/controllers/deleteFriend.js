import Friends from "../models/model.js";

export const deleteFriend = (req, res) => {
  const { id } = req.params;
  //   console.log(req.params);
  Friends.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      console.log("err is ", err);
    } else {
      res.status(200).send(result);
    }
  });
};
