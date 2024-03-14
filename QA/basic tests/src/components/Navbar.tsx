import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
        <nav data-test="navigation">
            <ul>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="/app">App</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
                <li data-test="app-link">
                    <Link to="/notes">Notes</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
