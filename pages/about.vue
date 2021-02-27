<template>
  <div class="page-wrap about-page">
    <StandardHeader :content="Header" />
    <HeroAbout :content="AboutPage" />
    <TeamList :content="TeamList" />
    <Form :content="Form" />
    <Clients :content="Clients" />
    <ColumnText :content="ColumnText" />
    <TitleButton :content="TitleButton" />
    <Feedback :content="Feedback" />
    <!-- <HeroProject :content="PresentationPage" /> -->
    <!-- <DescriptionProject :content="PresentationPage" /> -->
    <!-- <BodyProject :content="PresentationPage" /> -->
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import HeroAbout from '~/components/HeroAbout.vue';
import TeamList from '~/components/TeamList.vue';
import Form from '~/components/Form.vue';
import Clients from '~/components/Clients.vue';
import ColumnText from '~/components/ColumnText.vue';
import TitleButton from '~/components/TitleButton.vue';
import Feedback from '~/components/Feedback.vue';

// import DescriptionProject from '~/components/DescriptionProject.vue';
// import BodyProject from '~/components/BodyProject.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'About',
  layout: 'about-page',
  components: {
    StandardHeader,
    HeroAbout,
    TeamList,
    Form,
    Clients,
    ColumnText,
    TitleButton,
    Feedback,
    // HeroProject,
    // DescriptionProject,
    // BodyProject,
    StandardFooter,
  },
  async asyncData({ $siteData, $prismic, error }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const AboutPage = (await $prismic.api.getSingle('about-page')).data;
    const Form = (await $prismic.api.getSingle('form')).data;
    const TeamList = (await $prismic.api.getSingle('team')).data;
    const Clients = (await $prismic.api.getSingle('clients')).data;
    const ColumnText = (await $prismic.api.getSingle('text_columns')).data;
    const TitleButton = (await $prismic.api.getSingle('title_and_button')).data;
    const Feedback = (await $prismic.api.getSingle('customers_feedback')).data;
    // const PresentationPage = (await $prismic.api.getSingle('presentation-page'))
    //   .data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    return {
      Header,
      AboutPage,
      TeamList,
      Form,
      Clients,
      ColumnText,
      TitleButton,
      Feedback,
      // PresentationPage,
      Footer,
    };
  },
};
</script>
