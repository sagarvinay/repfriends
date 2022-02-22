import Friend from "../Friend/Friend";
import { useState, useEffect } from "react";
import axios from "axios";
import PaginationBar from "../PaginationBar/PaginationBar";
import { friend, getpaginatedResult } from "../../api/api";

export default function FriendList({
  currentPage,
  setCurrentPage,
  users,
  setUsers,
}) {
  // const [users, setUsers] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  const nextpage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setUsers([]);
    getUsers(pageNumber);
  };

  const getUsers = (currentPage) => {
    const queryParams = {};
    queryParams["page"] = currentPage; //Page Number
    queryParams["pagination"] = 4; //Number Of records on Page
    console.log("query params in getUsers are ", queryParams);

    axios
      .post(getpaginatedResult, queryParams)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log("Error In Fetching Users ", err);
      });
  };
  const getUsersCount = () => {
    //Passing /1 as Backend Uses same query so if argument then it will return count
    axios
      .get(`${friend}/1`)
      .then((res) => {
        setTotalUsers(res.data.cnt);
        getUsers(currentPage);
      })
      .catch((err) => {
        console.log("Error In Fetching total Users ", err);
      });
  };

  useEffect(() => {
    getUsersCount();
  }, []);

  let numberOfPages = 0;
  if (totalUsers % 4 === 0) numberOfPages = Math.floor(totalUsers / 4);
  else numberOfPages = Math.floor(totalUsers / 4) + 1;
  return (
    <div>
      {users.map((item) => {
        return <Friend key={item._id} friend={item} />;
      })}
      {totalUsers > 4 && (
        <PaginationBar
          pages={numberOfPages}
          nextPage={nextpage}
        ></PaginationBar>
      )}
    </div>
  );
}
