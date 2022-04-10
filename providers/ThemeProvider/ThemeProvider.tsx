import { createContext, ReactNode, useState } from 'react';
import { CollectionType } from '../../types/collection';
import { defaultThemeProvider, ThemeContextProps } from './types';


export const ThemeContext = createContext(defaultThemeProvider)

type ThemeProviderProps = {
  children: ReactNode
}

const themes: Record<CollectionType, Omit<ThemeContextProps, 'changeTheme'>> = {
  'cow': {
    primaryBackground: '#ff7dbd',
    secondaryBackground: '#ffc7e588',
    primaryText: '#8946ab',
  },
  'phase2': {
    primaryBackground: '#8946ab',
    secondaryBackground: '#dfb9f1',
    primaryText: '#ffffff',
  }
}

export const themeOrder: CollectionType[] = ['cow', 'phase2']

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
