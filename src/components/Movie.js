import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
    return (
      <div className = {styles.movie}>
        
      <Link className={styles.link} 
                  to={`/movie/${id}`} 
                  style={{textDecoration:'none'}}>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
        </Link>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;