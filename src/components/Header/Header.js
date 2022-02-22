import React from "react";
import "./Header.css";
import ArrowDownOutlined from "@ant-design/icons/ArrowDownOutlined";
import axios from "axios";
import { sortFriends } from "../../api/api";

export default function Header({ currentPage, setUsers }) {
  const sortList = () => {
    const queryParams = {};
    queryParams["page"] = currentPage; //Page Number
    queryParams["pagination"] = 4; //Number Of records on Page
    console.log("query params in getUsers are ", queryParams);

    axios
      .post(sortFriends, queryParams)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log("Error In Fetching Users in Header ", err);
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
