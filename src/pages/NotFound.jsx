import "../css/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen gap-10 text-center lg:text-left bg-[var(--secondary)]">
            <div className="relative w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-gradient-to-br from-[var(--error)] to-[var(--tertiary)] grid place-items-center">
                <h2 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[230px] font-bold bg-gradient-to-r from-[var(--lightgray2)] to-[var(--lightgray)] text-transparent bg-clip-text">404</h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md">
                <h2 className="text-[var(--error)] text-[text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px]">Ops...</h2>
                <h4 className="text-[var(--darkgray2)] text-lg sm:text-xl">Parece que esta página não existe, clique no botão abaixo para voltar a página principal.</h4>
                <Link to="/" className="bg-(--error) text-(--white) rounded-xl principal hover:bg-(--principal) text-center transition">
                    Página principal
                </Link>
            </div>
        </div>
    )
}