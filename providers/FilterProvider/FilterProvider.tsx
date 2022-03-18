import { createContext, ReactNode, useEffect, useState } from 'react'
import { highlands } from '../../constants'
import { Asset, TRAIT } from '../../types/asset'
import { defaultFilterProvider } from './types'

const ITEMS_PER_PAGE = 60

export const FilterContext = createContext(defaultFilterProvider)

type FilterProviderProps = {
  children: ReactNode
}

const shouldInclude = (traits: string[], filter: Set<string>): boolean => {
  if (filter.size === 0) { return true }
  return traits.some(trait => filter.has(trait.toLowerCase()))
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [ items, setItems ] = useState<Asset[]>(highlands)
  const [ count, setCount ] = useState(ITEMS_PER_PAGE)
  const [ background, setBackground ] = useState<Set<string>>(new Set())
  const [ clothing, setClothing ] = useState<Set<string>>(new Set())
  const [ colour, setColour ] = useState<Set<string>>(new Set())
  const [ feature, setFeature ] = useState<Set<string>>(new Set())
  const [ mood, setMood ] = useState<Set<string>>(new Set())
  const [ object, setObject ] = useState<Set<string>>(new Set())
  const [ filterSpecial, setFilterSpecial ] = useState(false)
  const [ discordInput, setDiscordInput ] = useState('')
  
  useEffect(() => {
    setItems(highlands.filter(highland => {
      const { isSpecial, traits, discord } = highland

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
  }, [ background, clothing, colour, feature, mood, object, filterSpecial, discordInput ])
  
  
  const addFilter = (type: TRAIT, value: string) => {
    switch (type) {
      case TRAIT.BACKGROUND:
        background.add(value)
        return setBackground(new Set(background))
      case TRAIT.CLOTHING:
        clothing.add(value)
        return setClothing(new Set(clothing))
      case TRAIT.COLOUR:
        colour.add(value)
        return setColour(new Set(colour))
      case TRAIT.FEATURE:
        feature.add(value)
        return setFeature(new Set(feature))
      case TRAIT.MOOD:
        mood.add(value)
        return setMood(new Set(mood))
      case TRAIT.OBJECT:
        object.add(value)
        return setObject(new Set(object))
    }
  }

  const removeFilter = (type: TRAIT, value: string) => {
    switch (type) {
      case TRAIT.BACKGROUND:
        background.delete(value)
        return setBackground(new Set(background))
      case TRAIT.CLOTHING:
        clothing.delete(value)
        return setClothing(new Set(clothing))
      case TRAIT.COLOUR:
        colour.delete(value)
        return setColour(new Set(colour))
      case TRAIT.FEATURE:
        feature.delete(value)
        return setFeature(new Set(feature))
      case TRAIT.MOOD:
        mood.delete(value)
        return setMood(new Set(mood))
      case TRAIT.OBJECT:
        object.delete(value)
        return setObject(new Set(object))
    }
  }

  const shuffle = () => setItems([...items.sort(() => Math.random() - 0.5)])

  const reverse = () => setItems([...items.reverse()])

  const nextPage = () => setCount(count + ITEMS_PER_PAGE)

  return (
    <FilterContext.Provider value={{
      traits: {
        background,
        clothing,
        colour,
        feature,
        mood,
        object,
      },
      addFilter,
      removeFilter,
      items: items.slice(0, count),
      size: items.length,
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
