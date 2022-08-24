
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);

  return (
    
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className = {styles.title}> BEST MOVIES</h1>
      </div>
      <div className={styles.container}>
      {loading ? (<div className = {styles.loading}>
          <iframe src="https://giphy.com/embed/3o7bu3XilJ5BOiSGic" frameBorder="0" className='loading_icon' allowFullScreen></iframe> 
        </div>
      
      ) : (


        <div className = {styles.movies}> 
      
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
export default Home;