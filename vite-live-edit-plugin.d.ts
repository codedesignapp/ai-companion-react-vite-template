declare module '@codedesignai/vite-live-edit-plugin' {
    import type { Plugin } from 'vite';

    export function sourceMapperPlugin(): Plugin;
    export function liveEditPlugin(): Plugin;
}
