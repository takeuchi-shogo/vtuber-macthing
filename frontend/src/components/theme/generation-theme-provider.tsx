'use client'

import { createContext, type ReactNode } from 'react'
import {
  type GenerationTheme,
  generationThemes,
  generationToThemeKey,
} from './theme-config'

interface GenerationThemeContextValue {
  theme: GenerationTheme
  generation: string
}

export const GenerationThemeContext =
  createContext<GenerationThemeContextValue | null>(null)

interface GenerationThemeProviderProps {
  generation: string
  children: ReactNode
}

export function GenerationThemeProvider({
  generation,
  children,
}: GenerationThemeProviderProps) {
  const themeKey = generationToThemeKey[generation] ?? 'gen0'
  const theme = generationThemes[themeKey] ?? generationThemes.gen0

  return (
    <GenerationThemeContext.Provider value={{ theme, generation }}>
      {children}
    </GenerationThemeContext.Provider>
  )
}
