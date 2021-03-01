<template>
  <section class="contacts portfolio">
    <h3>{{ title }}</h3>
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="item in buttons" :key="item.id" class="portfolio-filter">
        <!-- :type="button" -->
        <button
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
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'Contacts',
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
