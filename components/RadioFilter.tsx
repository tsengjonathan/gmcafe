import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'
import { capitalize } from './util'

export type RadioFilterProps = {
  name: string
  type: TRAIT
  idx: number
  count: number
}

const RadioFilter = ({ name, type, idx, count }: RadioFilterProps) => {
  const id = `filter-${type}-${idx}`

  const { addFilter, removeFilter, traits } = useContext(FilterContext)

  const isSelected = traits[type].has(name)

  const onClick = () => {
    if (isSelected) {
      removeFilter(type, name)
    } else {
      addFilter(type, name)
    }
  }

  return (
    <div className="flex px-0.5">
      <input
        className="h-4 w-4 my-1 border-gray-300 rounded cursor-pointer"
        id={id}
        type="checkbox"
        value={name}
        checked={isSelected}
        onClick={onClick}
        onChange={() => null}
      />
      <label
        className="ml-2 my-0.5 text-default overflow-hidden inline-block"
        htmlFor={id}
      >
        {`${capitalize(name)} (${count})`}
      </label>
    </div>
  )
}

export default RadioFilter
