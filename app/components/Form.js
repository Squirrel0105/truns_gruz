'use client';
import { useState } from 'react';
import Image from "next/image"
import Dropdown from "./Dropdown"
import Autopark from "./Autopark"
import Change from "./Change"
import { useUser } from '../context/UserContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Modal from './Modal';




const Form = () => {
    const [pickupAddress, setPickupAddress] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [transportType, setTransportType] = useState('Тип перевозки');
    const [loaders, setLoaders] = useState(0);
    const [phone, setPhone] = useState('');
    const { user } = useUser();
    const [success, setSuccess] = useState('');
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!user) {
            setAuthMode('login');
            setShowAuthModal(true);
            return;
        }
        
        const res = await fetch('/api/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pickupAddress,
                deliveryAddress,
                transportType,
                loaders,
                phone,
                userId: user?.id,
            }),
        });

        if (res.ok) {
            setSuccess('Заявка успешно отправлена!');


            setPickupAddress('');
            setDeliveryAddress('');
            setTransportType('Тип перевозки');
            setLoaders(0);
            setPhone('');
        } else {
            setSuccess('Ошибка при отправке заявки');
        }
    };


    return (
        <div id='form' className='bg-no-repeat h-full ' style={{ backgroundImage: "url('./img/blur_5.svg')" }} >
            <div className='container mx-auto mt-68 grid grid-cols-2 '>
                <div>
                    <img src='./img/logo_2.svg' className='' />
                    <h2 className='text-4xl font-bold text-[#8EACD5] my-6'>Ваш комфорт и надежность</h2>
                    <img src='./img/photo_form.png' />
                </div>

                <div className='w-2xl bg-linear-to-br from-[#8eacd587] to-[#2220] rounded-[40px]'>
                    <form action='' method='' className=' mt-10' onSubmit={handleSubmit}>
                        <Change
                            pickupAddress={pickupAddress}
                            setPickupAddress={setPickupAddress}
                            deliveryAddress={deliveryAddress}
                            setDeliveryAddress={setDeliveryAddress}
                        />

                        <Dropdown
                            transportType={transportType}
                            setTransportType={setTransportType}
                            loaders={loaders}
                            setLoaders={setLoaders}
                        />

                        <div className="border-2 border-solid border-[#8EACD5] bg-white rounded-full h-22 w-xl place-self-center flex items-center">
                            <div className='ml-8 '>
                                <label className='text-xl text-[#4A5A6F] opacity-50'>Номер телефона</label><br />
                                <input type='text' placeholder='+7(_ _ _) _ _ _ - _ _ - _ _' className='text-2xl text-[#4A5A6F] outline-0'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="grid place-items-center">
                            <label className="text-sm text-[#4A5A6F] opacity-50  mt-6">Отправляя заявку, даю согласие на обработку персональных данных</label>
                            <button className="bg-[#4A5A6F] text-white text-2xl font-bold w-xl h-19 rounded-[40px]  my-4 cursor-pointer hover:bg-[#8EACD5]">Оформить заказ</button>
                            {success && <p className="text-[#4A5A6F] text-center">{success}</p>}

                        </div>
                    </form>
                </div>
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
            <Autopark />
        </div>
    )
}

export default Form