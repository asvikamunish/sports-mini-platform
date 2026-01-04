import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:5000/test")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Backend not reachable");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Sports Mini Platform</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
