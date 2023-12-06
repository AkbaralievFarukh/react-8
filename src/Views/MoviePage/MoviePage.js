import { React, useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BACKDROP_URL, BASE_URL, IMAGE_URL } from '../../config/config';
import './MoviePage.css'

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [movieTrailer, setMovieTrailer] = useState({});

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}?language=ru-RU&api_key=${API_KEY}`)
            .then(({ data }) => setMovie(data))
    }, [id]);

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`)
            .then(({ data }) => setMovieTrailer(data))
    }, [id]);

    return (
        <Layout>
            <div
                className='movie-page'
                style={{
                    backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                }}>
                <div className='container'>
                    <div className='movie'>
                        {
                            Object.keys(movie).length > 0 ? (
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img src={IMAGE_URL + movie.poster_path} alt={movie.title} className='img-fluid' />
                                    </div>
                                    <div className='col-md-6 movie-info'>
                                        <div>
                                            <h2>{movie.title}</h2>
                                            <p>Рейтинг: {movie.vote_average}</p>
                                            <p>Описание: {movie.overview}</p>
                                            <p>Дата выхода: {movie.release_date}</p>
                                        </div>
                                        {
                                            Object.keys(movieTrailer).length > 0 ? (
                                                <div className='movie-trailer'>

                                                    <h3>Трейлер</h3>
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${movieTrailer.results[0].key}`}
                                                        title={movieTrailer.name}
                                                        frameBorder='0'
                                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                        allowFullScreen>
                                                    </iframe>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default MoviePage;
