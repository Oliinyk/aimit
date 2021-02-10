<template>
  <section>
    <StandardHeader :content="Header" />
    <!-- <h1 class="title">{{ homepage.title[0].text }}</h1>
    <p>{{ homepage.subtitle[0].text }}</p> -->
    <!-- <img :src="homepage.hero_image.url" alt="" /> -->
    <StandardHero :content="homepage" />
    <Specialization :content="homepage" />
    <Portfolio :content="homepage" />
    <Clients :content="homepage" />
  </section>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import StandardHero from '~/components/StandardHero.vue';
import Specialization from '~/components/Specialization.vue';
import Portfolio from '~/components/Portfolio.vue';
import Clients from '~/components/Clients.vue';
// import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'Home',
  layout: 'homepage',
  components: {
    StandardHeader,
    StandardHero,
    Specialization,
    Portfolio,
    Clients,
    // StandardFooter,
  },
  async asyncData({ $siteData, $prismic, error }) {
    // const footerProps = $siteData('footerProps');
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const homepage = (await $prismic.api.getSingle('homepage')).data;
    return { Header, homepage };
  },
};
</script>
