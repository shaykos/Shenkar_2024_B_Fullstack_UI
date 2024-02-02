import { Movie } from "./moviesTypes"

export type HeaderProps = {
    pageTitle: string
}

export type FooterProps = {
    year: number,
    members: string
}

export type MoviesListProps = {
    list: Movie[]
}
