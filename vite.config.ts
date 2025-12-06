import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import flowbiteReact from "flowbite-react/plugin/vite"
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { sourceMapperPlugin, liveEditPlugin } from '@codedesignai/vite-live-edit-plugin'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
   sourceMapperPlugin(), // MUST BE FIRST - before any other transformations
   react(),
   tailwindcss(),
   flowbiteReact(),
   liveEditPlugin(),
   nodePolyfills({
     globals: { global: true, process: true, Buffer: true },
     overrides: {
       path: 'path-browserify',
     },
   }),
 ],
 server: {
  port: 5173,
  host: '0.0.0.0',
  strictPort: true,
  allowedHosts: [
    "localhost",
    "127.0.0.1",
    ".proxy.cdsn.me",  // Allow all proxy.cdsn.me subdomains
   
  ],
  hmr: {
    clientPort: 443,
    protocol: 'wss',  // Explicitly use secure WebSocket
    timeout: 300000,  // Increase to 5 minutes (300 seconds)
    overlay: true,
  },
  ws: true,
  cors: {
    origin: true,
    credentials: true
  },
},
  preview: {
   port: 5173,
   host: '0.0.0.0', // Allow external connections
   strictPort: true, // Fail if port is not available
   allowedHosts: ["localhost", "127.0.0.1", "react-export-test.cdsn.me"],
   cors: {
     origin: true,
     credentials: true
   }
 },
  base: '/', // Use relative paths for assets
  build: {
   rollupOptions: {
     output: {
       // Ensure relative paths in built assets
       assetFileNames: 'assets/[name]-[hash][extname]',
       chunkFileNames: 'assets/[name]-[hash].js',
       entryFileNames: 'assets/[name]-[hash].js'
     }
   }
 }
})