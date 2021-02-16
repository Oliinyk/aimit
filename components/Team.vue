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

        <h2
          v-if="content.team_subtitle && content.team_subtitle[0].text"
          class="section-title inner-title"
        >
          {{ content.team_subtitle[0].text }}
        </h2>

        <div class="text-holder">
          <p
            v-if="content.team_text_left && content.team_text_left[0].text"
            class="content"
          >
            {{ content.team_text_left[0].text }}
          </p>

          <p
            v-if="content.team_text_right && content.team_text_right[0].text"
            class="content"
          >
            {{ content.team_text_right[0].text }}
          </p>
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
