/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./index.html", ],
  theme: {
    colors:{
      notesColor:{DEFAULT:"#fef68a"},
      bgColor:{
        DEFAULT:"#E3C496",
        secondary:"#FF7C08",
      },
      newNotesColor:{DEFAULT:"#67d7cc"},
      buttonColor:{DEFAULT:"#e1e1e1",link:"#3000C3" },
      secondaryColor:{DEFAULT:""}
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
