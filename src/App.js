import "./App.css";
import Header from "./components/Header/Header";
import InputBar from "./components/InputBar/InputBar";
import FriendList from "./components/FriendList/FriendList";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <SearchBar setUsers={setUsers} />
      <Header currentPage={currentPage} setUsers={setUsers} />
      <InputBar />
      <FriendList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
