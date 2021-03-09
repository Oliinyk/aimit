<template>
  <section class="hero hero-home">
    <div class="container">
      <!-- <div class="hidden">{{ content }}</div> -->
      <div class="inner-wrap">
        <div class="text-holder">
          <h1 class="title">
            {{ content.hero_title1[0].text }}
            <span>{{ content.hero_title[0].text }}</span>
            {{ content.hero_title2[0].text }}
          </h1>

          <p>{{ content.subtitle[0].text }}</p>
          <div class="btn-holder">
            <a :href="content.hero_btn[0].spans[0].data.url" class="btn">
              {{ content.hero_btn[0].text }}
            </a>
          </div>
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
  name: 'StandardHero',
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
