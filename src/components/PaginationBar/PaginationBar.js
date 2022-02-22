import React from "react";
import "./PaginationBar.css";

const PaginationBar = (props) => {
  const pageBar = [];
  for (let i = 1; i <= props.pages; i++) {
    pageBar.push(
      <div key={i}>
        <button onClick={() => props.nextPage(i)}>{i}</button>
      </div>
    );
  }

  return <div className="pagination">{pageBar}</div>;
};
export default PaginationBar;
