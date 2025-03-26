import Image from "next/image"
import { Jost } from 'next/font/google';


const jost = Jost({
    subsets: ["latin"],
});

const Autopark = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-[#4A5A6F] text-5xl font-bold place-self-center mt-10">Наш автопарк</h2>

            <div className="grid grid-cols-2 mt-10 mb-45">
                <div>
                    <p className={`${jost.className} text-[#4A5A6F] font-normal text-2xl w-[630px] mb-6`}>Автопарк TransGruz — это современный и разнообразный fleet транспортных средств, включающий тентованные полуприцепы, рефрижераторы, контейнеровозы
                        и спецтехнику. </p>
                    <img src='./img/park_1.png' />
                </div>
                <div>
                    <img src='./img/park_2.png' />
                    <p className={`${jost.className} text-[#4A5A6F] font-normal text-2xl mt-6`}>Все автомобили регулярно обслуживаются, оснащены GPS-мониторингом и соответствуют экологическим стандартам. Мы гарантируем надежность, оперативность и безопасность доставки грузов любого объема и сложности.</p>
                </div>
            </div>
        </div>
    )
}

export default Autopark