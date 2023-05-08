import React from 'react'
import vite from '../../../public/vite.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Splash = () => {
  return (
    <div className="flex h-full top-0  w-full  items-center px-10">
      <div className="flex-col  text-center lg:h-5/6 h-fit -mt-20 bg-teal-400 rounded-2xl w-full">
        <div className="md:flex justify-around text-left my-10 px-4    font-extrabold ">
          <div className="lg:flex lg:flex-col justify-between align-middle lg:w-1/3 w-full  md:pr-0 pr-10 ml-5">
            <h1 className="flex-col text-[50px] md:text-[3.5vw]  ">
              Do the right things for your brand and trust our Creators with your products 💡
            </h1>
            <p className="md:text-2xl text-base font-semibold mt-4 w-full text-justify">
              Cras hendrerit eget metus sodales fringilla. Sed vulputate finibus velit. Proin quis lectus neque. Fusce
              nisl sapien, faucibus et tempor sit amet.
            </p>
            <div>
              <button className="bg-teal-800 text-white text-[2.5vw] w-full rounded-lg px-4 py-2 mt-5 font-bold hover:border-2 hover:border-teal-800 hover:text-teal-800 hover:bg-teal-400 hover:animate-pulse">
                Get Started
                <AiOutlineArrowRight className="inline-block ml-2 text-[2.5vw] -mt-1" />
              </button>
            </div>
          </div>
          <div>
            <img src={vite} alt="" className="w-[30vw] lg:h-96 lg:block hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
