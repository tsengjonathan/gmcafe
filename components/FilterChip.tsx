import { XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { useContext } from 'react'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'
import { capitalize } from './util'

export type ChipProps = {
  name: string
  type: TRAIT
}

const traitToColor = {
  [TRAIT.BACKGROUND]: 'bg-blue-light',
  [TRAIT.CLOTHING]: 'bg-green-light',
  [TRAIT.COLOUR]: 'bg-pink-light',
  [TRAIT.FEATURE]: 'bg-purple-light',
  [TRAIT.MOOD]: 'bg-orange-light',
  [TRAIT.OBJECT]: 'bg-yellow-light'
}

const Chip = ({ name, type }: ChipProps) => {
  const bg = traitToColor[type]

  const { removeFilter } = useContext(FilterContext)

  const classes = classNames(
    bg,
    'rounded-full align-middle text-center inline-block cursor-default whitespace-nowrap text-md lg:text-lg m-2 pl-4 pr-1 py-1 flex items-center',
  )

  const onClick = () => {
    removeFilter(type, name)
  }

  return (
    <span className={classes}>
      {capitalize(name)}
      <div className="p-1 mx-1 hover:bg-gray-200 transition-colors duration-200 rounded-full" onClick={onClick}>
        <XIcon className="w-4 h-4 cursor-pointer text-gray-500" /> 
      </div>
    </span>
  )
}

export default Chip
