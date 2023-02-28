import React, { useState } from "react";
function Time24hours() {
  var date = new Date();
  var hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  var minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  var seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds;

  return time;
}

function App() {
  const currentTime = Time24hours();
  const [newTime, setTime] = useState(currentTime);

  function getTime() {
    const newCurrentTime = Time24hours();
    setTime(newCurrentTime);
  }

  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
