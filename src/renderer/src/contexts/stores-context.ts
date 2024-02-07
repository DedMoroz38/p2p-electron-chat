import { ThemeStore } from '@renderer/stores/themeStore'
import { createContext } from 'react'

export const storesContext = createContext({
  themeStore: new ThemeStore()
})
