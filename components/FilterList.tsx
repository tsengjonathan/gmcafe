import React, { useContext } from 'react'
import { highlands } from '../constants'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'
import FilterChip from './FilterChip'

type FilterListProps = {
  count: number
}

const FilterList = ({ count }: FilterListProps) => {
  const { traits: { background, clothing, colour, feature, mood, object } } = useContext(FilterContext)
  const total = highlands.length

  return (
    <div className="h-20 w-full bg-pink-light bg-opacity-50">
      <div className="w-full h-full pl-4 lg:px-8 flex items-center">
        <div className="font-mono text-3xl w-20 lg:w-28 text-left font-semibold">
          <span className="text-purple font-normal">{count}</span>
          /
          <span>{total}</span>
        </div>
        <div className="flex flex-nowrap overflow-x-auto ml-4 lg:ml-2">
          {background.map((trait, idx) => <FilterChip key={`filter-chip-background-${idx}`} name={trait} type={TRAIT.BACKGROUND} />)}
          {clothing.map((trait, idx) => <FilterChip key={`filter-chip-clothing-${idx}`} name={trait} type={TRAIT.CLOTHING} />)}
          {colour.map((trait, idx) => <FilterChip key={`filter-chip-colour-${idx}`} name={trait} type={TRAIT.COLOUR} />)}
          {feature.map((trait, idx) => <FilterChip key={`filter-chip-feature-${idx}`} name={trait} type={TRAIT.FEATURE} />)}
          {mood.map((trait, idx) => <FilterChip key={`filter-chip-mood-${idx}`} name={trait} type={TRAIT.MOOD} />)}
          {object.map((trait, idx) => <FilterChip key={`filter-chip-object-${idx}`} name={trait} type={TRAIT.OBJECT} />)}
        </div>
      </div>
      </div>
  )
}

export default FilterList
