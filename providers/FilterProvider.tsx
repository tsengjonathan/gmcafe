import { createContext, ReactNode, useEffect, useState } from 'react'
import { highlands } from '../constants'
import { Asset, TRAIT } from '../types/asset'

export type Entry = Asset & {
  isHidden?: boolean
}

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
  items: Entry[],
  filterSpecial: boolean
  setFilterSpecial: (filterSpecial: boolean) => void
  shuffle: () => void
  reverse: () => void
  discordOnly: boolean
  setDiscordOnly: (discordOnly: boolean) => void
}

const defaultFilterProvider: FilterContextProps = {
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

export const FilterContext = createContext(defaultFilterProvider)

type FilterProviderProps = {
  children: ReactNode
}

const shouldInclude = (traits: string[], filter: string[]): boolean => {
  if (filter.length === 0) { return true }
  return traits.some(trait => filter.includes(trait.toLowerCase()))
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [ items, setItems ] = useState<Entry[]>(highlands)
  const [ background, setBackground ] = useState<string[]>([])
  const [ clothing, setClothing ] = useState<string[]>([])
  const [ colour, setColour ] = useState<string[]>([])
  const [ feature, setFeature ] = useState<string[]>([])
  const [ mood, setMood ] = useState<string[]>([])
  const [ object, setObject ] = useState<string[]>([])
  const [ filterSpecial, setFilterSpecial ] = useState(false)
  const [ discordOnly, setDiscordOnly ] = useState(false)
  
  useEffect(() => {
    setItems(highlands.map(highland => {
      const { isSpecial, traits, discord } = highland

      if ([...background, ...clothing, ...colour, ...feature, ...mood, ...object].length === 0 && !filterSpecial && !discordOnly) { return highland }
      const shouldFilterSpecial = filterSpecial ? isSpecial : true
      const shouldDiscordOnly = discordOnly ? !!discord : true
  
      const isVisible = shouldFilterSpecial && shouldDiscordOnly
        && shouldInclude(traits['background'], background)
        && shouldInclude(traits['clothing'], clothing)
        && shouldInclude(traits['colour'], colour)
        && shouldInclude(traits['feature'], feature)
        && shouldInclude(traits['mood'], mood)
        && shouldInclude(traits['object'], object)
      
      return {
        ...highland,
        isHidden: !isVisible
      }
    }))
  }, [ background, clothing, colour, feature, mood, object, filterSpecial, discordOnly ])
  
  
  const addFilter = (type: TRAIT, value: string) => {
    switch (type) {
      case TRAIT.BACKGROUND:
        if (background.includes(value)) { return }
        setBackground([...background, value])
        return
      case TRAIT.CLOTHING:
        if (clothing.includes(value)) { return }
        setClothing([...clothing, value])
        return
      case TRAIT.COLOUR:
        if (colour.includes(value)) { return }
        setColour([...colour, value])
        return
      case TRAIT.FEATURE:
        if (feature.includes(value)) { return }
        setFeature([...feature, value])
        return
      case TRAIT.MOOD:
        if (mood.includes(value)) { return }
        setMood([...mood, value])
        return
      case TRAIT.OBJECT:
        if (object.includes(value)) { return }
        setObject([...object, value])
        return
    }
  }

  const removeFilter = (type: TRAIT, value: string) => {
    switch (type) {
      case TRAIT.BACKGROUND:
        if (!background.includes(value)) { return }
        background.splice(background.indexOf(value), 1)
        setBackground([...background])
        return
      case TRAIT.CLOTHING:
        if (!clothing.includes(value)) { return }
        clothing.splice(clothing.indexOf(value), 1)
        setClothing([...clothing])
        return
      case TRAIT.COLOUR:
        if (!colour.includes(value)) { return }
        colour.splice(colour.indexOf(value), 1)
        setColour([...colour])
        return
      case TRAIT.FEATURE:
        if (!feature.includes(value)) { return }
        feature.splice(feature.indexOf(value), 1)
        setFeature([...feature])
        return
      case TRAIT.MOOD:
        if (!mood.includes(value)) { return }
        mood.splice(mood.indexOf(value), 1)
        setMood([...mood])
        return
      case TRAIT.OBJECT:
        if (!object.includes(value)) { return }
        object.splice(object.indexOf(value), 1)
        setObject([...object])
        return
    }
  }

  const shuffle = () => setItems([...items.sort(() => Math.random() - 0.5)])

  const reverse = () => setItems([...items.reverse()])

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
      items,
      filterSpecial,
      setFilterSpecial,
      shuffle,
      reverse,
      discordOnly,
      setDiscordOnly,
    }}>
      { children }
    </FilterContext.Provider>
  )
}
