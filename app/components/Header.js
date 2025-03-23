
'use client';
// import Image from "next/image";
// import styles from './style.scss';
import Link from "next/link";
import { useState } from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';
import { Jost } from 'next/font/google';




const jost = Jost({
    subsets: ["latin"],
});




const Header = () => {
    const { user, logout } = useUser();
    const [showProfile, setShowProfile] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const router = useRouter();
    return (
        <header className="border-b-2 border-[#1D59AA] py-4 container mx-auto mt-5">
            <div className="flex flex-row items-center">
                <div className=" flex-1/3">
                    <Link href='/'>
                        <img src='./img/logo.svg' className="w-159px " />
                    </Link>
                </div>
                <nav className="flex  flex-2/3 text-xl font-bold">
                    <div className="flex flex-1/2 justify-center">
                        <ul className='flex items-center '>
                            <Link href='#our'>
                                <li className="px-4 hover:text-[#0000004D] transition">о нас</li>
                            </Link>
                            <Link href='#form'>
                                <button className="px-2 border-2 border-solid border-[#8EACD5] rounded-2xl hover:bg-[#8EACD5]  transition cursor-pointer ">оформить заказ</button>
                            </Link>
                            <Link href='#service'>
                                <li className="px-4 hover:text-[#0000004D] transition">услуги</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-1/2">
                        <div className="flex items-center flex-2/3 justify-end">
                            <img src="./img/phone.svg" className="pr-3"></img>
                            <p>+7(916)-944-94-49</p>
                        </div>
                        <div className="flex-1/3 ">
                            {user ? (
                                <img
                                    className=" cursor-pointer w-10 justify-self-end"
                                    onClick={() => setShowProfile(true)}
                                    src="/img/profile.svg" />
                            ) : (
                                <img
                                    src="./img/exit.svg"
                                    alt="Вход"
                                    className="justify-self-end cursor-pointer"
                                    onClick={() => {
                                        setAuthMode('login');
                                        setShowAuthModal(true);
                                    }}
                                />)}

                        </div>
                    </div>
                </nav>
            </div>
            <Modal show={showAuthModal} onClose={() => setShowAuthModal(false)}>
                {authMode === 'login' ? (
                    <LoginForm
                        onSwitch={() => setAuthMode('register')}
                        onClose={() => setShowAuthModal(false)}
                    />
                ) : (
                    <RegisterForm
                        onSwitch={() => setAuthMode('login')}
                        onClose={() => setShowAuthModal(false)}
                    />
                )}
            </Modal>

            <Modal show={showProfile} onClose={() => setShowProfile(false)}>
                <div className="">
                    <h2 className="text-3xl font-bold text-[#4A5A6F] mt-20">Здравствуйте, {user?.login}</h2>
                    <div className="flex items-center justify-between mt-8">
                        <ul className={`${jost.className} text-[#8EACD5] text-2xl font-bold `}>
                            <Link href="/my-orders">
                                <li onClick={() => setShowProfile(false)} className="pb-8 hover:text-[#4A5A6F] cursor-pointer">
                                    Мои заказы
                                </li>
                            </Link>
                            <Link href='#form'>
                                <li onClick={() => setShowProfile(false)} className="hover:text-[#4A5A6F]">Новый заказ</li>
                            </Link>
                        </ul>
                        <img src="./img/modal.svg" />
                    </div>
                    <button
                        onClick={() => {
                            logout();
                            setShowProfile(false);
                            router.push('/');
                        }}
                        className={`${jost.className} w-full h-15 bg-[#4A5A6F] text-white rounded-[40px] text-2xl mt-8 cursor-pointer hover:bg-[#8EACD5]`}
                    >
                        Выйти
                    </button>
                </div>
            </Modal>
        </header >
    )
}

export default Header