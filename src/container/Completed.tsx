"use client"
import Button from '@/components/ux/Button';
import React, { FC, useEffect, useState } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';
import UsabilityCard from '@/components/UsabilityCard';

interface CompletedProps {
  
}

const Completed: FC<CompletedProps> = ({  }) => {
  const [windowWidth, setwindowWidth] = useState<number>(0)

  useEffect(() => {
    const windowWidth = window.innerWidth
    setwindowWidth(windowWidth)
  }, [])
  

  return (
    <div className='flex flex-col  xl:w-[320px] xxl:w-[480px]' >
    <Button className=' flex items-center justify-between xl:w-[320px] xxl:w-[480px]' variant='white'>
   <p className='text-xl font-bold'>Completed</p>
   <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>2</div>
    </Button>
    <UsabilityCard icon={Icons.Gnslider}/>
    <HighfidelityCard icon={Icons.Gslider} image={windowWidth > 1290 ? Icons.mdcardImage3 :windowWidth > 1440 ? Icons.largecardImage2: Icons.SmallcardImage3 }/>
    <Button className='flex items-center justify-center mt-2 gap-3 xl:w-[320px] xxl:w-[480px]' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
   </div>
  
  )
}

export default Completed;