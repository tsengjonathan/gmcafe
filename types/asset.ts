export type Asset = {
  name: string
  description: string
  imageUrl: string
  attributes: Attribute[]
  token: string
  isSpecial?: boolean
  discord?: string
  owner: string
}

export enum TRAIT {
  BACKGROUND = 'Background',
  CLOTHING = 'Clothing',
  COLOUR = 'Colour',
  FEATURE = 'Feature',
  MOOD = 'Mood',
  OBJECT = 'Object'
}

export type Trait = 'background' | 'clothing' | 'colour' | 'feature' | 'mood' | 'object'

export type Attribute = {
  'trait_type': TRAIT
  'value': string
}

export type UnprocessedAsset = {
  name: string
  description: string
  image_url: string
  traits: UnprocessedTrait[]
}

export type UnprocessedTrait = {
  trait_type: string
  value: string
}
