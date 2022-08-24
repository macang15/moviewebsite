import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styles from './Detail.module.css'

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect( ()=> {
        getMovie();
    },[]);
    return (
        <div className ={styles.main}>
            
            {loading ? (
            <div className={styles}>
                <div className = {styles.loading}>
          <iframe src="https://giphy.com/embed/3o7bu3XilJ5BOiSGic" frameBorder="0" className='loading_icon' allowFullScreen></iframe> 
                </div>
      
            </div>
            ):(
                <div className = {styles.movie}>
        
                    <img className={styles.movie__img} 
                    src={movie.large_cover_image} alt={movie.title} />
                    <div className = {styles.movieinfo}>
                    
                        <h2 className={styles.movie__title}>{movie.title} ({movie.year})</h2>
                        <ul className={styles.movie__genres}>
                        {movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                         ))}
                        
                        <div>
                            <p className={styles.info}>Rating: {movie.rating} </p>
        
                            <p className={styles.info}> Runtime: {movie.runtime} min</p>
                            <p className={styles.info}>{movie.description_intro.length > 235 ? `${movie.description_intro.slice(0, 235)}...` : movie.description_intro}</p>
                            
                        </div>
                      
        </ul>
                    </div>
                   
                </div>
            ) }
            
        </div>
    );
}

export default Detail;