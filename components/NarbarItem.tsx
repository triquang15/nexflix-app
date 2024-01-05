import React from 'react'

interface NarbarItemProps {
    label: String;
}

export const NarbarItem: React.FC<NarbarItemProps> = ({label}) => {
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
        {label}
    </div>
  )
}
