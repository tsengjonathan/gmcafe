import React, { useContext, useState } from 'react'
import Image from 'next/image'
import useCollection from '../hooks/useCollection'
import Disclosure from './Disclosure'
import { TRAIT } from '../types/asset'
import { MenuIcon } from '@heroicons/react/solid'

import { Coffee, RotateCcw } from 'react-feather'
import { FilterContext } from '../providers/FilterProvider'
import { Shuffle } from 'react-feather'
import Drawer from './Drawer'
import { DiscordIcon, OpenSeaIcon, TwitterIcon } from './Icons'
import FilterInput from './FilterInput'
import FilterDisclosure from './FilterDisclosure'
import FilterToggle from './FilterToggle'
import { ThemeContext } from '../providers/ThemeProvider'
import classNames from 'classnames'
import { Tab } from '@headlessui/react'
import { themeOrder } from '../providers/ThemeProvider/ThemeProvider'

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
    filterSpecial, setFilterSpecial, shuffle, reverse, discordInput, setDiscordInput
  } = useContext(FilterContext)

  const { primaryBackground, changeTheme } = useContext(ThemeContext)

  const filterControls = (
    <>
      <FilterToggle title="Custom Moos" isEnabled={filterSpecial} setIsEnabled={setFilterSpecial} />
      <Disclosure title="Discord">
        <FilterInput input={discordInput} setInput={setDiscordInput} placeholder="BenColefax#3753" />
      </Disclosure>
      <FilterDisclosure title={TRAIT.BACKGROUND} fields={background} />
      <FilterDisclosure title={TRAIT.CLOTHING} fields={clothing} />
      <FilterDisclosure title={TRAIT.COLOUR} fields={colour} />
      <FilterDisclosure title={TRAIT.FEATURE} fields={feature} />
      <FilterDisclosure title={TRAIT.MOOD} fields={mood} />
      <FilterDisclosure title={TRAIT.OBJECT} fields={object} />
    </>
  )

  return (
    <div
      className="lg:w-1/4 lg:py-8 flex-col h-14 lg:h-screen lg:flex lg:sticky top-0 overflow-scroll scrollbar-hidden transition-colors"
      style={{ backgroundColor: primaryBackground }}
    >
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
        <Tab.Group onChange={(idx) => changeTheme(themeOrder[idx])}>
          <Tab.List className="flex py-1 space-x-2 rounded mb-3">
            {['Moo', 'Yoink'].map(category => (
               <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm font-medium rounded transition-colors',
                    selected
                      ? 'bg-white shadow text-black'
                      : 'bg-pink-light bg-opacity-40 hover:bg-opacity-70 text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="p-2 mx-auto bg-white rounded">
                <div className="w-full px-4 py-2 flex items-center">
                  <h1 className="text-lg font-medium flex-grow">Filter Moos</h1>
                  <RotateCcw className="h-5 w-5 text-gray-700 cursor-pointer mr-2" strokeWidth="2" onClick={() => reverse()} />
                  <Shuffle className="h-5 w-5 text-gray-700 cursor-pointer" strokeWidth="2" onClick={() => shuffle()} />
                </div>
                { filterControls }
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-2 mx-auto bg-white rounded">
                <div className="w-full px-4 py-2 flex items-center">
                  <h1 className="text-lg font-medium flex-grow">Filter Yoinks</h1>
                  <RotateCcw className="h-5 w-5 text-gray-700 cursor-pointer mr-2" strokeWidth="2" onClick={() => reverse()} />
                  <Shuffle className="h-5 w-5 text-gray-700 cursor-pointer" strokeWidth="2" onClick={() => shuffle()} />
                </div>
                { filterControls }
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
      </div>
    </div>
  )
}

export default Sidebar
