<template>
  <section class="hero hero-project">
    <div class="container">
      <div class="inner-wrap">
        <div class="text-holder">
          <h1
            v-if="content.hero_title && content.hero_title[0].text"
            class="title"
          >
            {{ content.hero_title[0].text }}
            <span>{{ content.hero_title1[0].text }}</span>
          </h1>
        </div>
        <div class="date-holder">
          <p>{{ content.date[0].text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroProject',
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
