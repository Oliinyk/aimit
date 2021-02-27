<template>
  <section class="title-button">
    <div class="container">
      <div class="inner-wrap">
        <h2 v-if="content.title && content.title[0].text" class="title">
          {{ content.title[0].text }}
        </h2>
        <nuxt-link :to="'/portfolio'" class="btn btn-white">
          {{ content.button[0].text }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TitleButton',
  components: {},
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>
