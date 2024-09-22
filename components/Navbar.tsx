import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
   <nav className=' max-container flex justify-between padding-container
   py-5 z-30 relative
   '>
    <Link href='/'>
        <Image 
        src='/hilink-logo.svg' alt='Logo Image'
        width={74} height={29}
        />
      </Link>
        <ul className='hidden lg:flex gap-9 items-center justify-center'>
          {
            NAV_LINKS.map((link)=>(
              <Link href={link.href} key={link.key}
              className='text-xl text-blue-900 hover:font-bold transition-all cursor-pointer'
              >
                  {link.label}
              </Link>
            ))
          }
        </ul>
        <div className="hidden lg:flex items-center justify-center">
          <Button
            type="button"
            title="login"
            icon="/user.svg"
            variant="btn_dark_green"
          >
          </Button>
        </div>
        <Image src="/menu.svg" alt='menu' height={32} width={32} 
        className='inline-block lg:hidden cursor-pointer' />

    
   </nav>
  )
}

export default Navbar
