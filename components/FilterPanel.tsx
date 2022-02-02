import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { DisclosureProps } from './Disclosure'
import FilterInput from './FilterInput'
import RadioFilter from './RadioFilter'
import { capitalize, kebabCase } from './util'

export type FilterPanelProps = DisclosureProps

const FilterPanel = ({ fields, title }: FilterPanelProps) => {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input, 150)

  const filters = Object.keys(fields)
    .filter(field => {
      if (debouncedInput === '') { return field }
      return field.toUpperCase().includes(debouncedInput.toUpperCase())
    })
    .map((field, idx) => {
      const name = capitalize(field)
      const key = kebabCase(field)
      return <RadioFilter key={key} name={name} type={title} idx={idx} />
    })

  return (
    <div className="lg:max-h-80 lg:overflow-y-scroll">
      <FilterInput input={input} setInput={setInput} />
      {filters}
    </div>
  )
}

export default FilterPanel
