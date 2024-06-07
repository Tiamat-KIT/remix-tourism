import type { Config } from 'tailwindcss'
import { Config as DaisyUIConfig } from "daisyui"

export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ["emerald","night"],
  },
  darkMode: ['class', '[data-theme="night"]']
} satisfies Config & {
  daisyui: DaisyUIConfig
}

