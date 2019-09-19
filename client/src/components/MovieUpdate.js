import React, {useState, useEffect} from 'react';
import Movie from '../Movies/Movie';

const MovieUpdate = (props) => {
   const [updatedMovie, setUpdatedMovie] = useState({
        title: "",
        director: "",
        metascore: "",
        stars: [] 
   })
  
    // useEffect = () => {
    //   axios
    //     .put("http://localhost:5000/api/movies")
    //     .then(res => this.setState({ movies: res.data }))
    //     .catch(err => console.log(err.response));
    // }

    const handleChange = event => {
        setUpdatedMovie({...updatedMovie, [event.target.name]: event.target.value })
    }
  
    return (
    <>
        <form>
            <input 
                type = 'text'
                name = 'title'
                placeholder = 'Movie Title'
                value = {updatedMovie.title}
                onChange = {handleChange}/>
            <input 
                type = 'text'
                name = 'director'
                placeholder = 'Director'
                value = {updatedMovie.director}
                onChange = {handleChange}/>
            <input 
                type = 'number'
                name = 'metascore'
                placeholder = 'Metascore'
                value = {updatedMovie.metascore}
                onChange = {handleChange}/>
            <input 
                type = 'text'
                name = 'stars'
                placeholder = 'Stars'
                value = {updatedMovie.stars}
                onChange = {handleChange}/>
        </form>

    </>
    );
}

  export default MovieUpdate
  