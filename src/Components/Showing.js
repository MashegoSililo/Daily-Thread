import React from "react";


const Showing = (props) => {
  return(
    <h3 style={subHeading}>Showing: {props.heading} </h3>
  )
}


const subHeading = {
  paddingLeft: '1%',
  paddingTop: '1%'

};



export default Showing;
