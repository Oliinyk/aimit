<template>
  <div class="page-wrap presentation-page">
    <StandardHeader :content="Header" />
    <HeroProject v-if="prePage" :content="prePage.data" />
    <DescriptionProject v-if="prePage" :content="prePage.data" />
    <BodyProject v-if="prePage" :content="prePage.data" />
    <p v-if="!prePage">page not found</p>
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import Prismic from '@prismicio/client';
import StandardHeader from '~/components/StandardHeader.vue';
import HeroProject from '~/components/HeroProject.vue';
import DescriptionProject from '~/components/DescriptionProject.vue';
import BodyProject from '~/components/BodyProject.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'Home',
  layout: 'homepage',
  components: {
    StandardHeader,
    HeroProject,
    DescriptionProject,
    BodyProject,
    StandardFooter,
  },
  async asyncData({ $prismic, route }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    const id = route.params.id;
    const prePageEN = (
      await $prismic.api.query(
        [
          Prismic.Predicates.at('document.type', 'presentation-page'),
          Prismic.Predicates.at('my.presentation-page.uid', id),
        ],
        { lang: 'en-us' }
      )
    ).results[0];
    const prePageUA = (
      await $prismic.api.query(
        [
          Prismic.Predicates.at('document.type', 'presentation-page'),
          Prismic.Predicates.at('my.presentation-page.uid', id),
        ],
        { lang: 'ua-ua' }
      )
    ).results[0];
    const prePage = prePageEN;
    return {
      Header,
      prePage,
      prePageEN,
      prePageUA,
      id,
      Footer,
    };
  },
  computed: {
    currentLang() {
      const currentLang = this.$store.getters.getLang;
      return currentLang;
    },
  },
  watch: {
    currentLang() {
      if (localStorage.lang === 'ua-ua') {
        this.prePage = this.prePageUA;
      } else if (localStorage.lang === 'en-us') {
        this.prePage = this.prePageEN;
      }
    },
  },
  beforeMount() {
    if (localStorage.lang === 'ua-ua') {
      this.prePage = this.prePageUA;
    } else if (localStorage.lang === 'en-us') {
      this.prePage = this.prePageEN;
    }
  },
};
</script>
