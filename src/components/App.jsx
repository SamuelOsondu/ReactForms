import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("");
  const [name, setName] = useState("");

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
