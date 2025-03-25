'use client';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ["latin"],
});

export default function MyOrdersPage() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const res = await fetch(`/api/orders?userId=${user.id}`);
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    window.location.replace("/");
    return;
  }

  return (<div>
    <Header />
    <div className=' bg-repeat  ' style={{ backgroundImage: "url('../img/blur_order.svg')" }} >
      <div className="container mx-auto ">
        <h1 className="text-5xl text-[#4A5A6F] font-bold mt-9 mb-20">Мои заказы</h1>
        {orders.length === 0 ? (
          <p className='text-5xl text-[#4A5A6F] font-bold pb-50'>Нет заказов</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="pb-20">
              <p className='text-5xl text-[#4A5A6F] font-bold'>{new Date(order.created_at).toLocaleDateString()}</p>
              <div className="bg-white p-6 rounded-[20px]   mt-2.5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[#4A5A6F] text-2xl">

                  <p >Адрес погрузки</p>
                  <p className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4 inline-block`}>{order.pickup_address}</p>

                  <p >Адрес выгрузки</p>
                  <p className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}>{order.delivery_address}</p>

                  <p >Тип перевозки</p>
                  <p className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}>{order.transport_type}</p>

                  <p >Количество грузчиков</p>
                  <p className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4 `}>{order.loaders}</p>

                  <p >Номер телефона получателя</p>
                  <p className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}>{order.phone}</p>
                </div>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
    <Footer/>
  </div>
  );
}
