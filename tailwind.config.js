/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'sign-up-bg': "url('/public/images/bg-img.jpg')",
      },
    },
    screens: {
      sx: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
