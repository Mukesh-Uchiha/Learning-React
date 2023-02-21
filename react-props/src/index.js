import React from "react";
import ReactDOM from "react-dom";

function Card(){
return( 
  <h2>Beyonce</h2>
  <img
    src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    alt="avatar_img"
  />
  <p>+123 456 789</p>
  <p>b@beyonce.com</p>
);
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card />
  </div>,
  document.getElementById("root")
);
