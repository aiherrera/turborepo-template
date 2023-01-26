/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('../ui/tailwind.config'),
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    //* library transpiliation route *//
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    //* if you aren't opt in for src folder structure in your projects, comment the following line & uncomment/add the paths as required *//
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fill: ({ theme }) => ({
      'icon-primary': '#FEC601',
      'icon-secondary': theme('colors.gray.900')
    })
  },
  plugins: []
}
