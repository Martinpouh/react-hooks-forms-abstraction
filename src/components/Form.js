import React, { useState } from "react";

function Form() {
  const [names, setNames] = useState({
    firstName: "sam",
    lastName: "kuria",
  });

  function handleNameChange(event) {
    const {
      target: { name, value },
    } = event;
    const nameArr = { ...names, [name]: value };
    setNames(nameArr);
  }

  return (
    <form>
      <input type="text" name="firstName" onChange={handleNameChange} value={names.firstName} />
      <input type="text" name="lastName" onChange={handleNameChange} value={names.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;