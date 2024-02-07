/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      md2:'975px',
      lg:'976px',
      xl:'1440px'
    },
  
    extend: {
     colors: {
      mainHeading: 'hsla(200, 19%, 18%, 1)',
      cardBGColor: 'rgb(15 23 42)',
       greenMain: 'hsla(120, 100%, 25%, 1)',
        typographyGray: 'hsla(200, 19%, 18%, 1)',
        blackSubtitles: 'hsla(0, 0%, 0%, 1)',
         welcome:'hsla(80, 39%, 42%, 1)',
         magenta:'#ff00ff',
         darkGrayishBlue:'hsl(227, 12%, 61%)',
         darkBlue: 'hsl(228, 39%, 23%)',
         darkGrayishBlue: 'hsl(227, 12%, 61%)',
         veryDarkBlue: 'hsl(233, 12%, 13%)',
         veryPaleRed: 'hsl(13, 100%, 96%)',
         veryLightGray: 'hsl(0, 0%, 98%)',
         brightRed: 'hsl(12, 88%, 59%)',
         brightRedLight: 'hsl(12, 88%, 69%)',
         brightRedSupLight: 'hsl(12, 88%, 95%)',
         darkBlue: 'hsl(228, 39%, 23%)',
         darkGreen: 'hsla(80, 39%, 42%, 1)',
         inputs:'hsla(217, 89%, 61%, 1)'
      },

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
       Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'logins': "url('/images/logins.jpeg')",
        
      }
      
    },
  },
  variants: {
    extend: {
      text: ['responsive'], // Adding the 'responsive' variant for the text utility class
    },
  },

  plugins: [],
})

