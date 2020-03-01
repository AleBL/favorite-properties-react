import React, { Fragment } from "react"
import "../css/pagination.css"

const Page = (props) => {
  const pageNumber = props.pageNumber + 1;
  const classBtnAddFavorite = pageNumber === props.currentPage ? 'button active' : 'button';

  if (pageNumber === 1 || pageNumber === props.totalPages 
    || (pageNumber >= props.currentPage - 2 && pageNumber <= props.currentPage + 2)
    || (pageNumber >= props.totalPages - 2 && pageNumber <= props.totalPages + 2)) {

    return (
      <button className={ classBtnAddFavorite } onClick={ ()=> props.loadPage( pageNumber ) }> { pageNumber } </button>
    );
  }

  return ( <Fragment/> );
}

export default Page;