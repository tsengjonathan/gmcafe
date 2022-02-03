import React from 'react'
import Image from 'next/image'
import useCollection from '../hooks/useCollection'
import Disclosure from './Disclosure'
import { TRAIT } from '../types/asset'

const Sidebar = () => {
  const { background, clothing, colour, feature, mood, object } = useCollection()
  return (
    <div className="bg-pink w-80 py-8 flex flex-col">
      <div className="mx-auto">
        <Image src="/logo.webp" alt="logo" width={173} height={112} />
      </div>

      <div className="px-3 pt-4">
        <div className="p-2 mx-auto bg-white rounded sticky top-12">
          <h1 className="w-full px-4 py-2 text-lg font-medium">Filter</h1>
          <Disclosure title={TRAIT.BACKGROUND} fields={background} />
          <Disclosure title={TRAIT.CLOTHING} fields={clothing} />
          <Disclosure title={TRAIT.COLOUR} fields={colour} />
          <Disclosure title={TRAIT.FEATURE} fields={feature} />
          <Disclosure title={TRAIT.MOOD} fields={mood} />
          <Disclosure title={TRAIT.OBJECT} fields={object} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
