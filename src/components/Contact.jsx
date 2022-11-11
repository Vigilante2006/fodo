import React from 'react'
import { AiFillShop, AiOutlinePhone, AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai";

function Contact() {
    return (
        <div className='max-w-full h-full flex flex-col justify-center items-center bg-[url("https://images.pexels.com/photos/5701880/pexels-photo-5701880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-no-repeat text-white space-y-5'>
            <h1 className="text-4xl font-bold my-5 lg:text-7xl md:text-6xl sm:text-5xl">  <span className="text-orange-500">Contact </span>Us</h1>
            <div className='flex flex-col justify-center items-center my-5 lg:w-4/5 md:w-4/5 sm:w-full '>
                <h3 className='text-2xl font-bold'>HOW TO GET IN TOUCH?</h3>
                <p className='pt-2 text-sm text-center w-4/5 lg:w-1/2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum molestiae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas nobis ipsam cumque eum?.</p>
            </div>
            <div className='flex flex-wrap h-full  lg:flex-row lg:w-3/5 lg:justify-between lg:items-start md:w-4/5 md:justify-center customMobile '>
                <div className='flex flex-col h-full justify-center items-start space-y-5 lg:w-1/2 md:w-4/5 md:mb-10 '>
                    <div className='space-y-3 max-w-full'>
                        <h5 className='font-bold text-sm flex'> <AiFillShop size={20} className="mr-2" />ADDRESS</h5>
                        <p className='text-sm '>8-B, Thornhill Road, Civil Lines, Allahabad - 211001,</p></div>
                    <div className='space-y-3 max-w-full'>
                        <h5 className='font-bold text-sm flex'> <AiOutlinePhone size={20} className="mr-2" />PHONE NUMBER</h5>
                        <p className='text-sm'>+91 1123456789</p></div>
                    <div className='space-y-3 max-w-full'>
                        <h5 className='font-bold text-sm flex'><AiOutlineMail size={20} className="mr-2" />  EMAIL</h5>
                        <p className='text-sm'>contact.support@xyz.com</p></div>
                    <div className='space-y-3 max-w-full'>
                        <h5 className='font-bold text-sm'>FOLLOW US</h5>
                        <div className='flex flex-row justify-start items-center w-max '>
                            <AiOutlineInstagram size={38} className="bg-orange-600 rounded-sm p-1 cursor-pointer mr-[10px]" />
                            <AiOutlineFacebook size={38} className="bg-orange-600 rounded-sm p-1 cursor-pointer mr-[10px]" />
                            <AiOutlineTwitter size={38} className="bg-orange-600 rounded-sm p-1 cursor-pointer mr-[10px]" />
                            <AiOutlineGooglePlus size={38} className="bg-orange-600 rounded-sm p-1 cursor-pointer mr-[10px]" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-full justify-start items-center space-y-5 lg:w-1/2 md:w-4/5 sm:w-4/5 '>
                    <div className='customForm flex flex-row w-full h-full justify-start items-start '>
                        <input type="text" placeholder='Name' className='px-3 w-1/2 h-[55px] mr-1 bg-transparent border border-white' />
                        <input type="text" placeholder='Email' className='px-3 w-1/2 h-[55px] bg-transparent border border-white' />
                    </div>
                    <input type="text" placeholder='Subject' className='px-3 w-full h-[55px] bg-transparent border border-white' />
                    <textarea name="" id="" placeholder='Message' className='px-3 pt-4 w-full h-[85px] bg-transparent border border-white'></textarea>
                    <button className=' !mb-10 bg-orange-600 border border-orange-600 rounded w-2/2 h-[40px] font-bold hover:bg-transparent hover:text-orange-600'>BOOK A TABLE</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
