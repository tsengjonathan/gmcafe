import React, { useContext } from 'react'
import { highlands } from '../constants'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'
import Chip from './Chip'

type FilterListProps = {
  count: number
}

const FilterList = ({ count }: FilterListProps) => {
  const { traits: { background, clothing, colour, feature, mood, object } } = useContext(FilterContext)
  const total = highlands.length

  return (
    <div className="h-20 w-full bg-pink-light">
      <div className="bg-white opacity-60 w-full h-full px-8 flex items-center">
        <div className="font-mono text-3xl w-32 text-left">
          <span className="text-purple">{count}</span>
          /
          <span>{total}</span>
        </div>
        <div>
          {background.map((trait, idx) => <Chip key={`filter-chip-background-${idx}`} name={trait} type={TRAIT.BACKGROUND} variant="lg" />)}
          {clothing.map((trait, idx) => <Chip key={`filter-chip-clothing-${idx}`} name={trait} type={TRAIT.CLOTHING} variant="lg" />)}
          {colour.map((trait, idx) => <Chip key={`filter-chip-colour-${idx}`} name={trait} type={TRAIT.COLOUR} variant="lg" />)}
          {feature.map((trait, idx) => <Chip key={`filter-chip-feature-${idx}`} name={trait} type={TRAIT.FEATURE} variant="lg" />)}
          {mood.map((trait, idx) => <Chip key={`filter-chip-mood-${idx}`} name={trait} type={TRAIT.MOOD} variant="lg" />)}
          {object.map((trait, idx) => <Chip key={`filter-chip-object-${idx}`} name={trait} type={TRAIT.OBJECT} variant="lg" />)}
        </div>
      </div>
      </div>
  )
}

export default FilterList
