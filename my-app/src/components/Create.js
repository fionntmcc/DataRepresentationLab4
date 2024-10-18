import { useState } from "react";

// Reusable read component
const Create = () => {

  const [title, setTitle, year, setYear, poster, setPosterURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(year);
    console.log(poster);
  }

  return(
    <div>
      <h1>Hello from the Create component</h1>
      <form onSubmit={handleSubmit}>
        
        <div>
    	    <label>Add Movie Title: </label>
          <input type="text"
          className="form-control"
          value={title}
          onChange={(e) => {setTitle(e.target.value) }}
          />
        </div>

        <div>
    	    <label>Add Movie Year: </label>
          <input type="text"
          className="form-control"
          value={year}
          onChange={(e) => {setYear(e.target.value) }}
          />
        </div>

        <div>
    	    <label>Add Poster URL: </label>
          <input type="text"
          className="form-control"
          value={poster}
          onChange={(e) => {setPosterURL(e.target.value) }}
          />
        </div>

        <div>
          <input type="submit" value="Add Movie"/>
        </div>
        
        
      </form>
    </div>
  )
  };
  
  export default Create;