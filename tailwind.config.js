/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'kumbh-sans': '"Kumbh Sans", sans-serif',
      },
      boxShadow : { 
        'addToCart': "0px 0px 20px hsl(26, 100%, 55%)",
      },
      fontWeight : { 
        'fontNormal': '400',
        'fontBold': '700',
      },
      height : { 
        '1/3' : '33.33%',
      },
      zIndex: { 
        '999': '999',
        '-1': '-1',
      },
      colors : { 
        'orange': "hsl(26, 100%, 55%)",
        'pale-orange': "hsl(25, 100%, 94%)",
        'very-dark-blue': "hsl(220, 13%, 13%)",
        'dark-grayish-blue': "hsl(219, 9%, 45%)",
        'grayish-blue': "hsl(220, 14%, 75%)",
        'light-grayish-blue': "hsl(223, 64%, 98%)",
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
      },
    },
  },
  plugins: [],
}

