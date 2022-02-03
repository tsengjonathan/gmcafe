import classNames from 'classnames'
import React from 'react'
import { TRAIT } from '../types/asset'

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

const FilterChip = ({ name, type }: ChipProps) => {
  const bg = traitToColor[type]

  return (
    <span className={classNames(bg, 'text-2xl mx-1 px-2 py-0.5 rounded-full align-middle text-center inline-block')}>
      {name}
    </span>
  )
}

export default FilterChip
