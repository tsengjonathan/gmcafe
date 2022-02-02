import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'

export type RadioFilterProps = {
  name: string
  type: TRAIT
  idx: number
}

const RadioFilter = ({ name, type, idx }: RadioFilterProps) => {
  const id = `filter-${type}-${idx}`

  const { addFilter, removeFilter, traits } = useContext(FilterContext)

  const isSelected = traits[type].includes(name)

  const onClick = () => {
    if (isSelected) {
      removeFilter(type, name)
    } else {
      addFilter(type, name)
    }
  }

  return (
    <div className="flex items-center px-0.5">
      <input
        className="h-4 w-4 border-gray-300 rounded cursor-pointer"
        id={id}
        type="checkbox"
        value={name}
        checked={isSelected}
        onClick={onClick}
      />
      <label
        className="ml-2 my-0.5 text-default"
        htmlFor={id}
      >
        {name}
      </label>
    </div>
  )
}

export default RadioFilter
