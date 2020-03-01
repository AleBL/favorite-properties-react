import React, { Fragment } from "react"
import PageList from "./PageList.js"

const Pagination = (props) => {
  return (
    <Fragment>
      <PageList
        currentPage={ props.currentPage }
        totalPages={ props.totalPages }
        loadPage={ props.loadPage } />
    </Fragment>
  );
}
  
export default Pagination;
