import React, { useContext, useState } from 'react'
import Image from 'next/image'
import useCollection from '../hooks/useCollection'
import Disclosure from './Disclosure'
import { TRAIT } from '../types/asset'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Drawer } from '@mui/material'
import { Coffee } from 'react-feather'
import { Switch } from '@headlessui/react'
import { FilterContext } from '../providers/FilterProvider'
import classNames from 'classnames'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const {
    background,
    clothing,
    colour,
    feature,
    mood,
    object
  } = useCollection()

  const {
    filterSpecial, setFilterSpecial
  } = useContext(FilterContext)

  const filterControls = (
    <>
      <div className="flex py-4 pl-4 pr-2 text-sm font-medium border-t border-gray-300 justify-between items-center">
        <span>
          Custom Moos
        </span>
        <Switch
          checked={filterSpecial}
          onChange={() => setFilterSpecial(!filterSpecial)}
          className={classNames(
            { 'bg-pink': filterSpecial },
            { 'bg-gray-500': !filterSpecial },
            'relative inline-flex flex-shrink-0 h-6 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 focus:outline-none'
          )}
        >
          <span className="sr-only">Custom Moos</span>
          <span
            aria-hidden="true"
            className={classNames(
              { 'translate-x-4': filterSpecial },
              { 'translate-x-0': !filterSpecial },
              'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200'
            )}
          />
        </Switch>
      </div>
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
            Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop<span className="text-xs text-gray-500 ml-0.5">#1155</span>
          </div>
        </div>
      </Drawer>

      <div className="mx-auto hidden lg:flex lg:flex-col">
        <Image src="/logo.webp" alt="logo" width={173} height={112} />
        <div className="text-white justify-center mt-2 text-sm flex items-center">
          Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop <span className="text-xs ml-0.5">#1155</span>
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
