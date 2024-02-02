import { HeaderProps } from "../types/HeaderTypes";

export default function Header({ links }: HeaderProps) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        {/* <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Contact Us</a></li> */}
                        
                        {
                            links.map(link => <li><a href={link.url}>{link.text}</a></li>)
                        }

                    </ul>
                </nav>
            </header>
        </>
    )

}