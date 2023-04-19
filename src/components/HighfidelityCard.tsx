import Image from 'next/image';
import React from 'react';
import IconText from './IconText';
import Icons from './Icons';
import type { StaticImageData } from "next/image"

interface Props {
  icon: React.ReactNode;
  image: StaticImageData;
}

const ImageTextIconComponent: React.FC<Props> = ({ icon ,image}) => {
  return (
    <div className='flex bg-white border rounded-xl mt-5 xl:w-[320px] xxl:w-[480px]'>
    <div className="flex flex-col p-4 xl:w-[320px] xxl:w-[480px]">
      <div className="flex-1 relative w-56 h-28 xl:w-[280px]  xxl:w-[440px] ">
        <Image src={image} alt="Image" className="w-full h-full " width={100} height={100} />
      </div>
      <div className="flex flex-col">
        <div className="text-black font-semibold text-xl my-1">Highfiderlity Design</div>
        <div className="text-[#B8B9BD]">Make clear design and color</div>
      </div>
      <div className="flex flex-col mt-2">
        <div className='flex items-center justify-between'>
        <IconText icon={Icons.Check} text='Progress'/>
        <p className="text-black font-semibold  ">2/10</p>
        </div>
        <div className=" w-full my-3 border rounded-3xl">{icon}</div>
        <div className='flex justify-between'>
          <div className='flex items-center justify-center gap-3'>
            <span className='flex items-center justify-center gap-1'> {Icons.Comment} 7</span>
            <span className='flex items-center justify-center gap-1'> {Icons.Chain} 2</span>
          </div>
         <Image src={Icons.IMG} alt=''/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageTextIconComponent;
