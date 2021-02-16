<template>
  <div class="header">
    <div class="container header-container">
      <!-- {{ content.standard_header }} -->
      <a href="/" class="header-logo">
        <img
          v-if="content.logo"
          :src="content.logo.url"
          :alt="content.logo.alt"
        />
        <!-- <img :src="homepage.logo.url" alt="" /> -->
      </a>
      <div class="nav">
        <ul class="header-navigation">
          <!-- {{
          content.nav
        }} -->
          <li v-for="item in content.nav" :key="item.id" class="nav-item">
            <a :href="'/' + item.item[0].text">
              {{ item.item[0].text }}
            </a>
          </li>
        </ul>
        <ul class="lang-nav">
          <li class="active">EN</li>
          <li>UA</li>
        </ul>
      </div>
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
