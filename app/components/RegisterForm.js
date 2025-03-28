"use client";
import { useState } from "react";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
});

export default function RegisterForm({ onSwitch }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, "");

    if (numbers.startsWith("7") || numbers.startsWith("8")) {
      numbers = numbers.substring(1);
    }

    numbers = numbers.substring(0, 10);

    let formatted = "";

    if (numbers.length > 0) {
      formatted += "+7 ";
      formatted += " (" + numbers.substring(0, 3);
    }
    if (numbers.length >= 4) {
      formatted += ") " + numbers.substring(3, 6);
    }
    if (numbers.length >= 7) {
      formatted += "-" + numbers.substring(6, 8);
    }
    if (numbers.length >= 9) {
      formatted += "-" + numbers.substring(8, 10);
    }

    return formatted;
  };

  const handleChange = (e) => {
    const newValue = formatPhoneNumber(e.target.value);
    setPhone(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      return setError("Пароли не совпадают");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ login, password, phone }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      onSwitch();
    } else {
      const data = await res.json();
      setError(data.message || "Ошибка регистрации");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-3xl text-[#4A5A6F] font-bold text-center mt-3">
        Регистрация
      </h2>

      <input
        type="text"
        placeholder="Логин"
        className="w-full pl-8 mt-8 mb-2 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 outline-0"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <input
        name="phone"
        value={phone}
        onChange={handleChange}
        placeholder="+7 (___) ___-__-__"
        type="tel"
        className="w-full pl-8 mb-2 border-2 border-[#8EACD5] rounded-[40px] bg-white text-[#4A5A6F80] h-14 outline-0"
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
      <div className="pl-10">
        <label className="text-[#4A5A6F80] text-sm w-sm ">
          Отправляя заявку, даю согласие на обработку персональных данных
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center font-bold">{error}</p>
      )}

      <button
        type="submit"
        className={`${jost.className} w-full h-15 bg-[#4A5A6F] text-white rounded-[40px] text-2xl mt-2 mb-2 hover:bg-[#8EACD5] cursor-pointer`}
      >
        Зарегистрироваться
      </button>

      <p className="text-2xl text-[#4A5A6F80] mt-4 text-center">
        Уже есть аккаунт?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-[#4A5A6F] text-2xl font-bold cursor-pointer hover:text-[#4A5A6F80] "
        >
          Войти
        </button>
      </p>
    </form>
  );
}
