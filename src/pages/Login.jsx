import '../css/Login.css'
import tenisJordan from "../assets/jordanblue.png";
import { Link } from 'react-router-dom';
import gmail from "../assets/logogmail.svg";
import facebook from "../assets/facebook.svg";
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login () {

    const [seePassword, setSeePassword] = useState(false);

    const showPassword = () => {
        setSeePassword((prev) => !prev)
    }

    return (
        <div className='flex flex-col lg:flex-row h-fit justify-center items-center gap-20 xl:gap-30 bg-(--secondary)'>
            <div className='bg-(--white) flex flex-col gap-8 forms rounded-sm w-fit'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-3xl'>Acesse sua conta</h2>
                    <h4 className='text-(--darkgray2) text-sm'>Novo cliente? Então registre-se <Link to="/criar-conta-simples" className="underline">aqui</Link>.</h4>
                </div>
                <form className='flex flex-col gap-4'>
                    <label htmlFor="email" className='font-bold text-md text-(--darkgray)'>Login: </label>
                    <input type="text" id="email" required placeholder='Insira seu login ou e-mail' className='w-70 md:w-90 xl:w-130 h-10 bg-(--lightgray3) rounded-md input1 outline-none'/>
                    <label htmlFor="password" className='font-bold text-md text-(--darkgray)'>Senha: </label>
                    <div className='relative'>
                        <input type={seePassword ? 'text' : 'password'} id="password" required placeholder='Insira sua senha' className='w-70 md:w-90 xl:w-130 h-10 bg-(--lightgray3) rounded-md input1 outline-none'/>
                        <button type='button' onClick={showPassword} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none'>
                            {seePassword ? <FiEyeOff/> : <FiEye/>}
                        </button>
                    </div>
                    <h3 className='text-(--darkgray2) text-xs underline'><Link to="/">Esqueci minha senha</Link></h3>
                    <button type='submit' className='bg-(--principal) text-(--white) button rounded-md hover:bg-(--tertiary)'>Acessar Conta</button>
                </form>
                <div className='flex justify-center'>
                    <h3 className='text-(--darkgray2)'>Ou faça login com <img src={gmail} alt="gmail" className='inline socials'/> <img src={facebook} alt="facebook" className='inline socials'/></h3>
                </div>
            </div>
            <img src={tenisJordan} alt="tênis" className='w-[25rem] h-[30rem] xl:w-[45rem] xl:h-[55rem] hidden lg:inline image'/>
        </div>
    )
}