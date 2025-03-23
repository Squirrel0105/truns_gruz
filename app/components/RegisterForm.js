'use client';
import { useState } from 'react';
import { Jost } from 'next/font/google';


const jost = Jost({
    subsets: ["latin"],
});

export default function RegisterForm({ onSwitch }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      return setError('Пароли не совпадают');
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      alert('Успешная регистрация!');
      onSwitch(); 
    } else {
      const data = await res.json();
      setError(data.message || 'Ошибка регистрации');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-3xl text-[#4A5A6F] font-bold text-center mt-15">Регистрация</h2>

      <input
        type="text"
        placeholder="Логин"
        className="w-full pl-8 mt-8 mb-2 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 outline-0"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        className="w-full pl-8 mb-2 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 outline-0"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Повторите пароль"
        className="w-full pl-8 mb-6 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 outline-0"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        required
      />
      <div className='pl-10'>
        <label className='text-[#4A5A6F80] text-sm w-sm '>Отправляя заявку, даю согласие на обработку персональных данных</label>
      </div>

      {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

      <button type="submit" className={`${jost.className} w-full h-15 bg-[#4A5A6F] text-white rounded-[40px] text-2xl mt-2 mb-2 hover:bg-[#8EACD5] cursor-pointer`}>
        Зарегистрироваться
      </button>

      <p className="text-2xl text-[#4A5A6F80] mt-4 text-center">
        Уже есть аккаунт?{' '}
        <button type="button" onClick={onSwitch} className="text-[#4A5A6F] text-2xl font-bold cursor-pointer hover:text-[#4A5A6F80] ">
          Войти
        </button>
      </p>
    </form>
  );
}
