import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'web-lg': '1280px',
        "web-opt": "1080px",
        "web-md": "920px",
        "web-sm": "780px",

        bigTablet: "1024px",
        tablet: "820px",
        smTablet: "640px",
        mobile: "480px",
      },
      colors: {
        "bg-primary": "#000a1e",
      },
      backgroundImage: {
        linerDk: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(0 10 30) 40%, rgba(255,255,255,0) 100%)",
      },
      gridTemplateColumns: {
        "auto-fit2-1fr": "repeat(auto-fit, minmax(260px, 1fr))",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {

        }
      },
      dark: {
        colors: {
          primary: {
            foreground: "#0c1600",
            DEFAULT: "#ffc905"
          },
          secondary: {
            foreground: "#ffff",
            DEFAULT: "#0096dc"
          }
        }
      }
    }
  })],
}
export default config
