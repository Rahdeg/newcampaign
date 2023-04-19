import Button from '@/components/ux/Button';
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';
import IconText from '@/components/IconText';
import Image from 'next/image';
import UsabilityCard from '@/components/UsabilityCard';

interface CompletedProps {
  
}

const Completed: FC<CompletedProps> = ({  }) => {
  return (
    <div className='flex flex-col ' >
    <Button className=' flex justify-between' variant='white'>
   <p className='text-xl font-bold'>Completed</p>
   <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>2</div>
    </Button>
    <UsabilityCard icon={Icons.Gnslider}/>
    <HighfidelityCard icon={Icons.Gnslider} image={Icons.cardImage}/>
    <Button className='flex items-center justify-center mt-2 gap-3 xl:w-[320px] xxl:w-[480px]' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
   </div>
  
  )
}

export default Completed;