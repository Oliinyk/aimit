<template>
  <div class="header" :class="{ stickyHeader: scrollPosition > 100 }">
    <div class="container header-container">
      {{ content.standard_header }}
      <a href="/" class="header-logo">
        <img
          v-if="content.logo"
          :src="content.logo.url"
          :alt="content.logo.alt"
        />
        <!-- <img :src="homepage.logo.url" alt="" /> -->
      </a>
      <div class="nav">
        <ul class="header-navigation" :class="{ active: showMobileMenu }">
          <!-- {{
          content.nav
        }} -->
          <li v-for="item in content.nav" :key="item.id" class="nav-item">
            <nuxt-link
              :to="
                '/' + (item.item[0].text === 'Home' ? '' : item.item[0].text)
              "
            >
              {{ item.item[0].text }}
            </nuxt-link>
          </li>
        </ul>

        <ul class="lang-nav">
          <li
            :class="{ active: curentLang === 'en-us' }"
            @click="setLang('en-us')"
          >
            EN
          </li>
          <li
            :class="{ active: curentLang === 'ua-ua' }"
            @click="setLang('ua-ua')"
          >
            UA
          </li>
        </ul>

        <button
          class="navbar-toggler"
          :class="{ opened: showMobileMenu }"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span class="header-btn">
            <span class="bit-1"></span>
            <span class="bit-2"></span>
            <span class="bit-3"></span>
          </span>
        </button>
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
    return {
      showMobileMenu: false,
      curentLang: '',
      scrollPosition: null,
    };
  },
  beforeMount() {
    this.curentLang = localStorage.lang;
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    setLang(lang) {
      localStorage.lang = lang;
      this.curentLang = lang;
      this.$store.commit('ChangeLang', lang);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
