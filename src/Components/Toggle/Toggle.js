import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Toggle({ theme, toggleTheme }) {
  return (
      <article id="mode" className="desktop-visible">
          {theme === "light" ? (
          <FontAwesomeIcon icon="fa-moon" id="sun" onClick={toggleTheme}/> 
        ) : (
          <FontAwesomeIcon icon="fa-sun" id="sun" onClick={toggleTheme}/> 
        )}    
      </article>
  );
}

export default Toggle;