/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFC107', // Golden Yellow - Main brand color
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        secondary: {
          50: '#E6ECF2',
          100: '#C2D0E0',
          200: '#9AB0CE',
          300: '#7390BC',
          400: '#4B70A9',
          500: '#003366', // Royal Blue - Secondary color
          600: '#002D5C',
          700: '#002752',
          800: '#002147',
          900: '#001A3D',
        },
        neutral: {
          50: '#FFFFFF', // White - Main background
          100: '#F5F5F5', // Soft Gray - Light background sections
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#333333', // Dark Gray - Text color
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(to right, #FFC107, #FFD54F)',
        'gradient-blue': 'linear-gradient(to right, #003366, #004080)',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} 