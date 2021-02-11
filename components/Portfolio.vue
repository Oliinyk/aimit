<template>
  <section class="portfolio">
    <div class="container">
      <!-- <div class="hidden1">{{ content.portfolio }}</div> -->
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.portfolio_title[0].text }}
        </h2>

        <div>
          <VueSlickCarousel :arrows="true" :dots="true" v-bind="slickOptions">
            <div
              v-for="item in content.portfolio_filters"
              :key="item.id"
              class="portfolio-filter"
            >
              <button
                v-if="item.filter_item && item.filter_item[0].text"
                type="button"
              >
                {{ item.filter_item[0].text }}
              </button>
            </div>
          </VueSlickCarousel>
        </div>

        <!-- <div>
          <VueSlickCarousel :arrows="true" :dots="true">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </VueSlickCarousel>
        </div> -->

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
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Portfolio',
  components: { VueSlickCarousel },
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        // arrows: false,
      },
    };
  },
};
</script>
