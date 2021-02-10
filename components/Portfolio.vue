<template>
  <section class="portfolio">
    <div class="container">
      <!-- <div class="hidden1">{{ content.portfolio }}</div> -->
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.portfolio_title[0].text }}
        </h2>

        <ul class="item-holder">
          <li
            v-for="item in content.portfolio"
            :key="item.id"
            class="portfolio-item"
            :style="'background-image: url(' + item.portfolio_image.url + ')'"
          >
            <div class="text-holder">
              <h4
                v-if="item.portfolio_name && item.portfolio_name[0].text"
                class="item-title"
              >
                {{ item.portfolio_name[0].text }}
              </h4>
              <p
                v-if="item.portfolio_type && item.portfolio_type[0].text"
                class="item-type"
              >
                {{ item.portfolio_type[0].text }}
              </p>
              <p
                v-if="item.portfolio_text && item.portfolio_text[0].text"
                class="item-text"
              >
                {{ item.portfolio_text[0].text }}
              </p>
              <div class="icon-holder">
                <img
                  v-if="
                    item.portfolio_technology_ico &&
                    item.portfolio_technology_ico.url
                  "
                  :src="item.portfolio_technology_ico.url"
                  alt=""
                />
                <img
                  v-if="
                    item.portfolio_technology_ico1 &&
                    item.portfolio_technology_ico1.url
                  "
                  :src="item.portfolio_technology_ico1.url"
                  alt=""
                />
                <img
                  v-if="
                    item.portfolio_technology_ico2 &&
                    item.portfolio_technology_ico2.url
                  "
                  :src="item.portfolio_technology_ico2.url"
                  alt=""
                />
                <img
                  v-if="
                    item.portfolio_technology_ico3 &&
                    item.portfolio_technology_ico3.url
                  "
                  :src="item.portfolio_technology_ico3.url"
                  alt=""
                />
                <img
                  v-if="
                    item.portfolio_technology_ico4 &&
                    item.portfolio_technology_ico4.url
                  "
                  :src="item.portfolio_technology_ico4.url"
                  alt=""
                />
              </div>
            </div>
            <div class="btn-holder">
              <a
                v-if="item.portfolio_btn && item.portfolio_btn[0].text"
                href="#"
                class="btn"
              >
                {{ item.portfolio_btn[0].text }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Portfolio',
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
