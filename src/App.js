import "./App.css";
import Header from "./components/Header/Header";
import InputBar from "./components/InputBar/InputBar";
import FriendList from "./components/FriendList/FriendList";
import { useEffect, useState } from "react";
import axios from "axios";
import { friend } from "./api/api";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(friend).then((res) => {
      setList(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Header setList={setList} />
      <InputBar setList={setList} />
      <FriendList list={list} />
    </div>
  );
}

export default App;
