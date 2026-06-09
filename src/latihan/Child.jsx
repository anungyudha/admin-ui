import React, { useState } from "react"; 

// Component Child
function Child(props) {
  return (
    <div className="ps-10">
      <p>Nilai count di Child dari Parent: {props.count}</p> 
    </div>
  );
}

export default Child;