// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // image: {
    // domains: ['images.unsplash.com'],
    // remotePatterns: [{
    //   protocol: 'https',
    //   hostname: 'images.unsplash.com',
    // }],
  // },
  // <--- IMPORTANT: Replace with your actual domain
  site: 'http://localhost:4321',

  integrations: [react()]
});