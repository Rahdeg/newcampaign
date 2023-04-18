import Button from '@/components/ux/Button';
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';

interface InprogressProps {
  
}

const Inprogress: FC<InprogressProps> = ({  }) => {
  return (
    <div className='flex flex-col mt-32'>
    <Button className=' flex justify-between' variant='ghost'>
   <p>To Do</p>
   <p className='p-3 bg-black'>3</p>
    </Button>
    <HighfidelityCard icon={Icons.Oslider}/>
   </div>
  
  )
}

export default Inprogress;