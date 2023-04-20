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
    <div className='flex flex-col w-full'>
    <div className='flex flex-col space-y-12 mt-10 px-12 mb-8'>
      <div className=' flex  justify-between'>
    <div className='flex flex-col space-y-2'>
    <h1 className=' text-3xl font-bold xl:text-4xl xxl:text-5xl'>New Campaign Run</h1>
    <p className=' text-[#B8B9BD] leading-4 mt-1 xxl:text-base'>A new campaign launch work for brand new features in May month</p>
    </div>
    <Button variant='black'>
      ADD MEMBERS
    </Button>
      </div>
<div className='flex justify-between'>
<div className='flex relative items-center justify-center gap-2'>
<Image src={Icons.IMG} alt='img'/>
<p className=' text-[#B8B9BD] text-sm'>8 members</p>
</div>
<div className='flex items-center justify-center gap-6'>
<IconText icon={Icons.Newuser} text='Participants View'/>
<IconText icon={Icons.Eleven} text='Board View'/>
<IconText icon={Icons.Align} text='List View'/>
<IconText icon={Icons.Power} text='Power View'/>
<p>{Icons.Plus}</p>
</div>
</div>
    </div>
    <div className='bg-[#FCFBFC] flex px-7 mb-14  items-center justify-center'>
      <div className='flex mt-12  w-full  justify-around'>
      <Todo/>
      <Inprogress/>
      <Completed/>
      </div>
    </div>
    </div>
  )
}

export default page;