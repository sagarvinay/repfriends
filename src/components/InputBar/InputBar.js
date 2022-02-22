import React, { useState } from "react";
import "./InputBar.css";
import { friend } from "../../api/api";
import axios from "axios";

export default function InputBar() {
  const [name, setName] = useState("");
  const onEnter = (event) => {
    event.preventDefault();
    axios
      .post(friend, {
        name: name,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error In adding friend", err);
      });
  };

  return (
    <div className="search">
      <form onSubmit={onEnter}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name to add to the list"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
