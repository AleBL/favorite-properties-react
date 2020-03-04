import React, { Fragment } from "react"
import "../css/pagination.css"

const Page = (props) => {
  const classBtnAddFavorite = props.pageNumber === props.currentPage ? 'button active' : 'button';
  
  return (
    <button className={ classBtnAddFavorite } onClick={ ()=> props.loadPage( props.pageNumber ) }> { props.pageNumber } </button>
  );
}

export default Page;