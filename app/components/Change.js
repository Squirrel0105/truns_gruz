'use client'

const Change = ({ pickupAddress, setPickupAddress, deliveryAddress, setDeliveryAddress }) => {
    const swapAddresses = () => {
        setPickupAddress(deliveryAddress);
        setDeliveryAddress(pickupAddress);
    };
    return (
        <div>
            <div className="border-2 border-solid border-[#8EACD5] bg-white rounded-full h-22 w-xl place-self-center flex items-center">
                <div className='ml-8 '>
                    <label className='text-xl text-[#4A5A6F] opacity-50'>Введите</label><br />
                    <input type='text' required placeholder='Адрес погрузки' value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)} className='text-2xl text-[#4A5A6F] outline-0' />
                </div>
            </div>

            <img src='./img/icon_form_change.svg' alt="swap"
                onClick={swapAddresses} className="place-self-center my-2 cursor-pointer bg-transparent" />
            <div className="border-2 border-solid border-[#8EACD5] bg-white rounded-full h-22 w-xl place-self-center flex items-center">
                <div className='ml-8 '>
                    <label className='text-xl text-[#4A5A6F] opacity-50'>Введите</label><br />
                    <input type='text' required placeholder='Адрес выгрузки' value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)} className='text-2xl text-[#4A5A6F] outline-0' />
                </div>
            </div>
        </div>
    )
}

export default Change