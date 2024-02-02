import { Movie } from "../types/moviesTypes";

export default function MovieCard({ name, image, description }: Movie) {
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

