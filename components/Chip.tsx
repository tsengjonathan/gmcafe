import classNames from 'classnames'
import React from 'react'
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

  const classes = classNames(
    bg,
    'rounded-full align-middle text-center inline-block cursor-default whitespace-nowrap text-xs mx-1 px-2 py-0.5',
  )

  return (
    <span className={classes}>
      {capitalize(name)}
    </span>
  )
}

export default Chip
