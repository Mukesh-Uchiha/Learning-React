import React from "react";
import Form from "./Form";

var isLoggedin = false;
//const time = new Date().getHours();
//console.log(time);

function App() {
  return (
    <div className="container">
      {
        isLoggedin ? <h1>Hello</h1> : <Form />
        //time < 5 && <h1>Why are u working </h1>
      }
    </div>
  );
}

export default App;
