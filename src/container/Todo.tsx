import Button from '@/components/ux/Button';
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Icons from '@/components/Icons';

interface TodoProps {
  
}

const Todo: FC<TodoProps> = ({  }) => {
  return (
    <div className='flex flex-col mt-32'>
     <Button className=' flex justify-between' variant='ghost'>
    <p>To Do</p>
    <div className='border  rounded-md h-2 w-5 p-2 text-white bg-black'>3</div>
     </Button>
     <HighfidelityCard icon={Icons.Oslider}/>
    </div>
   
  )
}

export default Todo;