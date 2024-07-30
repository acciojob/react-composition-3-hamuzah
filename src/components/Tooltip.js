// src/Tooltip.js
import React, { useState } from 'react';
import './Tooltip.css'; // Ensure you have this CSS file for styling

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
