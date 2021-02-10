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
          <!-- <a
            v-if="
              content.nav &&
              content.nav[0] &&
              content.nav[0].item1 &&
              content.nav[0].item1[0]
            "
            href="#"
          > -->
          <span>
            <!-- {{ content.nav[1].item[0].text }} -->
            {{ item.item }}
          </span>

          <!-- <p v-for="item in content.lang" :key="item.id">
            <span v-if="item.language" @click="selectLang(item.language)">
              {{ item.language }}</span
            >
          </p> -->
          <!-- </a> -->

          <!-- <a
            v-if="
              content.nav &&
              content.nav[1] &&
              content.nav[1].item1 &&
              content.nav[1].item1[0]
            "
            href="#"
          >
            {{ content.nav[1].item1[0].text }}</a
          > -->
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
