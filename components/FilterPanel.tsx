import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { TRAIT } from '../types/asset'
import FilterInput from './FilterInput'
import RadioFilter from './RadioFilter'
import { kebabCase } from './util'

export type FilterPanelProps = {
  title: TRAIT
  fields: { [key: string]: number }
}

const FilterPanel = ({ fields, title }: FilterPanelProps) => {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input, 150)

  const filters = Object.keys(fields)
    .filter(field => {
      if (debouncedInput === '') { return field }
      return field.toUpperCase().includes(debouncedInput.toUpperCase())
    })
    .sort((a, b) => {
      const aCount = fields[a]
      const bCount = fields[b]
      return aCount === bCount ? a.localeCompare(b) : aCount < bCount ? 1 : -1
    })
    .map((field, idx) => {
      const key = kebabCase(field)
      return <RadioFilter key={key} name={field} type={title} idx={idx} count={fields[field]} />
    })

  return (
    <div className="lg:max-h-80 lg:overflow-y-scroll mb-3">
      <FilterInput input={input} setInput={setInput} placeholder='Search...' />
      {filters}
    </div>
  )
}

export default FilterPanel
