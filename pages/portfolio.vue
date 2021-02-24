<template>
  <div class="portfolio-page">
    <StandardHeader :content="Header" />
    <HeroPortfolio :content="PortfolioPage" />
    <Portfolio :content="Portfolio" />
    <Clients :content="Clients" />
    <Form :content="Form" />
    <ColumnText :content="ColumnText" />
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import HeroPortfolio from '~/components/HeroPortfolio.vue';
import Portfolio from '~/components/Portfolio.vue';
import Clients from '~/components/Clients.vue';
import Form from '~/components/Form.vue';
import ColumnText from '~/components/ColumnText.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'Home',
  layout: 'homepage',
  components: {
    StandardHeader,
    HeroPortfolio,
    Portfolio,
    Clients,
    Form,
    ColumnText,
    StandardFooter,
  },
  async asyncData({ $siteData, $prismic, error }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const PortfolioPage = (await $prismic.api.getSingle('portfolio-page')).data;
    const Portfolio = (await $prismic.api.getSingle('portfolio')).data;
    const Clients = (await $prismic.api.getSingle('clients')).data;
    const Form = (await $prismic.api.getSingle('form')).data;
    const ColumnText = (await $prismic.api.getSingle('text_columns')).data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    return {
      Header,
      PortfolioPage,
      Portfolio,
      Clients,
      Form,
      ColumnText,
      Footer,
    };
  },
};
</script>
