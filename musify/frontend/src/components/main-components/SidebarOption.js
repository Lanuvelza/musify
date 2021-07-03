import React from "react"; 
import "./styles/SidebarOption.css"


function SidebarOption({title, Icon, handleClick}) {

  return (
    <div className="sidebarOption" onClick={handleClick}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : null}
    </div>
  );
}

export default SidebarOption;