'use client';
import { useState } from 'react';
import { Jost } from 'next/font/google';
import { useUser } from '../context/UserContext';




const jost = Jost({
    subsets: ["latin"],
});

export default function LoginForm({ onSwitch, onClose }) {
    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login: loginUser } = useUser(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ login: loginInput, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            const data = await res.json();
            loginUser(data.user); 
            onClose(); 
        } else {
            const data = await res.json();
            setError(data.message || 'Ошибка входа');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-24">
            <h2 className="text-3xl text-[#4A5A6F] font-bold text-center">Вход</h2>

            <input
                type="text"
                placeholder="Логин"
                className="w-full pl-8 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 mt-8 mb-2 outline-0"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                className="w-full pl-8 mb-8 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 outline-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className='pl-10'>
                <label className='text-[#4A5A6F80] text-sm w-sm '>Отправляя заявку, даю согласие на обработку персональных данных</label>
            </div>
            {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

            <button type="submit" className={`${jost.className} w-full h-15 bg-[#4A5A6F] text-white rounded-[40px] text-2xl mt-2 hover:bg-[#8EACD5] cursor-pointer`}>
                Войти
            </button>

            <p className="text-2xl text-[#4A5A6F80] mt-4 text-center">
                Нет аккаунта?{' '}
                <button type="button" onClick={onSwitch} className="text-[#4A5A6F] text-2xl font-bold cursor-pointer hover:text-[#4A5A6F80] ">
                    Зарегистрироваться
                </button>
            </p>
        </form>
    );
}
