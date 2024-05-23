import { useState } from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <>
<div id='support' className="footer">
  <div className="ft-top">
    <div className="ft-lt">
      <h1>
        <span>THE</span>SPACIOUS
      </h1>
      <p>
        ONE OF THE BEST AND CLEANIEST <br /> WORDPRESS THEME FOR AGENCIES AND{" "}
        <br /> ONLINE PORTFOLIOS
      </p>
    </div>
    <div className="ft-rt">
      <div className="rt-1">
        <h5 className="fth">SITE NAVIGATION</h5>
        <div className="paras">
          <p>GO TO HOME</p>
          <p>SERVICES</p>
          <p>PORTFOLIO</p>
          <p>READ BLOG</p>
          <p>CONTACT US</p>
          <p>PRODUCT SUPPORT</p>
        </div>
      </div>
      <div className="rt-2">
        <h5 className="fth">INFORMATION</h5>
        <div className="paras">
          <p>USER LOGIN</p>
          <p>CREATE NEW ACCOUNT</p>
          <p>CHECKOUT</p>
          <p>MY CART</p>
          <p>OTHER INFORMATION</p>
        </div>
      </div>
      <div className="rt-3">
        <h5 className="fth">POLICIES &amp; INFO</h5>
        <div className="paras">
          <p>TERMS CONDITIONS</p>
          <p>WEBSITE POLICY</p>
          <p>POLCIY FOR SELLERS</p>
          <p>POLICY FOR BUYERS</p>
          <p>SHIPPING &amp; REFUND</p>
          <p>WHOLESALE POLICY</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer
