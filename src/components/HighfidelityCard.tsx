import Image from 'next/image';
import React from 'react';

interface Props {
  imageSrc: string;
  text1: string;
  text2: string;
  icon: React.ReactNode;
}

const ImageTextIconComponent: React.FC<Props> = ({ imageSrc, text1, text2, icon }) => {
  return (
    <div >
      <div className='relative'>
        <Image alt='' src={imageSrc}/>
      </div>
      <div>
        <div >{text1}</div>
        <div >{text2}</div>
      </div>
      <div >
        <div>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ImageTextIconComponent;
