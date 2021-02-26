<template>
  <div class="page-wrap services-page">
    <StandardHeader :content="Header" />
    <Clients :content="Clients" />
    <ColumnText :content="ColumnText" />
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import Clients from '~/components/Clients.vue';
import ColumnText from '~/components/ColumnText.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'About',
  layout: 'about-page',
  components: {
    StandardHeader,
    Clients,
    ColumnText,
    StandardFooter,
  },
  async asyncData({ $siteData, $prismic, error }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const Clients = (await $prismic.api.getSingle('clients')).data;
    const ColumnText = (await $prismic.api.getSingle('text_columns')).data;
    // const PresentationPage = (await $prismic.api.getSingle('presentation-page'))
    //   .data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    return {
      Header,
      Clients,
      ColumnText,
      // PresentationPage,
      Footer,
    };
  },
};
</script>
