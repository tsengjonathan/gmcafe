import { baseUrl, collection, highlands } from '../constants'
import useSWR from 'swr'
import { Collection, UnprocessedCollection } from '../types/collection'

// const fetcher = (url: string) => fetch(url).then((res) => res.json())

const addCount = (obj: { [key: string]: number }, rawKey: string): void => {
  const key = rawKey.trim().toLowerCase()
  if (key in obj) {
    obj[key] += 1
  } else {
    obj[key] = 1
  }
}

const useCollection = (): Collection => {
  const collection: Collection = {
    background: {},
    clothing: {},
    colour: {},
    feature: {},
    mood: {},
    object: {}, 
  }

  highlands.forEach(({ traits }) => {
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

// const useCollection = (): Collection => {
//   const url = `${baseUrl}/collection/${collection}`
//   const { data, error } = useSWR<UnprocessedCollection, Error>(url, fetcher)

//   if (error || !data) {
//     console.error('Error fetching collection', error)
//     return {
//       background: {},
//       clothing: {},
//       colour: {},
//       feature: {},
//       mood: {},
//       object: {}, 
//     }
//   }

//   return processCollection(data)
// }

export default useCollection

export const processCollection = ({ collection: { traits } }: UnprocessedCollection): Collection => {
  const collection: Collection = {
    background: {},
    clothing: {},
    colour: {},
    feature: {},
    mood: {},
    object: {}, 
  }

  Object.keys(traits).forEach(key => {
    const trait = key.toLowerCase()

    switch (trait) {
      case 'background':
        collection.background = { ...collection.background, ...traits[key] }
        return
      case 'clothing':
        collection.clothing = { ...collection.clothing, ...traits[key] }
        return
      case 'colour':
        collection.colour = { ...collection.colour, ...traits[key] }
        return
      case 'feature':
        collection.feature = { ...collection.feature, ...traits[key] }
        return
      case 'mood':
        collection.mood = { ...collection.mood, ...traits[key] }
        return
      case 'object':
        collection.object = { ...collection.object, ...traits[key] }
          return
    }
  })

  return collection
}
