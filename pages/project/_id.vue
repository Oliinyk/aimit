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
    const PresentationPage = (await $prismic.api.getSingle('presentation-page'))
      .data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    const id = route.params.id;
    const presentationPages = await $prismic.api.query(
      Prismic.Predicates.at('document.type', 'presentation-page'),
      { lang: 'en-us' }
    );
    const presentationPagesUA = await $prismic.api.query(
      Prismic.Predicates.at('document.type', 'presentation-page'),
      { lang: 'ua-ua' }
    );
    const prePageEN = await presentationPages.results.find(
      (tag) => tag.tags[0] === id
    );
    const prePageUA = await presentationPagesUA.results.find(
      (tag) => tag.tags[0] === id
    );
    const prePage = prePageEN;
    return {
      Header,
      PresentationPage,
      prePage,
      prePageEN,
      prePageUA,
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
