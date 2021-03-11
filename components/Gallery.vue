<template>
  <section class="gallery">
    <div class="container">
      <!-- <div class="hidden">{{ content.gallery_list }}</div> -->
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.section_title[0].text }}
        </h2>

        <div>
          <VueSlickCarousel v-bind="slickOptions">
            <div
              v-for="item in content.gallery_list"
              :key="item.id"
              class="item-holder"
            >
              <img :src="item.gallery_img.url" class="image" />
              <div v-if="item.date.length > 0" class="date-holder">
                <p class="date">
                  {{ item.date[0].text }}
                </p>
              </div>
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
export default {
  name: 'Gallery',
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
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        // adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1.5,
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
