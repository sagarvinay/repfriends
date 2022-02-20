import Friends from "../models/userModel.js";

export const updateFav = (req, res) => {
  const id = req.body.id;
  const isFavourite = req.body.isFavourite;

  Friends.updateOne(
    { _id: id },
    { $set: { isFavourite: !isFavourite } },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
};
