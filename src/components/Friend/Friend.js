import React from "react";
import StarOutlined from "@ant-design/icons/StarOutlined";
import StarFilled from "@ant-design/icons/StarFilled";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import { friend as friendApi } from "../../api/api";
import axios from "axios";
import "./Friend.css";

export default function Friend({ friend }) {
  const deleteFriend = () => {
    const id = friend._id;
    axios.delete(`${friendApi}/${id}`).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  const changeFav = () => {
    console.log(friend.isFavourite);
    axios
      .put(friendApi, {
        id: friend._id,
        isFavourite: friend.isFavourite,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };
  return (
    <div className="friend">
      <div className="name">
        <h3>{friend.name}</h3>
        <p> is your friend</p>
      </div>

      <div className="fav">
        {friend.isFavourite ? (
          <StarFilled style={{ fontSize: "1.5rem" }} onClick={changeFav} />
        ) : (
          <StarOutlined style={{ fontSize: "1.5rem" }} onClick={changeFav} />
        )}{" "}
        <DeleteOutlined style={{ fontSize: "1.5rem" }} onClick={deleteFriend} />
      </div>
    </div>
  );
}
