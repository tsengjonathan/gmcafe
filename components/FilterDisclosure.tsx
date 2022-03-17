import React from 'react'
import { TRAIT } from '../types/asset'
import Disclosure from './Disclosure'
import FilterPanel from './FilterPanel'

type FilterDisclosureProps = {
  title: TRAIT
  fields: { [key: string]: number }
}

const FilterDisclosure = ({ title, fields }: FilterDisclosureProps) => {
  return (
    <Disclosure title={title}>
      <FilterPanel title={title} fields={fields} />
    </Disclosure>
  )
}

export default FilterDisclosure
