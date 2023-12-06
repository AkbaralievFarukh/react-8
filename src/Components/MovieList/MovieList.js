import React from 'react';
import { useNavigate } from'react-router-dom';
import { IMAGE_URL } from '../../config/config';
import './MovieList.css';

const MovieList = ({movies}) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/movie/${id}`);
    }
    return (
        <div className='row mt-3 mb-5'>
            {
                movies.map(movie => 
                    <div className='col-lg-3 col-md-6' key={movie.id}>
                        <div className='card-box mt-3' onClick={() => handleClick(movie.id)}>
                            <img className='card-img-top' src={`${IMAGE_URL}${movie.poster_path}`} alt="" />
                            <div className='card-body'>
                                <h3 className='card-title'>{movie.title}</h3>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    </div>    
                )
            }   
        </div>
    );
}

export default MovieList;
