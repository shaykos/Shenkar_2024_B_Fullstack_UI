import { MoviesListProps } from "../types/propsTypes";

export default function MoviesList({ list }: MoviesListProps) {
    return (
        <section className="movies-list">
            <h2>Movies List</h2>
            <ul>
                {
                    list.map((movie, index) =>
                        <li key={index}>{movie.name}</li>
                    )
                }
            </ul>
        </section>
    )
}