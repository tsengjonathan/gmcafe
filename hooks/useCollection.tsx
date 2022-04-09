import { useContext } from 'react'
import { FilterContext } from '../providers/FilterProvider'
import { TRAIT } from '../types/asset'
import { Collection, UnprocessedCollection } from '../types/collection'

const addCount = (obj: { [key: string]: number }, key: string): void => {
  if (key in obj) {
    obj[key] += 1
  } else {
    obj[key] = 1
  }
}

const useCollection = (): Collection => {
  const { allItems } = useContext(FilterContext)
  
  const collection: Collection = {
    [TRAIT.BACKGROUND]: {},
    [TRAIT.CLOTHING]: {},
    [TRAIT.COLOUR]: {},
    [TRAIT.FEATURE]: {},
    [TRAIT.MOOD]: {},
    [TRAIT.OBJECT]: {}, 
  }

  allItems.forEach(({ attributes }) => {
    attributes.forEach(attribute => {
      const { trait_type, value } = attribute
      addCount(collection[trait_type], value)
    })
  })

  return collection
}

export default useCollection
