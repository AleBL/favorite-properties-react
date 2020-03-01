import React from "react"
import util from "../util/util"
import "../css/propertie.css"

const Propertie = (props) => {
  const classBtnFavorite = props.propertie.favorite ? "flash-container btn btn-favorite" : "none";

  return (
    <div id={ props.propertie.id } className="buildings">

      <b>{ props.propertie.name }</b>
      <b>{ util.formatCurrencyBRL(props.propertie.min_price) }</b>
      <b>{ props.propertie.address.city + props.propertie.address.state }</b>

      <a>
        <img src={`${ props.propertie.default_image["200x140"] }`} alt={ props.propertie.name } />
      </a>

      <button className={ classBtnFavorite } onClick={ (e)=> props.addToFavorites(props.propertie) }> 
        &hearts;
      </button>
    </div>
  )
}

export default Propertie;