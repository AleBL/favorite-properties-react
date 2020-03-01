import React from "react"
import PageList from "./PageList.js"

const Pagination = (props) => {
  return (
    <PageList
      currentPage={ props.currentPage }
      totalPages={ props.totalPages }
      loadPage={ props.loadPage } />
  );
}
  
export default Pagination;
