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
  async asyncData({ $siteData, $prismic, error, route }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const PresentationPage = (await $prismic.api.getSingle('presentation-page'))
      .data;
    const Footer = (await $prismic.api.getSingle('footer')).data;

    const id = route.params.id;

    const prePage = (
      await $prismic.api.query([
        Prismic.Predicates.at('document.type', 'presentation-page'),
        Prismic.Predicates.at('document.tags', [id]),
      ])
    ).results[0];

    // const prePage = await $prismic.api.query({
    //   lang: 'en-eu',
    // });
    //
    console.log(prePage);
    // const prePage = await presentationPages.results.find(
    //   (tag) => tag.tags[0] === id
    // );
    return {
      Header,
      PresentationPage,
      prePage,
      Footer,
    };
  },
};
</script>
