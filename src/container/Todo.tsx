import Button from '@/components/ux/Button';
import React, { FC } from 'react'

interface TodoProps {
  
}

const Todo: FC<TodoProps> = ({  }) => {
  return (
    <div className='flex flex-col'>
     <Button className=' flex justify-between'>
    <p>To Do</p>
    <p className='p-3 bg-black'>3</p>
     </Button>
     <HighfidelityCard/>
    </div>
   
  )
}

export default Todo;