import React from 'react';

export default function Images(props) {

  return(
    <div onClick={() => props.setOpen(true)}>
      <img 
           style={{
           width: 175,
           height: 200,
           textAlign: "center",
           boxSizing: "border-box",
           margin:10
           }} 
         src={props.image} 
       alt='family'/> 
    </div>
  )
}