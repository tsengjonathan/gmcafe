import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useCollection from '../hooks/useCollection'
import Disclosure from './Disclosure'
import { TRAIT } from '../types/asset'
import { MenuIcon } from '@heroicons/react/solid'

import { Coffee, RotateCcw } from 'react-feather'
import { Switch } from '@headlessui/react'
import { FilterContext } from '../providers/FilterProvider'
import classNames from 'classnames'
import { Shuffle } from 'react-feather'
import Drawer from './Drawer'
import { DiscordIcon, OpenSeaIcon, TwitterIcon } from './Icons'


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
    filterSpecial, setFilterSpecial, shuffle, reverse
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

      <div className="mx-auto hidden lg:flex lg:flex-col">
        <div className="flex mb-4 justify-center">
          <a href="https://opensea.io/collection/goodmorningcafe" target="blank">
            <OpenSeaIcon className="h-5 w-5 mx-1" />
          </a>
          <a href="https://twitter.com/gmcafeNFT" target="blank">
            <TwitterIcon className="h-5 w-5 mx-1" />
          </a>
          <a href="https://discord.com/gmcafe" target="blank">
            <DiscordIcon className="h-5 w-5 mx-1" />
          </a>
        </div>
        <Image src="/logo.webp" alt="logo" width={173} height={112} />
        <div className="text-white justify-center mt-2 text-sm flex items-center">
          Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop <span className="text-xs ml-0.5">#1155</span>
        </div>
      </div>

      <Drawer isOpen={isOpen} close={() => setIsOpen(false)} filterControls={filterControls} />

      <div className="px-3 pt-4 hidden lg:block">
        <div className="p-2 mx-auto bg-white rounded sticky top-12">
          <div className="w-full px-4 py-2 flex items-center">
            <h1 className="text-lg font-medium flex-grow">Filter</h1>
            <RotateCcw className="h-5 w-5 text-gray-700 cursor-pointer mr-2" strokeWidth="2" onClick={() => reverse()} />
            <Shuffle className="h-5 w-5 text-gray-700 cursor-pointer" strokeWidth="2" onClick={() => shuffle()} />
          </div>
          { filterControls }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
