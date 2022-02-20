import React from "react";
import "./Header.css";
import ArrowDownOutlined from "@ant-design/icons/ArrowDownOutlined";
import axios from "axios";
import { sortFriends } from "../../api/api";

export default function Header({ setList }) {
  const sortList = () => {
    axios.get(sortFriends).then((res) => {
      setList(res.data);
    });
  };
  return (
    <div className="head">
      <h2>
        Friends List{" "}
        <button>
          <ArrowDownOutlined onClick={() => sortList()} />
        </button>
      </h2>
    </div>
  );
}
