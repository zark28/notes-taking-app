/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./index.html", ],
  darkMode:'class',
  theme: {
    colors:{
      notesColor:{DEFAULT:"#fef68a",dark:""},
      bgColor:{
        DEFAULT:"#E3C496",
        secondary:"#FF7C08",
        dark:"#121212"
      },
      newNotesColor:{DEFAULT:"#67d7cc",dark:""},
      buttonColor:{DEFAULT:"#e1e1e1",link:"#3000C3",dark:"" },
      text:{dark:'#ffffff'}
      
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'autonotes': 'repeat(auto-fit, minmax(250px, 1fr))',

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      }
    },

  },
  plugins: [],
}
