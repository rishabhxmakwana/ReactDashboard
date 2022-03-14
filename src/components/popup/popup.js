import React from 'react';
import './popup.css';
import logo from '../../assets/images/sliders-solid.svg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Popup = () => {
  const w3_close = () => {
  document.getElementById("mySidebar").style.display = "none";
}
  const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
  }

  return (
    <>
      <div className="popup">
      <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{right:'0',width: '16rem'}} id="mySidebar">
        <button className="w3-bar-item w3-button w3-large filter-button" onClick={w3_close}>Filter </button>
        {// <p className="w3-bar-item w3-button">Link 1</p>
        // <p className="w3-bar-item w3-button">Link 2</p>
        // <p className="w3-bar-item w3-button">Link 3</p>
      }

      <div className="date-picker">
        <DatePicker selected={new Date()}/>
      </div>

      </div>
        <div>
          <img src={logo} alt="logo" onClick={w3_open} style={{right: '0', width:'2rem'}} />
        </div>
      </div>
</>
  );
};

export default Popup;
