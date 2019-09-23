import React from "react";

const TextCheckbox = ({ phone, email, isSelected, onCheckboxChange }) => (
  <div className="MessageContact-Checkbox">
    <label style={{marginRight:10}}>
      <input
        type="checkbox"
        name={phone}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="phone-checkbox"
      />
      {phone}
    </label>
  </div>
);

export default TextCheckbox;