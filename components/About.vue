<template>
  <section class="about">
    <div class="container">
      <div class="inner-wrap">
        <h2
          v-if="content.about_title && content.about_title[0].text"
          class="section-title"
        >
          {{ content.about_title[0].text }}
        </h2>

        <p v-if="content.about_text && content.about_text[0].text">
          {{ content.about_text[0].text }}
        </p>

        <div class="btn-holder">
          <a
            v-if="content.about_btn && content.about_btn[0].text"
            href="#"
            class="btn"
          >
            {{ content.about_btn[0].text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
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
