import React, { useState } from "react";
import "./SearchBar.css";
import { searchFriend } from "../../api/api";
import axios from "axios";

export default function SearchBar({ setUsers }) {
  const [name, setName] = useState("");
  const onEnter = (event) => {
    event.preventDefault();
    axios
      .post(searchFriend, {
        name: name,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Error In searching friend", err);
      });
  };

  return (
    <div className="search">
      <form onSubmit={onEnter}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Search your friend"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        ></input>
      </form>
    </div>
  );
}
