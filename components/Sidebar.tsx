import React, { useState } from 'react'
import Image from 'next/image'
import useCollection from '../hooks/useCollection'
import Disclosure from './Disclosure'
import { TRAIT } from '../types/asset'
import { HeartIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { Drawer } from '@mui/material'
import { Coffee } from 'react-feather'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const { background, clothing, colour, feature, mood, object } = useCollection()

  const filterControls = (
    <>
      <Disclosure title={TRAIT.BACKGROUND} fields={background} />
      <Disclosure title={TRAIT.CLOTHING} fields={clothing} />
      <Disclosure title={TRAIT.COLOUR} fields={colour} />
      <Disclosure title={TRAIT.FEATURE} fields={feature} />
      <Disclosure title={TRAIT.MOOD} fields={mood} />
      <Disclosure title={TRAIT.OBJECT} fields={object} />
    </>
  )

  return (
    <div className="bg-pink lg:w-1/4 lg:py-8 flex-col h-14 lg:h-auto lg:flex">
      <div className="lg:hidden flex items-center h-full justify-end px-4">
        <MenuIcon className="w-10 h-10 cursor-pointer" color="white" onClick={() => setIsOpen(!isOpen)} />
      </div>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
        <div className="w-64 flex flex-col h-full justify-between">
          <div className="flex items-center border-b border-gray-300 pl-4 pr-3 py-2">
            <h1 className="w-full text-lg font-medium">Filter</h1>
            <XIcon className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="grow">
            { filterControls }
          </div>
          <div className="justify-center text-sm mb-2 flex items-center">
            Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop<span className="text-xs text-gray-500">#1155</span>
          </div>
        </div>
      </Drawer>

      <div className="mx-auto hidden lg:flex lg:flex-col">
        <Image src="/logo.webp" alt="logo" width={173} height={112} />
        <div className="text-white justify-center mt-2 text-sm flex items-center">
          Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop <span className="text-xs">#1155</span>
        </div>
      </div>

      <div className="px-3 pt-4 hidden lg:block">
        <div className="p-2 mx-auto bg-white rounded sticky top-12">
          <h1 className="w-full px-4 py-2 text-lg font-medium">Filter</h1>
          { filterControls }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
