import Button from '@/components/ux/Button';
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';
import IconText from '@/components/IconText';
import Image from 'next/image';
import UsabilityCard from '@/components/UsabilityCard';

interface TodoProps {
  
}

const Todo: FC<TodoProps> = ({  }) => {
  return (
    <div className='flex flex-col  xl:w-[320px] xxl:w-[480px]'>
     <Button className=' flex items-center justify-between xl:w-[320px] xxl:w-[480px]' variant='white'>
    <p className=' text-xl font-bold'>To Do</p>
    <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>3</div>
     </Button>
     <HighfidelityCard icon={Icons.Wslider} image={Icons.cardImage}/>
   <UsabilityCard icon={Icons.Wslider}/>
    <Button className='flex items-center justify-center mt-2 gap-3 xl:w-[320px] xxl:w-[480px]' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
    </div>
   
  )
}

export default Todo;