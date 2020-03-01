import React from "react"
import util from "../util/util"
import "../css/propertie.css"

const Propertie = (props) => {
  const classBtnFavorite = props.propertie.favorite ? "flash-container btn btn-favorite" : "btn btn-primary";

  return (
    <div id={ props.propertie.id } className="properties">

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