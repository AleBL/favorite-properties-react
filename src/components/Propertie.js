import React from "react"
import util from "../util/util"

const Propertie = (props) => {
  return (
    <div id={ props.propertie.id }>

      <b>{ props.propertie.name }</b>
      <b>{ util.formatCurrencyBRL(props.propertie.min_price) }</b>
      <b>{ props.propertie.name }</b>
      <b>{ props.propertie.address.city + props.propertie.address.state }</b>

      <a>
        <img src={`${ props.propertie.default_image["200x140"] }`} alt={ props.propertie.name } />
      </a>

      <button className="btn-small btn-primary" onClick={ (e)=> props.addToFavorites(props.propertie) }> + </button>
    </div>
  )
}

export default Propertie;