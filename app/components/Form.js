"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Autopark from "./Avtopark";
import Change from "./Change";
import { useUser } from "../context/UserContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Modal from "./Modal";

const Form = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [transportType, setTransportType] = useState("Тип перевозки");
  const [loaders, setLoaders] = useState(0);
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const { user } = useUser();
  const [prices, setPrices] = useState({
    servicePrices: [],
    loader: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/prices", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          throw new Error(data.message || "Ошибка загрузки цен");
        }

        setPrices({
          servicePrices: data.servicePrices || [],
          loader: data.loader || 0,
        });
      } catch (error) {
        console.error("Ошибка загрузки цен:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrices();
  }, []);

  useEffect(() => {
    if (user && user.phone) {
      setPhone(user.phone);
    }
  }, [user]);

  useEffect(() => {
    if (isLoading) return;

    const service = prices.servicePrices.find(
      (item) => item.service_type === transportType
    );
    const servicePrice = service
      ? parseFloat(service.price).toFixed(2)
      : "0.00";
    const loadersPrice = (
      parseInt(loaders) * parseFloat(prices.loader)
    ).toFixed(2);
    const totalPrice = (
      parseFloat(servicePrice) + parseFloat(loadersPrice)
    ).toFixed(2);

    setTotalPrice(totalPrice);
  }, [transportType, loaders, prices]);

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

    if (!user) {
      setAuthMode("login");
      setShowAuthModal(true);
      return;
    }

    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pickupAddress,
        deliveryAddress,
        transportType,
        loaders,
        phone,
        userId: user?.id,
        totalPrice,
        loadersPrice: loaders * prices.loader,
      }),
    });

    if (res.ok) {
      setSuccess("Заявка успешно отправлена!");
      setPickupAddress("");
      setDeliveryAddress("");
      setTransportType("Тип перевозки");
      setLoaders(0);
      setPhone("");
    } else {
      setSuccess("Ошибка при отправке заявки");
    }
  };

  return (
    <div
      id="form"
      className="bg-no-repeat h-full "
      style={{ backgroundImage: "url('./img/blur_5.svg')" }}
    >
      <div className="container mx-auto mt-68 grid grid-cols-2 pb-40">
        <div>
          <img src="./img/logo_2.svg" className="" />
          <h2 className="text-4xl font-bold text-[#8EACD5] my-6">
            Ваш комфорт и надежность
          </h2>
          <img src="./img/photo_form.png" />
        </div>

        <div className="w-2xl bg-linear-to-br from-[#8eacd587] to-[#2220] rounded-[40px]">
          <form action="" method="" className=" mt-10" onSubmit={handleSubmit}>
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
              <div className="ml-8 ">
                <label className="text-xl text-[#4A5A6F] opacity-50">
                  Номер телефона
                </label>
                <br />
                <input
                  type="tel"
                  placeholder="+7(_ _ _) _ _ _ - _ _ - _ _"
                  className="text-2xl text-[#4A5A6F] outline-0"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="ml-10">
              <p className="text-2xl text-[#4A5A6F] font-bold mt-6">
                Итого: {totalPrice}
              </p>
            </div>

            <div className="grid place-items-center">
              <label className="text-sm text-[#4A5A6F] opacity-50  mt-6">
                Отправляя заявку, даю согласие на обработку персональных данных
              </label>
              <button className="bg-[#4A5A6F] text-white text-2xl font-bold w-xl h-19 rounded-[40px]  my-4 cursor-pointer hover:bg-[#8EACD5]">
                Оформить заказ
              </button>
              {success && (
                <p className="text-[#4A5A6F] text-center">{success}</p>
              )}
            </div>
          </form>
        </div>
      </div>
      <Modal show={showAuthModal} onClose={() => setShowAuthModal(false)}>
        {authMode === "login" ? (
          <LoginForm
            onSwitch={() => setAuthMode("register")}
            onClose={() => setShowAuthModal(false)}
          />
        ) : (
          <RegisterForm
            onSwitch={() => setAuthMode("login")}
            onClose={() => setShowAuthModal(false)}
          />
        )}
      </Modal>
      <Autopark />
    </div>
  );
};

export default Form;
