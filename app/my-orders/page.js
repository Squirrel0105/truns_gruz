"use client";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
});

export default function MyOrdersPage() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [formData, setFormData] = useState({
    pickup_address: "",
    delivery_address: "",
    phone: "",
  });

  const fetchOrders = async () => {
    const res = await fetch(`/api/orders?userId=${user.id}`);
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    if (!user) return;

    fetchOrders();
  }, [user]);

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

  const startEditing = (order) => {
    setEditingOrder(order.id);
    setFormData({
      pickup_address: order.pickup_address,
      delivery_address: order.delivery_address,
      phone: order.phone,
    });
  };

  const cancelEditing = () => {
    setEditingOrder(null);
    setFormData({
      pickup_address: "",
      delivery_address: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (orderId) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Ошибка обновления");

      await fetchOrders();
      cancelEditing();
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  if (!user) {
    window.location.replace("/");
    return;
  }

  return (
    <div>
      <Header />
      <div
        className=" bg-repeat  "
        style={{ backgroundImage: "url('../img/blur_order.svg')" }}
      >
        <div className="container mx-auto ">
          <h1 className="text-5xl text-[#4A5A6F] font-bold mt-9 mb-20">
            Мои заказы
          </h1>
          {orders.length === 0 ? (
            <p className="text-5xl text-[#4A5A6F] font-bold pb-50">
              Нет заказов
            </p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="pb-20">
                <div className="flex justify-between items-center">
                  <p className="text-5xl text-[#4A5A6F] font-bold">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  {editingOrder !== order.id ? (
                    <button
                      onClick={() => startEditing(order)}
                      className="bg-[#4A5A6F] text-white px-4 py-2 cursor-pointer rounded-[40px] hover:bg-[#8EACD5]"
                    >
                      Изменить
                    </button>
                  ) : (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleSubmit(order.id)}
                        className="bg-[#4A5A6F] text-white px-4 py-2  hover:bg-green-700 cursor-pointer rounded-[40px]"
                      >
                        Сохранить
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="bg-[#8EACD5] text-white px-4 py-2 hover:bg-red-700 cursor-pointer rounded-[40px]"
                      >
                        Отмена
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-white p-6 rounded-[20px] mt-2.5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[#4A5A6F] text-2xl">
                    <p>Адрес погрузки</p>
                    {editingOrder === order.id ? (
                      <input
                        name="pickup_address"
                        value={formData.pickup_address}
                        onChange={handleChange}
                        className={`${jost.className} border-2 border-[#8EACD5] rounded-md py-2 px-4`}
                      />
                    ) : (
                      <p
                        className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}
                      >
                        {order.pickup_address}
                      </p>
                    )}

                    <p>Адрес выгрузки</p>
                    {editingOrder === order.id ? (
                      <input
                        name="delivery_address"
                        value={formData.delivery_address}
                        onChange={handleChange}
                        className={`${jost.className} border-2 border-[#8EACD5] rounded-md py-2 px-4`}
                      />
                    ) : (
                      <p
                        className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}
                      >
                        {order.delivery_address}
                      </p>
                    )}

                    <p>Номер телефона</p>
                    {editingOrder === order.id ? (
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        type="tel"
                        className={`${jost.className} border-2 border-[#8EACD5] rounded-md py-2 px-4`}
                      />
                    ) : (
                      <p
                        className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}
                      >
                        {order.phone}
                      </p>
                    )}

                    <p>Тип перевозки</p>
                    <p
                      className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}
                    >
                      {order.transport_type}
                    </p>

                    <p>Количество грузчиков</p>
                    <p
                      className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}
                    >
                      {order.loaders}
                    </p>

                    <p>Сумма заказа</p>
                    <p
                      className={`${jost.className} bg-[#8EACD533] rounded-md py-2 px-4`}
                    >
                      {order.total_price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
