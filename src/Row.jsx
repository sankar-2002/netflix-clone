import React, { useEffect, useState } from "react";
import axios from './axios';
import "./Row.css"
import { useHistory } from "react-router-dom";

function Row({ title, fetchURL, isLargeRow = false }) {  //props destructuring....


    const [movies, setMovies] = useState([]);
    const history = useHistory();
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;   //always return async functions...
        }

        fetchData();


    }, [fetchURL]);  //dependencies...as useeffect is dependent on this variable




    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name}
                                onClick={() => history.push("/video")} 
                            />
                        )



                )}

            </div>
        </div>
    )
}

export default Row
