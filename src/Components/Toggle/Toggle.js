import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Toggle({ theme, toggleTheme }) {
  return (
      <article id="mode" className="desktop-visible" onClick={toggleTheme}>
          {theme === "light" ? (
          <FontAwesomeIcon icon="fa-moon" id="sun"/> 
        ) : (
          <FontAwesomeIcon icon="fa-sun" id="sun"/> 
        )}    
      </article>
  );
}

export default Toggle;