import { createContext, ReactNode, useEffect, useState } from 'react'
import _highlands from '../../constants/highlands.json'
import { Asset, Trait, TRAIT } from '../../types/asset'
import { defaultFilter, defaultFilterProvider } from './types'

const ITEMS_PER_PAGE = 60

const highlands: Asset[] = _highlands

export const FilterContext = createContext(defaultFilterProvider)

type FilterProviderProps = {
  children: ReactNode
}

const shouldInclude = (traits: string[], filter: Set<string>): boolean => {
  if (filter.size === 0) { return true }
  return traits.some(trait => filter.has(trait.toLowerCase()))
}


export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [ allItems, ] = useState<Asset[]>(highlands)
  const [ items, setItems ] = useState<Asset[]>(highlands)
  const [ count, setCount ] = useState(ITEMS_PER_PAGE)
  const [ filter, setFilter ] = useState<Record<Trait, Set<string>>>(defaultFilter)
  const [ filterSpecial, setFilterSpecial ] = useState(false)
  const [ discordInput, setDiscordInput ] = useState('')
  
  useEffect(() => {
    setItems(highlands.filter(highland => {
      const { isSpecial, traits, discord } = highland
      const { background, clothing, colour, feature, mood, object } = filter

      const filterCount = background.size + clothing.size + colour.size + feature.size + mood.size + object.size
      if (filterCount === 0 && !filterSpecial && !discordInput) { return highland }

      const shouldFilterSpecial = filterSpecial ? isSpecial : true
      const shouldFilterDiscord = discordInput ? discord?.toLowerCase().includes(discordInput.toLowerCase()) : true
  
      return shouldFilterSpecial && shouldFilterDiscord
        && shouldInclude(traits['background'], background)
        && shouldInclude(traits['clothing'], clothing)
        && shouldInclude(traits['colour'], colour)
        && shouldInclude(traits['feature'], feature)
        && shouldInclude(traits['mood'], mood)
        && shouldInclude(traits['object'], object)
    }))
  }, [ filter, filterSpecial, discordInput ])
  
  
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
      size: items.length,
      total: allItems.length,
      filterSpecial,
      setFilterSpecial,
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
