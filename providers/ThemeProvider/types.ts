import { CollectionType } from "../../types/collection"

export type ThemeContextProps = {
  primaryBackground: string
  secondaryBackground: string
  changeTheme: (_collectionType: CollectionType) => void
}

export const defaultThemeProvider: ThemeContextProps = {
  primaryBackground: '#ff7dbd',
  secondaryBackground: '#ffc7e5',
  changeTheme: () => null,
}
