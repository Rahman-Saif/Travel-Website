import Image from 'next/image';
import React from 'react'

type ButtonProps={
    type:'button'|'submit';
    title:string;
    icon?:string;
    variant:string
}

const Button = ({type,title,icon,variant}:ButtonProps) => {
    
  return (
    <button
    className={` flex flex-row items-center justify-center rounded-full  bg-green-90 text-white px-8 py-4 ${variant}`}
    type={type}
    >
        {
            icon && <Image src={icon} alt={title} width={24}
            height={24}  />
        }
        <label className='bold-16 '>{title}</label>
    </button>
  )
}

export default Button
