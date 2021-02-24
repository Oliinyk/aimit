<template>
  <div class="page-wrap presentation-page">
    <StandardHeader :content="Header" />
    <HeroProject :content="PresentationPage" />
    <DescriptionProject :content="PresentationPage" />
    <BodyProject :content="PresentationPage" />
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
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
  async asyncData({ $siteData, $prismic, error }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const PresentationPage = (await $prismic.api.getSingle('presentation-page'))
      .data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    return {
      Header,
      PresentationPage,
      Footer,
    };
  },
};
</script>
