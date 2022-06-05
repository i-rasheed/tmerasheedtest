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
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='mercedes'>Mercedes</option>
        <option value='audi'>Audi</option>
      </select>
    </div>
  );
}
