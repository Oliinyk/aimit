<template>
  <div class="page-wrap contact-page">
    <StandardHeader :content="Header" />
    <ContactsComp :content="Contacts" />
    <!-- <Form :content="Form" /> -->
    <StandardFooter :content="Footer" />
  </div>
</template>
<script>
// Imports for all components
import StandardHeader from '~/components/StandardHeader.vue';
import ContactsComp from '~/components/Contacts.vue';
// import Form from '~/components/Form.vue';
import StandardFooter from '~/components/StandardFooter.vue';
export default {
  name: 'Contacts',
  layout: 'contacts-page',
  components: {
    StandardHeader,
    // Form,
    StandardFooter,
    ContactsComp,
  },
  async asyncData({ $prismic }) {
    const Header = (await $prismic.api.getSingle('standard_header')).data;
    // const Form = (await $prismic.api.getSingle('form')).data;
    const Footer = (await $prismic.api.getSingle('footer')).data;
    const Contacts = (await $prismic.api.getSingle('contacts')).data;
    return {
      Header,
      // Form,
      Footer,
      Contacts,
    };
  },
};
</script>
