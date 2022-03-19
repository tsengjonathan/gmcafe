import { createContext, ReactNode, useState } from "react";
import { CollectionType } from "../../types/collection";
import { defaultThemeProvider, ThemeContextProps } from "./types";


export const ThemeContext = createContext(defaultThemeProvider)

type ThemeProviderProps = {
  children: ReactNode
}

const themes: Record<CollectionType, Omit<ThemeContextProps, 'changeTheme'>> = {
  'cow': {
    primaryBackground: 'bg-pink',
    secondaryBackground: 'bg-pink-light'
  },
  'phase2': {
    primaryBackground: 'bg-purple',
    secondaryBackground: 'bg-purple-light'
  }
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [ theme, setTheme ] = useState<Omit<ThemeContextProps, 'changeTheme'>>(themes['cow'])
  const changeTheme = (collectionType: CollectionType) => {
    switch (collectionType) {
      case 'cow': return setTheme(themes['cow'])
      case 'phase2': return setTheme(themes['phase2'])
    }
  }

  return (
    <ThemeContext.Provider value={{
      ...theme,
      changeTheme
    }}>
      { children }
    </ThemeContext.Provider>
  )
}
