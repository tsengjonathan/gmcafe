import { CollectionType } from "../../types/collection"

export type ThemeContextProps = {
  primaryBackground: string
  secondaryBackground: string
  primaryText: string
  changeTheme: (_collectionType: CollectionType) => void
}

export const defaultThemeProvider: ThemeContextProps = {
  primaryBackground: '#ff7dbd',
  secondaryBackground: '#ffc7e5',
  primaryText: '#8946ab',
  changeTheme: () => null,
}
