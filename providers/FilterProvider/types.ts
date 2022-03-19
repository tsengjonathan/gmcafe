import { TRAIT, Asset, Trait } from '../../types/asset'

export type FilterContextProps = {
  filter: Record<Trait, Set<string>>
  addFilter: (type: TRAIT, value: string) => void
  removeFilter: (type: TRAIT, value: string) => void
  items: Asset[]
  size: number
  filterSpecial: boolean
  setFilterSpecial: (filterSpecial: boolean) => void
  shuffle: () => void
  reverse: () => void
  discordInput: string
  setDiscordInput: (discordInput: string) => void
  nextPage: () => void
}

export const defaultFilter: Record<Trait, Set<string>> = {
  background: new Set(),
  clothing: new Set(),
  colour: new Set(),
  feature: new Set(),
  mood: new Set(),
  object: new Set(),
}

export const defaultFilterProvider: FilterContextProps = {
  filter: defaultFilter,
  addFilter: (_type: TRAIT, _value: string) => null,
  removeFilter: (_type: TRAIT, _value: string) => null,
  items: [],
  size: 0,
  filterSpecial: false,
  setFilterSpecial: (_filterSpecial: boolean) => null,
  shuffle: () => null,
  reverse: () => null,
  discordInput: '',
  setDiscordInput: (_discordInput: string) => null,
  nextPage: () => null,
}
