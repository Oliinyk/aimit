<template>
  <div class="footer">
    <div class="container">
      <a href="/" class="footer-logo">
        <img v-if="content.footer_logo" :src="content.footer_logo.url" alt="" />
      </a>

      <div>
        <p
          v-if="
            content.footer_description && content.footer_description[0].text
          "
          class="description"
        >
          {{ content.footer_description[0].text }}
        </p>

        <div>
          <h4>Follow us</h4>
          <ul class="img-holder">
            <li
              v-for="item in content.socials"
              :key="item.id"
              class="socials-item"
            >
              <img
                v-if="item.social_ico && item.social_ico.url"
                :src="item.social_ico.url"
                :alt="item.social_ico.alt"
              />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul class="footer-navigation">
          <li
            v-for="item in content.footer_nav"
            :key="item.id"
            class="nav-item"
          >
            <a :href="'/' + item.nav_item[0].text">
              {{ item.nav_item[0].text }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <hr />

    <!-- <ul>
      <li v-for="group in props.nav" :key="group.title">
        <strong>{{ group.title }}</strong>
        <ul>
          <li v-for="link in group.links" :key="link.link_label">
            <prismic-link :field="link.link">
              {{ link.link_label }}
            </prismic-link>
          </li>
        </ul>
      </li>
    </ul>
    <hr />
    {{ props.copyrightLine }} -->
  </div>
</template>
<script>
export default {
  name: 'StandardFooter',
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
