import Image from "next/image"

const Footer = () => {
    return (
        <div className="bg-linear-to-br from-[#a1bbe1] to-[#8eacd500] h-93 ">
            <div className="container mx-auto flex justify-between pt-30">
                <div>
                    <img src="./img/logo_3.svg" />
                    <div className="flex pt-22">
                        <img src="./img/inst.svg" />
                        <img src="./img/tg.svg" className="px-8" />
                        <img src="./img/vk.svg" />
                    </div>
                </div>
                <div className="font-medium">
                    <h4 className="text-2xl text-[#4A5A6F] mb-6">Контакты</h4>
                    <ul className="text-xl text-[#8EACD5] ">
                        <li>gruz@trans.com</li>
                        <li className="py-4">+7(916)944-94-49</li>
                        <li>круглосуточно</li>
                    </ul>
                </div>
                <div className="font-medium">
                    <h4 className="text-2xl text-[#4A5A6F] mb-6">Оплата</h4>
                    <ul className="text-xl text-[#8EACD5] ">
                        <li>Наличными при получени</li>
                        <li className="pt-4">Картой на сайте/<br/>
                            при получении</li>
                    </ul>
                </div>
                <div className="font-medium">
                    <h4 className="text-2xl text-[#4A5A6F] mb-6">Помощь</h4>
                    <ul className="text-xl text-[#8EACD5] ">
                        <li>Сообщить об ошибке</li>
                        <li className="pt-4">Перевозка и оплата</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer