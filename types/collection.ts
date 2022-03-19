import { TRAIT } from "./asset"

export type UnprocessedCollection = {
  collection: {
    traits: {[trait: string]: { [attribute: string]: number}}
  }
}

export type Collection = {
  [TRAIT.BACKGROUND]: { [key: string]: number },
  [TRAIT.CLOTHING]: { [key: string]: number },
  [TRAIT.COLOUR]: { [key: string]: number },
  [TRAIT.FEATURE]: { [key: string]: number },
  [TRAIT.MOOD]: { [key: string]: number },
  [TRAIT.OBJECT]: { [key: string]: number }, 
}

export type CollectionType = 'cow' | 'phase2'
