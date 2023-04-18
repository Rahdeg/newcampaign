import Button from '@/components/ux/Button';
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';

interface CompletedProps {
  
}

const Completed: FC<CompletedProps> = ({  }) => {
  return (
    <div className='flex flex-col mt-32' >
    <Button className=' flex justify-between' variant='ghost'>
   <p className='text-red-300'>To Do</p>
   <p className='bg-black'>3</p>
    </Button>
    <HighfidelityCard icon={Icons.Oslider}/>
   </div>
  
  )
}

export default Completed;