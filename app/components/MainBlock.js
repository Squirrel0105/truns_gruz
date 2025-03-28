import Image from 'next/image'

const MainBlock = () => {
    return (
        <div className=' bg-no-repeat h-lvh ' style={ {backgroundImage: "url('./img/blur_1.svg')"} } >
            <div className='container mx-auto'>
                <img src='./img/earth.png' className='absolute right-24 top-14 bg-auto'></img>
                <div>
                    <h1 className='w-4/5 text-7xl font-bold text-[#4A5A6F] py-26'>Грузоперевозки по Москве и Московской области</h1>
                    <p className='w-[521px] text-2xl font-medium text-[#4A5A6F]'>Скорость, надежность, профессионализм — ваш груз в надежных руках!</p>
                    <div className='bg-[#F7FCFF] rounded-lg flex items-center my-14 mb-3 p-3 w-sm'>
                        <img src='./img/garant.svg' className='pr-2' />
                        <p className='font-medium text-xl'>Гарантия безопасности груза</p>
                    </div>
                    <div className='bg-[#F7FCFF] items-center rounded-lg flex  p-3 w-sm'>
                        <img src='./img/time.svg' className='pr-2' />
                        <p className='font-medium text-xl'>Точные сроки доставки</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainBlock