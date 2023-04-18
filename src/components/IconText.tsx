import React, { FC } from 'react'

interface IconTextProps {
  icon:React.ReactNode
  text:string
}

const IconText: FC<IconTextProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-3">
    {icon}
    <span className=" text-gray-800 font-semibold">{text}</span>
  </div>
  )
}

export default IconText;