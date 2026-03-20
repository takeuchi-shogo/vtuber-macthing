'use client'

import { useContext } from 'react'
import { GenerationThemeContext } from './generation-theme-provider'
import { generationThemes } from './theme-config'

export function useGenerationTheme() {
  const context = useContext(GenerationThemeContext)
  if (!context) {
    return { theme: generationThemes.gen0, generation: '0期生' }
  }
  return context
}
