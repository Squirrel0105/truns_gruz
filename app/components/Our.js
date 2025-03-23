import Image from 'next/image'
import { Jost } from 'next/font/google';


const jost = Jost({
    subsets: ["latin"],
});

const Our = () => {
    return (
        <div id='our' className='bg-repeat-x w-full h-lvh mt-0' style={{ backgroundImage: "url('./img/blur_2.svg')" }} >
            <div className='container mx-auto'>
                <h2 className='text-[#4A5A6F] text-5xl font-bold text-center mt-15'>Наши преимущества</h2>
                <div className='grid grid-flow-col grid-rows-3 gap-6 mt-10'>
                    <div className='bg-[#F7FCFF] rounded-2xl items-center row-span-1 row-end-1'>
                        <div className='flex items-center justify-center px-6 pt-6'>
                            <img src='./img/icon_r.svg' className='pr-6' />
                            <p className='text-3xl font-bold'>Грузовой рынок</p>
                        </div>
                        <img src='./photo/photo_1.png' />
                        <p className={`${jost.className} text-[#4A5A6F] font-normal text-2xl w-sm p-6`}>Мы поддерживаем надежную систему с помощью страхования грузов, онлайн-платежей
                            и безбумажного рабочего процесса. Выведите бизнес
                            на новый уровень.</p>
                    </div>
                    <div className='bg-[#F7FCFF] rounded-2xl items-center mt-25 row-span-4 row-end-4'>
                        <div className='flex items-center justify-center p-6'>
                            <img src='./img/icon_p.svg' className='pr-6' />
                            <p className='text-3xl font-bold'>Перспективы</p>
                        </div>
                        <img src='./photo/photo_2.png' />
                        <p className={`${jost.className} text-[#4A5A6F] font-normal text-2xl w-sm p-6`}>Откройте новые возможности
                            для роста вашего бизнеса.
                            Мы с вами от двери до двери.</p>
                    </div>
                    <div className='bg-[#F7FCFF] rounded-2xl items-center row-span-1 row-end-1'>
                        <div className='flex items-center justify-between px-6 pt-6 pb-2.5'>
                            <img src='./img/icon_d.svg' className='pr-6' />
                            <p className='text-3xl font-bold'>Доставка
                                и логистика</p>
                        </div>
                        <img src='./photo/photo_3.png' />
                        <p className={`${jost.className} text-[#4A5A6F] font-normal text-2xl w-sm p-6`}>Найдите разнообразные решения с помощью разнообразия транспорта. Быстрые и гибкие решения для удовлетворения всех ваших потребностей
                            в цепочке поставок.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our