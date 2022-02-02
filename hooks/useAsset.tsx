import { baseUrl, contract, fallbackAsset } from '../constants'
import { Asset, Traits, UnprocessedAsset } from '../types/asset'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const useAsset = (token: string): Asset => {
  const url = `${baseUrl}/asset/${contract}/${token}`
  const { data, error } = useSWR<UnprocessedAsset, Error>(url, fetcher)

  if (error || !data) {
    console.error(`Error fetching asset with token ${token}`, error)
    return fallbackAsset
  }

  return processAsset(data, token)
}

export default useAsset

export const processAsset = (unprocessedAsset: UnprocessedAsset, token: string): Asset => {
  const traits: Traits = {
    background: [],
    clothing: [],
    colour: [],
    feature: [],
    mood: [],
    object: []
  }

  const { name, description, image_url, traits: unprocessedTraits } = unprocessedAsset

  unprocessedTraits.forEach(({ trait_type, value }) => {
    const trait = trait_type.toLowerCase()
    switch (trait) {
      case 'background':
        traits.background.push(value)
        return
      case 'clothing':
        traits.clothing.push(value)
        return
      case 'colour':
        traits.colour.push(value)
        return
      case 'feature':
        traits.feature.push(value)
        return
      case 'mood':
        traits.mood.push(value)
        return
      case 'object':
        traits.object.push(value)
        return
    }
  })

  return {
    name,
    description,
    imageUrl: image_url,
    traits,
    token
  }
}
