<template>
  <div class="page-wrap about-page">
    <StandardHeader :content="Header" />
    <Contacts :content="Contacts" />
    <Form :content="Form" />
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import Form from '~/components/Form.vue';
import Contacts from '~/components/Contacts.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'About',
  layout: 'about-page',
  components: {
    StandardHeader,
    Form,
    StandardFooter,
    Contacts,
  },
  async asyncData({ $prismic }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    const Form = (await $prismic.api.getSingle('form')).data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    const Contacts = (await $prismic.api.getSingle('contacts')).data;
    return {
      Header,
      Form,
      Footer,
      Contacts,
    };
  },
};
</script>
