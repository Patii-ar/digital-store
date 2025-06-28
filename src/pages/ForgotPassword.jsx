import { Link } from "react-router-dom";
import tenisJordan from "../assets/jordanblue.png";
import "../css/ForgotPassword.css";
import { useState } from "react";

export default function ForgotPassword () {

    const [userEmail, setUserEmail] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const submited = (e) => {
        e.preventDefault();
        if (userEmail.trim() !== ""){
            setShowMessage (true);
        } else {
            setShowMessage (false);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-fit justify-center items-center gap-20 xl:gap-30 bg-(--secondary)">
            <div className="bg-(--white) flex flex-col gap-8 forms rounded-sm w-fit">
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-3xl'>Esqueceu sua senha?</h2>
                    <h4 className='text-(--darkgray2) text-sm'>Clique <Link to="/login" className="underline">aqui</Link> para voltar a tela de login.</h4>
                </div>
                <form onSubmit={submited} className='flex flex-col gap-4'>
                    <label htmlFor="email" required className='font-bold text-md text-(--darkgray)'>Informe seu e-mail cadastrado: </label>
                    <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder='E-mail' 
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)} 
                        className='w-70 md:w-90 xl:w-130 h-10 bg-(--lightgray3) rounded-md input1 outline-none'
                    />
                    <button type='submit' className='bg-(--principal) text-(--white) button rounded-md hover:bg-(--tertiary)'>Enviar</button>
                    {
                        showMessage && (
                            <p className="text-(--success) text-md">
                                &#10004; Um e-mail com instruções para recuperação de senha foi enviado. 
                            </p>
                        )
                    }
                </form>
            </div>
            <img src={tenisJordan} alt="tênis" className='w-[25rem] h-[30rem] xl:w-[45rem] xl:h-[55rem] hidden lg:inline image'/>
        </div>
    )
}