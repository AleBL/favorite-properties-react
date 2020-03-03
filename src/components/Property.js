import React from "react"
import PropertyModal from "./PropertyModal.js"
import ModalImage from "react-modal-image";
import util from "../util/util"
import "../css/property.css"

const Property = (props) => {
  const classBtnFavorite = props.property.favorite ? "flash-container btn btn-favorite" : "btn btn-primary";

  return (
    <div id={ props.property.id } className="properties">
      <b>{ props.property.name }</b>
      <b>{ util.formatCurrencyBRL(props.property.min_price) }</b>
      <b>{ props.property.address.city + props.property.address.state }</b>

      <div>
        <ModalImage
          small={ props.property.default_image["200x140"] }
          large={ props.property.default_image["520x280"] }
          hideDownload={ true }
          alt={ props.property.name }
        />
      </div>

      <div className="containerButtons">
        <button className={ classBtnFavorite } onClick={ (e)=> props.addToFavorites(props.property) }> 
          &hearts;
        </button>

        <PropertyModal
          property={ props.property } />
      </div>
    </div>
  )
}

export default Property;