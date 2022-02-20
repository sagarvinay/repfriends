import express from "express";
import { deleteFriend } from "../controllers/deleteFriend.js";
import { getAllFriends } from "../controllers/getAllFriends.js";
import { postFriend } from "../controllers/postFriend.js";
import { updateFav } from "../controllers/updateFav.js";
import { searchFriend } from "../controllers/searchFriend.js";
import { sortFriends } from "../controllers/sortFriends.js";

const routes = express.Router();

routes.get("/", getAllFriends);
routes.post("/", postFriend);
routes.delete("/:id", deleteFriend);
routes.put("/", updateFav);
routes.post("/searchFriend", searchFriend);
routes.get("/sortFriends", sortFriends);

export default routes;
