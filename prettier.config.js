const styleGuide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleGuide,
  plugins: [...styleGuide.plugins, 'prettier-plugin-tailwindcss'],
};
