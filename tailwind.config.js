module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'landing-pattern': "url('/bg-pattern.svg')",
        avatar: "url('/me.webp')",
      }),
      backgroundPosition: () => ({
        '100-50': '100% 50%',
        '50-50': '50% 50%',
        '50-34': '50% 34%',
        '50-24': '50% 24%',
      }),
      backgroundSize: () => ({
        '300px': '300px',
        '250px': '250px',
        '500px': '500px',
      }),
      padding: () => ({
        'main-xl': '20vh 7.5% 5rem 12%',
        'main-md': '10vh 3.75% 2.5rem 6%',
        main: '2rem 7.5%',
      }),
      width: () => ({
        96: '24rem',
      }),
    },
  },
  variants: {
    boxShadow: ['hover', 'active'],
    translate: ['hover', 'active'],
  },
  plugins: [require('@tailwindcss/ui')],
}
