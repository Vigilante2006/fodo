import React from 'react'

function Cardlines() {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/*Cards */}
            <div className='rounded-xl relative'>
                {/*Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's out</p>
                    <p className='px-2'>through 8/26</p>
                    <button className='border-white font-bold bg-white text-black mx-2 absolute bottom-4 hover:bg-transparent hover:text-white'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/11774178/pexels-photo-11774178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            {/*Cards */}
            <div className='rounded-xl relative'>
                {/*Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Hot & Spicy Bbulgogi  </p>
                    <p className='px-2'>Satisfy Your Cravings</p>
                    <button className='border-white font-bold bg-white text-black mx-2 absolute bottom-4 hover:bg-transparent hover:text-white'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            {/*Cards */}
            <div className='rounded-xl relative'>
                {/*Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Lucky Direction Sushi</p>
                    <p className='px-2'>Ehomaki</p>
                    <button className='border-white font-bold bg-white text-black mx-2 absolute bottom-4 hover:bg-transparent hover:text-white'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/12878170/pexels-photo-12878170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>
    )
}

export default Cardlines
