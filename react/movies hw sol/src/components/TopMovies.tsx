import { MoviesListProps } from "../types/propsTypes";
import MovieCard from "./MovieCard";

export default function TopMovies({ list }: MoviesListProps) {
    return (
        <section className="top-movies">
            <h2>Top Movies</h2>
            <ul>
                {
                    list.map((movie) =>
                        <li key={movie.name}>
                            {/* <MovieCard name={movie.name} image={movie.image} description={movie.description} /> */}
                            <MovieCard {...movie} />
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

//... -> spread operator. takes all the props of the movie object and spreads them into the MovieCard component