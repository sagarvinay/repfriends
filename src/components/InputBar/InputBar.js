import React, { useState } from "react";
import "./InputBar.css";
import { friend, searchFriend } from "../../api/api";
import axios from "axios";

export default function InputBar({ setList }) {
  const [name, setName] = useState("");
  const onEnter = (event) => {
    event.preventDefault();
    axios
      .post(friend, {
        name: name,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const search = (value) => {
    setName(value);
    axios
      .post(searchFriend, {
        name: name,
      })
      .then((res) => {
        console.log(res);
        setList(res.data);
      });
  };
  return (
    <div className="search">
      <form onSubmit={onEnter}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter your friend's name"
          onChange={(e) => search(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
