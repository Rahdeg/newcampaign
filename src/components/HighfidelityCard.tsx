import Image from 'next/image';
import React from 'react';
import IconText from './IconText';
import Icons from './Icons';

interface Props {
  icon: React.ReactNode;
}

const ImageTextIconComponent: React.FC<Props> = ({ icon }) => {
  return (
    <div className='flex bg-white border rounded-xl mt-5'>
    <div className="flex flex-col p-4">
      <div className="flex-1 relative">
        <Image src={Icons.cardImage} alt="Image" className="max-w-full h-auto"/>
      </div>
      <div className="flex flex-col">
        <div className="">Highfiderlity Design</div>
        <div className="">Make clear design and color</div>
      </div>
      <div className="flex flex-col mt-2">
        <div className='flex items-center justify-between'>
        <IconText icon={Icons.Check} text='Progress'/>
        <p>2/10</p>
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
