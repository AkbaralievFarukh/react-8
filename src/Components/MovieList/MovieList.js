import React from 'react';
import { IMAGE_URL } from '../../config/config';

const MovieList = ({movies}) => {
    return (
        <div className='row'>
            {
                movies.map(movie => 
                    <div className='col-4'>
                        <div className='card mt-3'>
                            <img src={`${IMAGE_URL}${movie.poster_path}`} alt="" />
                            <div className='card-body'>
                                <h3 className='card-title'>{movie.title}</h3>
                            </div>
                        </div>
                    </div>    
                )
            }   
        </div>
    );
}

export default MovieList;