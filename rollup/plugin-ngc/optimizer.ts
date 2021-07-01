import { readdirSync } from 'fs'
import { join } from 'path'

/* eslint-disable max-len */
export const defaultSideEffects = (sideEffectFreeModules?: string[]): string[] => {
    const sideEffects = readdirSync('node_modules/@angular')
      .map(effect => join('node_modules/@angular', effect))
    return [
      ...sideEffects,
      'node_modules/rxjs',
      ...(sideEffectFreeModules ?? [])
    ].map(p => p.replace(/\\/g, '/'))
  }
