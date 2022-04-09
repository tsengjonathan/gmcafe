import { TRAIT, Trait } from '../types/asset'

export const capitalize = (str: string) => str.replace(/\w\S*/g, w => (w.replace(/^\w/, c => c.toUpperCase())))
export const kebabCase = (str: string) => str.toLowerCase().split(' ').join('-')

export const convertTrait = (trait: TRAIT): Trait => {
  switch (trait) {
    case TRAIT.BACKGROUND: return 'background'
    case TRAIT.CLOTHING: return 'clothing'
    case TRAIT.COLOUR: return 'colour'
    case TRAIT.FEATURE: return 'feature'
    case TRAIT.MOOD: return 'mood'
    case TRAIT.OBJECT: return 'object'
  }
}
