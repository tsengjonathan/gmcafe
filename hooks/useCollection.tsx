import { useContext } from 'react'
import { FilterContext } from '../providers/FilterProvider'
import { Collection, UnprocessedCollection } from '../types/collection'

const addCount = (obj: { [key: string]: number }, rawKey: string): void => {
  const key = rawKey.trim().toLowerCase()
  if (key in obj) {
    obj[key] += 1
  } else {
    obj[key] = 1
  }
}

const useCollection = (): Collection => {
  const { allItems } = useContext(FilterContext)
  
  const collection: Collection = {
    background: {},
    clothing: {},
    colour: {},
    feature: {},
    mood: {},
    object: {}, 
  }

  allItems.forEach(({ traits }) => {
    const { background, clothing, colour, feature, mood, object } = traits

    background.forEach(trait => addCount(collection.background, trait))
    clothing.forEach(trait => addCount(collection.clothing, trait))
    colour.forEach(trait => addCount(collection.colour, trait))
    feature.forEach(trait => addCount(collection.feature, trait))
    mood.forEach(trait => addCount(collection.mood, trait))
    object.forEach(trait => addCount(collection.object, trait))
  })

  return collection
}

export default useCollection
