import Friends from "../models/userModel.js";

export const sortFriends = (req, res) => {
  const pagination = req.body.pagination ? parseInt(req.body.pagination) : 4;

  const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
  Friends.find({})
    .skip((pageNumber - 1) * pagination)
    .limit(pagination)
    .sort({ isFavourite: -1 })
    .then((data) => {
      res.send({
        users: data,
      });
    });
};
