import { FooterProps } from "../types/propsTypes";

export default function Footer({year, members}: FooterProps) {
    return (
        <footer>
            <p>&copy; {year} | {members}</p>
        </footer>
    )
}