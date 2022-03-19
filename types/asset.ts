export type Asset = {
  name: string
  description: string
  imageUrl: string
  traits: Traits
  token: string
  isSpecial?: boolean
  discord?: string
}

export enum TRAIT {
  BACKGROUND = 'background',
  CLOTHING = 'clothing',
  COLOUR = 'colour',
  FEATURE = 'feature',
  MOOD = 'mood',
  OBJECT = 'object'
}

export type Trait = 'background' | 'clothing' | 'colour' | 'feature' | 'mood' | 'object'

export type Traits = {
  [TRAIT.BACKGROUND]: string[],
  [TRAIT.CLOTHING]: string[],
  [TRAIT.COLOUR]: string[],
  [TRAIT.FEATURE]: string[],
  [TRAIT.MOOD]: string[],
  [TRAIT.OBJECT]: string[], 
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
