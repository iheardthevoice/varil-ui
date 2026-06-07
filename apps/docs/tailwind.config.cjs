const path = require('node:path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  presets: [require(path.join(__dirname, '../../packages/ui/tailwind-preset.cjs'))],
  content: [
    './index.html',
    './src/**/*.{vue,js}',
    path.join(__dirname, '../../packages/ui/src/**/*.{vue,js}'),
    path.join(__dirname, '../../packages/ui/themes/components.css'),
  ],
}
