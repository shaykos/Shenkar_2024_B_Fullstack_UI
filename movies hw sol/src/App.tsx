import { FormEvent, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MoviesList from "./components/MoviesList"
import TopMovies from "./components/TopMovies"
import { Movie } from "./types/moviesTypes"

export default function App() {

    //const [propertyName, propertySetFunction] = useState<type>(value?)
    //state --> המידע הנוכחי של הקומפוננטה

    const [moviesList, setMoviesList] = useState<Movie[]>([
        { name: "The Little Mermaid" },
        { name: "The Lion King" },
        { name: "Aladdin" },
        { name: "The Hunchback of Notre Dame" },
        { name: "Mulan" },
        { name: "Beauty and the Beast" },
        { name: "The Incredibles" },
        { name: "Toy Story" },
        { name: "Frozen" },
        { name: "Pinocchio" },
        { name: "The Sword in the Stone" }
    ]);

    const [topMovies, setTopMovies] = useState<Movie[]>([
        { name: "The Little Mermaid", image: "https://m.media-amazon.com/images/M/MV5BOWUyNDA0ZmItMzg2My00YjJhLTk1N2QtYTAxYTc0NzMzNDI0XkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1000_.jpg", description: "" },
        { name: "The Lion King", image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg", description: "" },
        { name: "Aladdin", image: "https://m.media-amazon.com/images/M/MV5BZTg5ZTVmM2EtZjdhZC00MzBjLWEwZTYtNWIwZDczYzZkMzA4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", description: "" }
    ]);

    const [movieName, setMovieName] = useState("");


    /**
     * Add a new movie to the movies list.
     *
     * @param {FormEvent<HTMLFormElement>} event - the form event
     * @return {void} 
     */
    function addMovie(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setMoviesList((prev) => [...prev, { name: movieName}]);
        setMovieName("");
    }

    return (
        <>
            <form onSubmit={addMovie}>
                <input type="text" value={movieName} onChange={(event) => setMovieName(event.target.value)} />
                <button type="submit">Add</button>
            </form>
            <Header pageTitle={"Disney World"} />
            <MoviesList list={moviesList} />
            <TopMovies list={topMovies} />
            <Footer year={2024} members={"All Rights Reserved"} />
        </>
    )
}

//props -> פרמטרים שהפונקציה מקבלת
