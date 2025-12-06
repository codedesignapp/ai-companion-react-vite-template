declare module '@codedesignai/vite-live-edit-plugin' {
  import type { Plugin } from 'vite';

  /**
   * AST-powered source mapping plugin
   * Injects precise character-level location data for 100% accurate updates
   */
  export function sourceMapperPlugin(): Plugin;

  /**
   * Live edit plugin that uses source mapping
   */
  export function liveEditPlugin(): Plugin;
}

