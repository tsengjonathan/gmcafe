import React, { useContext } from 'react'
import { highlands } from '../constants'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'
import FilterChip from './FilterChip'

const FilterList = () => {
  const { traits: { background, clothing, colour, feature, mood, object }, size } = useContext(FilterContext)
  const total = highlands.length

  return (
    <div className="h-20 w-full bg-pink-light bg-opacity-50">
      <div className="w-full h-full pl-4 lg:px-8 flex items-center">
        <div className="font-mono text-3xl w-20 lg:w-28 text-left font-semibold">
          <span className="text-purple font-normal">{size}</span>
          /
          <span>{total}</span>
        </div>
        <div className="flex flex-nowrap overflow-x-auto ml-4 lg:ml-2">
          {Array.from(background).map((trait, idx) => <FilterChip key={`filter-chip-background-${idx}`} name={trait} type={TRAIT.BACKGROUND} />)}
          {Array.from(clothing).map((trait, idx) => <FilterChip key={`filter-chip-clothing-${idx}`} name={trait} type={TRAIT.CLOTHING} />)}
          {Array.from(colour).map((trait, idx) => <FilterChip key={`filter-chip-colour-${idx}`} name={trait} type={TRAIT.COLOUR} />)}
          {Array.from(feature).map((trait, idx) => <FilterChip key={`filter-chip-feature-${idx}`} name={trait} type={TRAIT.FEATURE} />)}
          {Array.from(mood).map((trait, idx) => <FilterChip key={`filter-chip-mood-${idx}`} name={trait} type={TRAIT.MOOD} />)}
          {Array.from(object).map((trait, idx) => <FilterChip key={`filter-chip-object-${idx}`} name={trait} type={TRAIT.OBJECT} />)}
        </div>
      </div>
      </div>
  )
}

export default FilterList
