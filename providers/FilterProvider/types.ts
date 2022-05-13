import { TRAIT, Asset, Trait } from '../../types/asset'

export type FilterContextProps = {
  filter: Record<Trait, Set<string>>
  addFilter: (type: TRAIT, value: string) => void
  removeFilter: (type: TRAIT, value: string) => void
  overwriteFilters: (type: TRAIT, values: string[]) => void
  items: Asset[]
  allItems: Asset[]
  size: number
  total: number
  filterSpecial: boolean
  setFilterSpecial: (filterSpecial: boolean) => void
  filterMaccas: boolean,
  setFilterMaccas: (filterMaccas: boolean) => void
  shuffle: () => void
  reverse: () => void
  nameInput: string
  setNameInput: (nameInput: string) => void
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
  overwriteFilters: (_type: TRAIT, _values: string[]) => null,
  items: [],
  allItems: [],
  size: 0,
  total: 0,
  filterSpecial: false,
  setFilterSpecial: (_filterSpecial: boolean) => null,
  filterMaccas: false,
  setFilterMaccas: (_filterMaccas: boolean) => null,
  shuffle: () => null,
  reverse: () => null,
  nameInput: '',
  setNameInput: (_nameInput: string) => null,
  nextPage: () => null,
}
