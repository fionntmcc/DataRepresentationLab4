import { useState } from "react";

// Reusable read component
const Create = () => {

  // useState() is a hook in React that allows you to add 
  // state variables to functional components.
  // This allows for the management of state outside of classes.

  // How to use useState():

  // const [state, setState] = useState(initialValue);
  // state : The value that can be used in the component
  // setState() : Updates the value
  // initialValue : sets value on init

  // Declare useState() for each value
  const [title, setTitle,] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");

  // Log input values to console
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
        
        <div className="form-group">
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
          onChange={(e) => {setPoster(e.target.value) }}
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