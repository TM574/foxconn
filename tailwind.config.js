/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        pacifico : ['Pacifico', 'cursive'],
        permanentmarker : ['Permanent Marker', 'cursive'],
        rocksalt : ['Rock Salt', 'cursive'],
        homemadeapple : ['Homemade Apple', 'cursive'],
        shadowsintolight : ['Shadows Into Light', 'cursive'],


      },
    },
  },
  plugins: [],
};
