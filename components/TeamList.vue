<template>
  <section class="team-list">
    <div class="container">
      <div class="inner-wrap">
        <h2
          v-if="content.team_title && content.team_title[0].text"
          class="section-title"
        >
          {{ content.team_title[0].text }}
        </h2>

        <ul class="list-holder">
          <li
            v-for="item in content.team_list"
            :key="item.id"
            class="team-item"
          >
            <img
              v-if="item.image && item.image.url"
              :src="item.image.url"
              :alt="item.image.alt"
              class="user-img"
            />
            <div class="inner-item">
              <h5 class="user-name">{{ item.name[0].text }}</h5>
              <p class="user-position">{{ item.position[0].text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TeamList',
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
