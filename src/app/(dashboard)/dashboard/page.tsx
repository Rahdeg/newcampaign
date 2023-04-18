import IconText from '@/components/IconText';
import Icons from '@/components/Icons';
import Button from '@/components/ux/Button';
import Completed from '@/container/Completed';
import Inprogress from '@/container/Inprogress';
import Todo from '@/container/Todo';
import Image from 'next/image';
import React, { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({  }) => {
  return (
    <div className='flex flex-col h-full max-h-[calc(100vh-6rem)] w-full'>
    <div className='flex flex-col space-y-2 mt-10 px-12'>
      <div className=' flex  justify-between'>
    <div className='flex flex-col space-y-2'>
    <h1 className=' text-4xl font-semibold'>New Campaign Run</h1>
    <p>A new campaign launch work for brand new features in May month</p>
    </div>
    <Button>
      ADD MEMBERS
    </Button>
      </div>
<div className='flex justify-between'>
<div className='flex relative items-center justify-center gap-2'>
<Image src={Icons.IMG} alt='img'/>
<p className=' text-gray-900 text-sm'>8 members</p>
</div>
<div className='flex items-center justify-center space-x-3 my-12'>
<IconText icon={Icons.Newuser} text='Participants View'/>
<IconText icon={Icons.Eleven} text='Board View'/>
<IconText icon={Icons.Align} text='List View'/>
<IconText icon={Icons.Power} text='Power View'/>
</div>
</div>
    </div>
    <div className='bg-[#FCFBFC] flex  w-full px-6'>
      <div className='flex mt-12 gap-8'>
      <Todo/>
      <Inprogress/>
      <Completed/>
      </div>
    </div>
    </div>
  )
}

export default page;