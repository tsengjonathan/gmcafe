import { createContext, ReactNode, useEffect, useState } from 'react'
import { highlands } from '../../constants'
import { Asset, Attribute, Trait, TRAIT } from '../../types/asset'
import { defaultFilter, defaultFilterProvider } from './types'
import maccas from '../../constants/maccas'

const ITEMS_PER_PAGE = 60

export const FilterContext = createContext(defaultFilterProvider)

type FilterProviderProps = {
  children: ReactNode
}

const shouldInclude = (trait: TRAIT, attributes: Attribute[], filter: Set<string>) => {
  const traitAttrs = attributes.filter(attribute => attribute.trait_type === trait)
  return filter.size === 0 || traitAttrs.some(attr => filter.has(attr.value))
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [ allItems, ] = useState<Asset[]>(highlands)
  const [ items, setItems ] = useState<Asset[]>(highlands)
  const [ count, setCount ] = useState(ITEMS_PER_PAGE)
  const [ filter, setFilter ] = useState<Record<Trait, Set<string>>>(defaultFilter)
  const [ filterSpecial, setFilterSpecial ] = useState(false)
  const [ discordInput, setDiscordInput ] = useState('')
  const [ filterMaccas, setFilterMaccas ] = useState(false)
  
  useEffect(() => {
    setItems(highlands.filter(highland => {
      const { isSpecial, attributes, discord, token } = highland
      const { background, clothing, colour, feature, mood, object } = filter

      const filterCount = background.size + clothing.size + colour.size + feature.size + mood.size + object.size
      if (filterCount === 0 && !filterSpecial && !discordInput && !filterMaccas) { return highland }

      const shouldFilterSpecial = filterSpecial ? isSpecial : true
      const shouldFilterDiscord = discordInput ? discord?.toLowerCase().includes(discordInput.toLowerCase()) : true
      const shouldFilterMaccas = filterMaccas ? token in maccas : true
  
      return shouldFilterSpecial && shouldFilterDiscord && shouldFilterMaccas
        && shouldInclude(TRAIT.BACKGROUND, attributes, background)
        && shouldInclude(TRAIT.CLOTHING, attributes, clothing)
        && shouldInclude(TRAIT.COLOUR, attributes, colour)
        && shouldInclude(TRAIT.FEATURE, attributes, feature)
        && shouldInclude(TRAIT.MOOD, attributes, mood)
        && shouldInclude(TRAIT.OBJECT, attributes, object)
    }))
  }, [ filter, filterSpecial, discordInput, filterMaccas ])
  
  
  const addFilter = (type: TRAIT, value: string) => {
    switch (type) {
      case TRAIT.BACKGROUND:
        filter.background.add(value)
        return setFilter({ ...filter })
      case TRAIT.CLOTHING:
        filter.clothing.add(value)
        return setFilter({ ...filter })
      case TRAIT.COLOUR:
        filter.colour.add(value)
        return setFilter({ ...filter })
      case TRAIT.FEATURE:
        filter.feature.add(value)
        return setFilter({ ...filter })
      case TRAIT.MOOD:
        filter.mood.add(value)
        return setFilter({ ...filter })
      case TRAIT.OBJECT:
        filter.object.add(value)
        return setFilter({ ...filter })
    }
  }

  const removeFilter = (type: TRAIT, value: string) => {
    switch (type) {
      case TRAIT.BACKGROUND:
        filter.background.delete(value)
        return setFilter({ ...filter })
      case TRAIT.CLOTHING:
        filter.clothing.delete(value)
        return setFilter({ ...filter })
      case TRAIT.COLOUR:
        filter.colour.delete(value)
        return setFilter({ ...filter })
      case TRAIT.FEATURE:
        filter.feature.delete(value)
        return setFilter({ ...filter })
      case TRAIT.MOOD:
        filter.mood.delete(value)
        return setFilter({ ...filter })
      case TRAIT.OBJECT:
        filter.object.delete(value)
        return setFilter({ ...filter })
    }
  }

  const shuffle = () => setItems([...items.sort(() => Math.random() - 0.5)])

  const reverse = () => setItems([...items.reverse()])

  const nextPage = () => setCount(count + ITEMS_PER_PAGE)

  return (
    <FilterContext.Provider value={{
      filter,
      addFilter,
      removeFilter,
      items: items.slice(0, count),
      allItems: allItems,
      size: items.length,
      total: allItems.length,
      filterSpecial,
      setFilterSpecial,
      filterMaccas,
      setFilterMaccas,
      shuffle,
      reverse,
      discordInput,
      setDiscordInput,
      nextPage,
    }}>
      { children }
    </FilterContext.Provider>
  )
}
