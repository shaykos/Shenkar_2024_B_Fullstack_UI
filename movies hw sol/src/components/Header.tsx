import { HeaderProps } from "../types/propsTypes";

export default function Header({pageTitle}: HeaderProps) {
    return (
        <header>
            <h1>{pageTitle}</h1>
        </header>
    )
}