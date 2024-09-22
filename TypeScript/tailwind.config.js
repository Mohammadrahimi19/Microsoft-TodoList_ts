/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens:{
        'sm': '340px',
        
        'md': '640px',

        'lg': '768px',
  
        'xl': '1024px',
  
        '2xl': '1280px',
  
        '3xl': '1536px',
      }
    },
    fontFamily:{
      'vazir':'Vazir'
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}

