<template>
  <section class="hero hero-portfolio">
    <div class="container">
      <!-- <div class="hidden1">{{ content }}</div> -->

      <div class="inner-wrap">
        <div class="text-holder">
          <h1 class="title">
            {{ content.hero_title[0].text }}
            <span>{{ content.hero_title1[0].text }}</span>
          </h1>
        </div>
        <div class="img-holder">
          <img :src="content.hero_image.url" :alt="content.hero_image.alt" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroPortfolio',
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
