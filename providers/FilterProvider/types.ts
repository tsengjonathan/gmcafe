import { TRAIT, Asset } from '../../types/asset'

export type FilterContextProps = {
  traits: {
    background: string[]
    clothing: string[]
    colour: string[]
    feature: string[]
    mood: string[]
    object: string[]
  }
  addFilter: (type: TRAIT, value: string) => void
  removeFilter: (type: TRAIT, value: string) => void
  items: Asset[],
  filterSpecial: boolean
  setFilterSpecial: (filterSpecial: boolean) => void
  shuffle: () => void
  reverse: () => void
  discordOnly: boolean
  setDiscordOnly: (discordOnly: boolean) => void
}

export const defaultFilterProvider: FilterContextProps = {
  traits: {
    background: [],
    clothing: [],
    colour: [],
    feature: [],
    mood: [],
    object: [],
  },
  addFilter: (_type: TRAIT, _value: string) => null,
  removeFilter: (_type: TRAIT, _value: string) => null,
  items: [],
  filterSpecial: false,
  setFilterSpecial: (_filterSpecial: boolean) => null,
  shuffle: () => null,
  reverse: () => null,
  discordOnly: false,
  setDiscordOnly: (_discordOnly: boolean) => null,
}
