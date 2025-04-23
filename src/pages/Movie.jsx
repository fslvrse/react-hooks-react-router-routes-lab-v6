import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie && (
          <article>
            <h2>{movie.title}</h2>
            <p>Runtime: {movie.runtime} minutes</p>
            <div>
              <h3>Genres:</h3>
              {movie.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
          </article>
        )}
      </main>
    </>
  );
}

export default Movie;
