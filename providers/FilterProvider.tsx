import { createContext, ReactNode, useState } from "react"
import { TRAIT } from "../types/asset"

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
  removeFilter: (_type: TRAIT, _value: string) => null
}

export const FilterContext = createContext(defaultFilterProvider)

type FilterProviderProps = {
  children: ReactNode
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [ background, setBackground ] = useState<string[]>([])
  const [ clothing, setClothing ] = useState<string[]>([])
  const [ colour, setColour ] = useState<string[]>([])
  const [ feature, setFeature ] = useState<string[]>([])
  const [ mood, setMood ] = useState<string[]>([])
  const [ object, setObject ] = useState<string[]>([])
  
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
      removeFilter
    }}>
      { children }
    </FilterContext.Provider>
  )
}
