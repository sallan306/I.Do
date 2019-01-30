import React from "react";

const Checkbox = ({ name, isSelected, onCheckboxChange }) => (
  <div className="MessageContact-Checkbox">
    <label style={{marginRight:10}}>
      <input
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="text-checkbox"
      />
      Text
    </label>
  
    <label>
      <input 
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="email-checkbox"
      />
      Email
    </label>
  </div>
);

export default Checkbox;