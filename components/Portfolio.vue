<template>
  <section class="portfolio">
    <div class="container">
      <!-- <div class="hidden">{{ content.portfolio }}</div> -->
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.portfolio_title[0].text }}
        </h2>

        <div class="slider-wrap">
          <!-- <VueSlickCarousel :arrows="true" :dots="true" v-bind="slickOptions"> -->
          <VueSlickCarousel v-bind="slickOptions">
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

        <!-- {{ presentationpages }} -->

        <ul class="item-holder">
          <li
            v-for="item in presentationpages"
            :key="item.id"
            class="portfolio-item"
            :style="
              'background-image: url(' + item.data.description_image.url + ')'
            "
          >
            <div class="inner-item">
              <div class="text-holder">
                <div>
                  <h4 class="item-title">
                    {{ item.data.hero_title[0].text }}
                    {{ item.data.hero_title1[0].text }}
                  </h4>
                  <p
                    v-if="item.data.item_type && item.data.item_type[0].text"
                    class="item-type"
                  >
                    {{ item.data.item_type[0].text }}
                  </p>
                  <p
                    v-if="
                      item.data.item_description &&
                      item.data.item_description[0].text
                    "
                    class="item-text"
                  >
                    {{ item.data.item_description[0].text }}
                  </p>
                </div>
                <ul
                  v-if="
                    item.data.technology_icons &&
                    item.data.technology_icons.length > 0
                  "
                  class="icon-list"
                >
                  <li
                    v-for="t_item in item.data.technology_icons"
                    :key="t_item.id"
                    class="icon-item"
                  >
                    <img
                      :src="t_item.technology_ico.url"
                      :alt="t_item.technology_ico.alt"
                    />
                  </li>
                </ul>
              </div>
              <div class="btn-holder">
                <nuxt-link
                  :to="'/project/' + item.tags[0]"
                  class="btn btn-white"
                  >More details
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>

        <!-- <div class="more-btn-holder">
          <button
            v-if="content.more_btn && content.more_btn[0].text"
            class="btn more-btn"
          >
            {{ content.more_btn[0].text }}
          </button>
        </div> -->
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
  name: 'PortfolioFilters',
  components: { VueSlickCarousel },
  props: {
    content: {
      type: Object,
      default: null,
    },
    presentationpages: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        // centerPadding: '24px',
        // centerMode: true,
        // arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2.5,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    };
  },
};
</script>
