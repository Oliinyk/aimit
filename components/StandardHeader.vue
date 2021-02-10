<template>
  <div class="header">
    <div class="container header-container">
      <a href="" class="header-logo">
        <img v-if="content.logo" :src="content.logo.url" alt="" />
        <!-- <img :src="homepage.logo.url" alt="" /> -->
      </a>
      <ul class="header-navigation">
        {{
          content.nav
        }}
        <li v-for="item in content.nav" :key="item.id" class="nav-item">
          <a :href="item.item[0].text">
            {{ item.item[0].text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StandardHeader',
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
