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
import { Transition } from '@headlessui/react'
import { Tooltip } from '@mui/material'

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

  const { primaryBackground } = useContext(ThemeContext)

  const [ teaseIdx, setTeaseIdx ] = useState(0)
  const phase2Tease = ['Woof', 'Oink', 'Ney', 'Rawr', 'Squeal', 'Meow']

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
        <div className="flex py-1 space-x-2 rounded mb-3 text-center">
          <div className={classNames(
              'w-full py-2.5 text-sm font-medium rounded transition-colors',
              'bg-white shadow text-black cursor-pointer'
          )}>
            Moo
          </div>
          <Tooltip title="Coming soon..." placement="top">
            <div
              className={classNames(
                'w-full py-2.5 text-sm font-medium rounded transition-colors',
                'bg-pink-light bg-opacity-40 hover:bg-opacity-70 text-white',
                'cursor-pointer overflow-hidden relative'
              )}
              onClick={() => setTeaseIdx(teaseIdx >= phase2Tease.length - 1 ? 0 : teaseIdx + 1)}
            >
              {phase2Tease.map((name, idx) => (
                <Transition 
                  key={name}
                  show={idx === teaseIdx}
                  className="absolute inset-x-0 mx-auto"
                  enter="transition duration-200"
                  enterFrom="opacity-0 -translate-y-8"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-200"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-8"
                >
                  {name}
                </Transition>
              ))}
            </div>
          </Tooltip>
        </div>
        <div className="p-2 mx-auto bg-white rounded">
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
