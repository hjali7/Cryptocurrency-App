import React, { useState } from "react";
import { Ring } from "react-awesome-spinners";

const Loading = () => {
    
  return (
      <div style={{display:'flex' , justifyContent:'center', alignItems:'center', width:'100%',height:'100%'}}>
         <Ring />
      </div>
  );
}

export default Loading
