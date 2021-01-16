const purgeEnabled = process.env.NODE_ENV === "production"

console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ["./**/*.html", "./**/*.tsx", "./**/*.jsx"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
