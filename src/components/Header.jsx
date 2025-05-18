import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";



export default function Header () {
    return (
        <header>
            <section>
                <Link to="/"><img src={logo} alt="Logo Digital Store" /></Link>
            </section>
        </header>
    )
}
