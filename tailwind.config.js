module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  // see https://tailwindcss.com/docs/theme
  // theme: {

  // }

  theme: {
    extend: {
      // backgroundImage: {
      // 	'billing-enterprise': "url('./assets/img/deskpro-enterprise-bg.svg')",
      // 	'billing-plus': "url('assets/img/deskpro-plus-bg.svg')",
      // 	'billing-item': "url('assets/img/deskpro-billing-bg.svg')",
      // },
      fontFamily: {
        // body: ['Noto Sans', 'Rubik'],
        body: ['Roboto'],
      },
    },
    fontSize: {
      '3xs': '.55rem',
      '2xs': '.65rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
};
