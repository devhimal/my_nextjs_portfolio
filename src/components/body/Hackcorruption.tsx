import React from 'react'
import Image from "next/image"

const Hackcorruption = () => {
  return (
    <div className="flex flex-col md:flex-row w-full py-40  px-20 bg-[#1F2937] text-[#f0f1f3]">

        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-start order-2 w-full md:w-[50%] space-y-4'>
            <h1 className='text-[orangered]'>
            Hackcorruption 2023</h1> 
            <p>HackCorruption, an initiative organized by Accountability Lab in partnership with various international businesses, is a dynamic three-day event. This remarkable gathering brings together over 60 participants hailing from Nepal, India, Pakistan, and Bangladesh. Their collective mission is to develop innovative tools and solutions aimed at combating corruption effectively.</p>
            <p>
Out of the diverse pool of over 60 participants, our team comprises five dedicated members: Richa, Samidha, Sarila, Manisha, and myself. Together, we are prepared to engage in fierce competition and utilize our collective expertise to develop groundbreaking tools that will effectively combat corruption.</p>
        </div>
        <div className='order-1 flex justify-center items-center md:pr-4 pb-6 md:pb-0 w-full md:w-[50%]'>
            <Image src="/hackcorruption.jpg" alt="picture" height={300} width={400} />
         </div>

    </div>
  )
}

export default Hackcorruption