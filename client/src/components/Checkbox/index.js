import React from "react";

const Checkbox = ({ phone, email, isSelected, onCheckboxChange }) => (
  <div className="MessageContact-Checkbox">
    <label style={{marginRight:10}}>
      <input
        type="checkbox"
        name={phone}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="phone-checkbox"
      />
      Text
    </label>
  
    <label>
      <input 
        type="checkbox"
        name={email}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="email-checkbox"
      />
      Email
    </label>
  </div>
);

export default Checkbox;