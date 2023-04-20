"use client"
import Button from '@/components/ux/Button';
import React, { FC, useEffect, useState } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';
import UsabilityCard from '@/components/UsabilityCard';

interface TodoProps {
  
}

const Todo: FC<TodoProps> = ({  }) => {

  const windowWidth = window.innerWidth
  return (
    <div className='flex flex-col  xl:w-[320px] xxl:w-[480px]'>
     <Button className=' flex items-center justify-between xl:w-[320px] xxl:w-[480px]' variant='white'>
    <p className=' text-xl font-bold'>To Do</p>
    <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>3</div>
     </Button>
     <div className=' xxl:hidden'>
     <HighfidelityCard icon={Icons.Wslider} image={windowWidth <= 1290 ? Icons.SmallcardImage :windowWidth <= 1440 ? Icons.mdcardImage: windowWidth > 1440 ? Icons.largecardImage :Icons.SmallcardImage }/>
     </div>
     
   <UsabilityCard icon={Icons.Wslider}/>
    <Button className='flex items-center justify-center mt-2 gap-3 xl:w-[320px] xxl:w-[480px]' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
    </div>
   
  )
}

export default Todo;