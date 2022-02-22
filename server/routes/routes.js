import express from "express";
import { deleteFriend } from "../controllers/deleteFriend.js";
import { getAllFriends } from "../controllers/getAllFriends.js";
import { postFriend } from "../controllers/postFriend.js";
import { updateFav } from "../controllers/updateFav.js";
import { searchFriend } from "../controllers/searchFriend.js";
import { sortFriends } from "../controllers/sortFriends.js";
import { pagination } from "../controllers/pagination.js";

const routes = express.Router();

routes.get("/:num?", getAllFriends);
routes.post("/", postFriend);
routes.delete("/:id", deleteFriend);
routes.put("/", updateFav);
routes.post("/searchFriend", searchFriend);
routes.post("/sortFriends", sortFriends);

routes.post("/page", pagination);

export default routes;
