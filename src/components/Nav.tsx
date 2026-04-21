'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Platte Valley Airpark (18V)"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-dark-charcoal hover:text-airpark-red">Home</Link>
          <Link href="/#about" className="text-dark-charcoal hover:text-airpark-red">About</Link>
          <Link href="/#fuel-services" className="text-dark-charcoal hover:text-airpark-red">Fuel & Services</Link>
          <Link href="/#fly-in" className="text-dark-charcoal hover:text-airpark-red">Fly In</Link>
          <Link href="/#gallery" className="text-dark-charcoal hover:text-airpark-red">Gallery</Link>
          <Link href="/#events" className="text-dark-charcoal hover:text-airpark-red">Events</Link>
          <Link href="/hangars" className="text-dark-charcoal hover:text-airpark-red">Hangars</Link>
          <Link href="/gm" className="text-dark-charcoal hover:text-airpark-red">From the GM</Link>
          <Link href="/#contact" className="text-dark-charcoal hover:text-airpark-red">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark-charcoal focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-2">
            <Link href="/" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/#about" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/#fuel-services" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Fuel & Services</Link>
            <Link href="/#fly-in" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Fly In</Link>
            <Link href="/#gallery" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/#events" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/hangars" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Hangars</Link>
            <Link href="/gm" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>From the GM</Link>
            <Link href="/#contact" className="text-dark-charcoal hover:text-airpark-red" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav