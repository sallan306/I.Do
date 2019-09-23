import React from "react";

const EmailCheckbox = ({ phone, email, isSelected, onCheckboxChange }) => (
  <div className="MessageContact-Checkbox">
  
    <label>
      <input 
        type="checkbox"
        name={email}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="email-checkbox"
      />
      {email}
    </label>
  </div>
);

export default EmailCheckbox;