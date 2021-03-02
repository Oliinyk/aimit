<template>
  <div class="page-wrap services-page">
    <StandardHeader :content="Header" />
    <HeroServices :content="ServicesPage" />
    <Specialization :content="Specialization" />
    <!-- <ColumnText :content="ColumnText" /> -->
    <Clients :content="Clients" />
    <ColumnText :content="ColumnText" />
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import HeroServices from '~/components/HeroServices.vue';
import Specialization from '~/components/Specialization.vue';
import Clients from '~/components/Clients.vue';
import ColumnText from '~/components/ColumnText.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'ServicesPage',
  layout: 'services-page',
  components: {
    StandardHeader,
    HeroServices,
    Specialization,
    Clients,
    ColumnText,
    StandardFooter,
  },
  async asyncData({ $siteData, $prismic, error }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const ServicesPage = (await $prismic.api.getSingle('services-page')).data;
    const Specialization = (await $prismic.api.getSingle('specialization'))
      .data;
    const Clients = (await $prismic.api.getSingle('clients')).data;
    const ColumnText = (await $prismic.api.getSingle('text_columns')).data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    return {
      Header,
      ServicesPage,
      Specialization,
      Clients,
      ColumnText,
      Footer,
    };
  },
};
</script>
