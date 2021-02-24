<template>
  <div class="home">hello</div>
</template>
<script>
// Imports for all components
export default {
  name: 'Home',
  layout: 'homepage',
  asyncData({ $siteData, $prismic, error, route }) {
    console.log(route.params.id);
    // // const footerProps = $siteData('footerProps');
    // const Header = (await $prismic.api.getSingle('standard_header')).data;
    // const homepage = (await $prismic.api.getSingle('homepage')).data;
    // const Footer = (await $prismic.api.getSingle('footer')).data;
    // return { Header, homepage, Footer };
  },
};
</script>
