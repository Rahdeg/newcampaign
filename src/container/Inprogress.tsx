"use client"
import Button from '@/components/ux/Button';
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';


interface InprogressProps {
  
}

const Inprogress: FC<InprogressProps> = ({  }) => {
  const windowWidth = window.innerWidth
  return (
    <div className='flex flex-col xxl:w-[480px]'>
    <Button className=' flex justify-between' variant='white'>
   <p className='text-xl font-bold'>In progress</p>
   <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>1</div>
    </Button>
    <HighfidelityCard icon={Icons.Oslider} image={windowWidth > 1290 ? Icons.mdcardImage2 :windowWidth > 1440 ? Icons.largecardImage1: Icons.SmallcardImage2 }/>
    <Button className='flex items-center justify-center mt-2 gap-3 xl:w-[320px] xxl:w-[480px]' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
   </div>
  
  )
}

export default Inprogress;