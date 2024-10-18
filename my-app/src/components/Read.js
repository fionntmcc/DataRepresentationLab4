// necessary inputs
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";
import { useActionData } from "react-router-dom";

// Reusable read component
const Read = () => {

    // constant to store movies as JSON
    const [movies, setMovies] = useState([]);


    
    // return message and movie list
    return <div>
            <h1>Hello from the Read component</h1>
            <Movies myMovies={movies} />
        </div>;
}
  
  export default Read;