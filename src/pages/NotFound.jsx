import "../css/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div className="flex bg-(--secondary) h-screen items-center justify-center gap-30">
            <div className="relative w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-[var(--error)] to-[var(--tertiary)] grid place-items-center">
                <h2 className="text-[250px] font-bold bg-gradient-to-r from-[var(--lightgray2)] to-[var(--lightgray)] text-transparent bg-clip-text">404</h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md">
                <h2 className="text-(--error) text-[80px] font-bold">Ops...</h2>
                <h4 className="text-(--error) text-xl">Parece que esta página não existe, clique no botão abaixo para voltar a página principal.</h4>
                <Link to="/" className="bg-(--error) text-(--white) rounded-xl principal hover:bg-(--principal) text-center transition">
                    Página principal
                </Link>
            </div>
        </div>
    )
}