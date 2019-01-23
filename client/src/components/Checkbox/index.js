import React from "react";

const Checkbox = ({ name, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      Selected
    </label>
  </div>
);

export default Checkbox;