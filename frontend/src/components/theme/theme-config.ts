export interface GenerationTheme {
  primary: string
  glow: string
  gradient: string
  darkGradient: string
  particle: string
}

export const generationThemes: Record<string, GenerationTheme> = {
  gen0: {
    primary: '#00B8ED',
    glow: '0 0 20px rgba(0, 184, 237, 0.3)',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    darkGradient: 'from-cyan-900/30 to-blue-900/30',
    particle: '#00B8ED',
  },
  gen1: {
    primary: '#E84393',
    glow: '0 0 20px rgba(232, 67, 147, 0.3)',
    gradient: 'from-pink-500/20 to-rose-500/20',
    darkGradient: 'from-pink-900/30 to-rose-900/30',
    particle: '#E84393',
  },
  gen2: {
    primary: '#FD79A8',
    glow: '0 0 20px rgba(253, 121, 168, 0.3)',
    gradient: 'from-rose-400/20 to-pink-400/20',
    darkGradient: 'from-rose-900/30 to-pink-900/30',
    particle: '#FD79A8',
  },
  gamers: {
    primary: '#00B894',
    glow: '0 0 20px rgba(0, 184, 148, 0.3)',
    gradient: 'from-emerald-500/20 to-green-500/20',
    darkGradient: 'from-emerald-900/30 to-green-900/30',
    particle: '#00B894',
  },
  gen3: {
    primary: '#E17055',
    glow: '0 0 20px rgba(225, 112, 85, 0.3)',
    gradient: 'from-orange-500/20 to-red-400/20',
    darkGradient: 'from-orange-900/30 to-red-900/30',
    particle: '#E17055',
  },
  gen4: {
    primary: '#A29BFE',
    glow: '0 0 20px rgba(162, 155, 254, 0.3)',
    gradient: 'from-violet-400/20 to-purple-400/20',
    darkGradient: 'from-violet-900/30 to-purple-900/30',
    particle: '#A29BFE',
  },
  gen5: {
    primary: '#74B9FF',
    glow: '0 0 20px rgba(116, 185, 255, 0.3)',
    gradient: 'from-blue-300/20 to-cyan-300/20',
    darkGradient: 'from-blue-900/30 to-cyan-900/30',
    particle: '#74B9FF',
  },
  holox: {
    primary: '#6C5CE7',
    glow: '0 0 20px rgba(108, 92, 231, 0.3)',
    gradient: 'from-gray-800/30 to-purple-700/20',
    darkGradient: 'from-gray-950/50 to-purple-950/40',
    particle: '#6C5CE7',
  },
  myth: {
    primary: '#D63031',
    glow: '0 0 20px rgba(214, 48, 49, 0.3)',
    gradient: 'from-red-600/20 to-rose-600/20',
    darkGradient: 'from-red-950/30 to-rose-950/30',
    particle: '#D63031',
  },
  promise: {
    primary: '#FDCB6E',
    glow: '0 0 20px rgba(253, 203, 110, 0.3)',
    gradient: 'from-yellow-400/20 to-amber-400/20',
    darkGradient: 'from-yellow-900/30 to-amber-900/30',
    particle: '#FDCB6E',
  },
  advent: {
    primary: '#E84393',
    glow: '0 0 20px rgba(232, 67, 147, 0.3)',
    gradient: 'from-pink-500/20 via-purple-500/10 to-violet-600/20',
    darkGradient: 'from-pink-950/30 via-purple-950/20 to-violet-950/30',
    particle: '#E84393',
  },
  justice: {
    primary: '#0984E3',
    glow: '0 0 20px rgba(9, 132, 227, 0.3)',
    gradient: 'from-blue-600/20 to-sky-500/20',
    darkGradient: 'from-blue-950/30 to-sky-950/30',
    particle: '#0984E3',
  },
  id: {
    primary: '#E74C3C',
    glow: '0 0 20px rgba(231, 76, 60, 0.3)',
    gradient: 'from-red-500/20 to-orange-500/20',
    darkGradient: 'from-red-900/30 to-orange-900/30',
    particle: '#E74C3C',
  },
  regloss: {
    primary: '#FD79A8',
    glow: '0 0 20px rgba(253, 121, 168, 0.4)',
    gradient: 'from-pink-400/20 to-rose-500/20',
    darkGradient: 'from-pink-900/30 to-rose-950/30',
    particle: '#FD79A8',
  },
  flowglow: {
    primary: '#A29BFE',
    glow: '0 0 20px rgba(162, 155, 254, 0.4)',
    gradient: 'from-violet-400/20 to-indigo-400/20',
    darkGradient: 'from-violet-900/30 to-indigo-900/30',
    particle: '#A29BFE',
  },
}

export const generationToThemeKey: Record<string, string> = {
  '0期生': 'gen0',
  '1期生': 'gen1',
  '2期生': 'gen2',
  ゲーマーズ: 'gamers',
  '3期生': 'gen3',
  '4期生': 'gen4',
  '5期生': 'gen5',
  holoX: 'holox',
  Myth: 'myth',
  Promise: 'promise',
  Advent: 'advent',
  Justice: 'justice',
  'Gen 1': 'id',
  'Gen 2': 'id',
  'Gen 3': 'id',
  ReGLOSS: 'regloss',
  'FLOW GLOW': 'flowglow',
}
