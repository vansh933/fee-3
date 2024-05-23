import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'
const Div3 = ({ totalProducts }) => {

  const price = '$45.00';
  return (
    <>
<>
  <div id='' className="our">
    <div className="ourstory">
      <div className="our-l">
        <h1>OURSTORY</h1>
        <h5>
          ONE OF THE BEST AND CLEANIEST WORDPRESS THEME FOR AGENCIES AND ONLINE
          PORTFOLIOS
        </h5>
        <button>READ MORE+</button>
      </div>
      <div className="our-r">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
  <div className="latest">
    <h2 className="lt-prod">LATEST INTERIOR PRODUCTS ADDED</h2>
    <p className="lt-para">
      Lorem ipsum is simply dummy text of the printing and typeset <br />
      ing industry. Lorem ipsum has been the industry's...
    </p>
  </div>
  <div className="grid-container">
      <div className="grid">
        {Array.from({ length: totalProducts }, (_, index) => (
          <div key={index} className={`img-${index + 1}`}>
            <div className="p">
              <p>{price}</p>
            </div>
            <i className="fa-solid fa-cart-shopping" />
          </div>
        ))}
      </div>
    </div>
</>

    </>
  )
}

export default Div3
