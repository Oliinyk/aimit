<template>
  <section class="buttons-row">
    <h4 class="item-title">{{ title }}</h4>
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="item in buttons" :key="item.id" class="portfolio-filter">
        <!-- :type="button" -->
        <button
          class="slide-btn"
          :class="{ active: isfilterActive(item) }"
          @click="toggleFilter(item)"
        >
          {{ item.name }}
        </button>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'ButtonBlock',
  components: { VueSlickCarousel },
  props: {
    title: {
      type: String,
      default: '',
    },
    buttons: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      selectedFilters: [],
      slickOptions: {
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1550,
            settings: {
              slidesToShow: 7,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            },
          },
          // {
          //   breakpoint: 550,
          //   settings: {
          //     slidesToShow: 2,
          //     // arrows: false,
          //   },
          // },
        ],
      },
    };
  },
  methods: {
    toggleFilter(filter) {
      const index = this.selectedFilters.findIndex((item) => filter === item);
      index === -1
        ? this.selectedFilters.push(filter)
        : this.selectedFilters.splice(index, 1);
    },
    isfilterActive(tag) {
      return this.selectedFilters.findIndex((item) => item === tag) > -1;
    },
  },
};
</script>
