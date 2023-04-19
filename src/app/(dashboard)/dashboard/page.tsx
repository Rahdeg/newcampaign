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
    <div className='flex flex-col space-y-12 mt-10 px-12 mb-4'>
      <div className=' flex  justify-between'>
    <div className='flex flex-col space-y-2'>
    <h1 className=' text-5xl font-bold'>New Campaign Run</h1>
    <p className=' text-[#B8B9BD] leading-4'>A new campaign launch work for brand new features in May month</p>
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
<div className='flex items-center justify-center space-x-2'>
<IconText icon={Icons.Newuser} text='Participants View'/>
<IconText icon={Icons.Eleven} text='Board View'/>
<IconText icon={Icons.Align} text='List View'/>
<IconText icon={Icons.Power} text='Power View'/>
{Icons.Plus}
</div>
</div>
    </div>
    <div className='bg-[#FCFBFC] flex  w-full px-6 mb-14'>
      <div className='flex mt-12 gap-8 w-full'>
      <Todo/>
      <Inprogress/>
      <Completed/>
      </div>
    </div>
    </div>
  )
}

export default page;