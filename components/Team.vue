<template>
  <section class="team">
    <div class="container">
      <div class="inner-wrap">
        <h2
          v-if="content.team_title && content.team_title[0].text"
          class="section-title"
        >
          {{ content.team_title[0].text }}
        </h2>

        <div class="img-holder">
          <img
            v-if="content.team_image && content.team_image.url"
            :src="content.team_image.url"
            :alt="content.team_image.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Team',
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
