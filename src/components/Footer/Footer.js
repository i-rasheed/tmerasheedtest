import React from "react";
import "../../components/Footer/Footer.css";

export default function Footer() {
  return (
    <div className='footer footer-text'>
      <img
        className=''
        src={require("../../assets/footer-text.png")}
        alt='footertext'
      />
      <select className='conversion' name='cars' id='cars'>
        <option value='naira'>Naira</option>
        <option value='dollars'>Dollars</option>
      </select>
    </div>
  );
}
