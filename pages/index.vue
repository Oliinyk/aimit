<template>
  <div class="page-wrap home">
    <StandardHeader :content="Header" />
    <!-- <h1 class="title">{{ homepage.title[0].text }}</h1>
    <p>{{ homepage.subtitle[0].text }}</p> -->
    <!-- <img :src="homepage.hero_image.url" alt="" /> -->
    <Hero :content="homepage" />
    <Specialization :content="homepage" />
    <!-- <Portfolio :content="Portfolio" /> -->
    <Portfolio
      :content="Portfolio"
      :presentationpages="presentationPages.results"
    />
    <Clients :content="Clients" />
    <Form :content="Form" />
    <About :content="homepage" />
    <Team :content="homepage" />
    <ColumnText :content="ColumnText" />
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import Prismic from '@prismicio/client';
import StandardHeader from '~/components/StandardHeader.vue';
import Hero from '~/components/Hero.vue';
import Specialization from '~/components/Specialization.vue';
import Portfolio from '~/components/Portfolio.vue';
import Clients from '~/components/Clients.vue';
import Form from '~/components/Form.vue';
import About from '~/components/About.vue';
import Team from '~/components/Team.vue';
import ColumnText from '~/components/ColumnText.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'Home',
  layout: 'homepage',
  components: {
    StandardHeader,
    Hero,
    Specialization,
    Portfolio,
    Clients,
    Form,
    About,
    Team,
    ColumnText,
    StandardFooter,
  },
  async asyncData({ $prismic }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const homepage = (await $prismic.api.getSingle('homepage')).data;
    const Portfolio = (await $prismic.api.getSingle('portfolio')).data;
    const Clients = (await $prismic.api.getSingle('clients')).data;
    const Form = (await $prismic.api.getSingle('form')).data;
    const ColumnText = (await $prismic.api.getSingle('text_columns')).data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    const presentationPages = await $prismic.api.query([
      Prismic.Predicates.at('document.type', 'presentation-page'),
    ]);
    return {
      Header,
      homepage,
      Portfolio,
      Clients,
      Form,
      ColumnText,
      Footer,
      presentationPages,
    };
  },
};
</script>
