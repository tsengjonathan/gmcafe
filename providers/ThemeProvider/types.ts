import { CollectionType } from "../../types/collection"

export type ThemeContextProps = {
  primaryBackground: string
  secondaryBackground: string
  changeTheme: (_collectionType: CollectionType) => void
}

export const defaultThemeProvider: ThemeContextProps = {
  primaryBackground: 'bg-pink',
  secondaryBackground: 'bg-pink-light',
  changeTheme: () => null,
}
