import React, { useState } from "react";

const MovieCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const hadleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="movie-create">
      <form className="" onSubmit={handleSubmit}>
        <h3>Add a Movie</h3>
        <label>Title</label>
        <input className="input" value={title} onChange={hadleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default MovieCreate;
