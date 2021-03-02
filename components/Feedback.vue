<template>
  <section class="customers-feedback">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.section_title[0].text }}
        </h2>

        <div class="slider-wrap">
          <button class="slider-nav slider-prev" @click="showPrev"></button>
          <VueSlickCarousel
            ref="slider1"
            v-bind="slickOptionsImg"
            class="slider-for"
          >
            <div
              v-for="item in content.customers"
              :key="item.id"
              class="customer"
            >
              <div class="img-holder">
                <img
                  :src="item.customer_img.url"
                  :alt="item.customer_img.alt"
                />
              </div>
              <!-- <p v-if="item.text && item.text[0].text" class="customer-text">
                {{ item.text[0].text }}
              </p>
              <h4 class="customer-name">
                {{ item.name[0].text }}
              </h4>
              <p
                v-if="item.company && item.company[0].text"
                class="customer-company"
              >
                {{ item.company[0].text }}
              </p> -->
            </div>
          </VueSlickCarousel>
          <button class="slider-nav slider-next" @click="showNext"></button>

          <VueSlickCarousel
            ref="slider2"
            v-bind="slickOptions"
            class="slider-thumb"
          >
            <div
              v-for="item in content.customers"
              :key="item.id"
              class="customer"
            >
              <p v-if="item.text && item.text[0].text" class="customer-text">
                {{ item.text[0].text }}
              </p>
              <h4 class="customer-name">
                {{ item.name[0].text }}
              </h4>
              <p
                v-if="item.company && item.company[0].text"
                class="customer-company"
              >
                {{ item.company[0].text }}
              </p>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'CustomersFeedback',
  components: { VueSlickCarousel },
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      slickOptionsImg: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        asNavFor: this.$refs.slider2,
      },
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        asNavFor: this.$refs.slider1,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 5,
        //     },
        //   },
        //   {
        //     breakpoint: 640,
        //     settings: {
        //       slidesToShow: 2.5,
        //     },
        //   },
        //   // You can unslick at a given breakpoint now by adding:
        //   // settings: "unslick"
        //   // instead of a settings object
        // ],
      },
    };
  },
  methods: {
    // syncSliders(currentPosition, nextPosition) {
    //   // this.$refs.slider1.next();
    //   this.$refs.slider1.prev();
    //   // this.$refs.slider2.next();
    //   this.$refs.slider2.prev();
    // },
    showNext() {
      this.$refs.slider1.next();
      this.$refs.slider2.next();
    },
    showPrev() {
      this.$refs.slider1.prev();
      this.$refs.slider2.prev();
    },
  },
};
</script>
