<template>
  <section class="gallery">
    <div class="container">
      <!-- <div class="hidden1">{{ content }}</div> -->

      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.section_title[0].text }}
        </h2>

        <img
          v-for="(image, i) in images"
          :key="i"
          class="image"
          :src="image"
          @click="index = i"
        />
        <vue-gallery-slideshow
          :images="images"
          :index="index"
          @close="index = null"
        ></vue-gallery-slideshow>
        <!-- <div
          v-for="item in content.gallery_list"
          :key="item.id"
          class="gallery-list"
        >
          545
          <img
            :src="item.gallery_img.url"
            :alt="item.gallery_img.alt"
            class="image"
            @click="index = item.id"
          />
          <vue-gallery-slideshow
            :images="item.gallery_img.url"
            :index="index"
            @close="index = null"
          ></vue-gallery-slideshow>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script>
// import fancyBox from 'vue-fancybox';
import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
  name: 'Gallery',
  components: {
    VueGallerySlideshow,
  },
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      images: [
        'https://placekitten.com/801/800',
        'https://placekitten.com/802/800',
        'https://placekitten.com/803/800',
        'https://placekitten.com/804/800',
        'https://placekitten.com/805/800',
        'https://placekitten.com/806/800',
        'https://placekitten.com/807/800',
        'https://placekitten.com/808/800',
        'https://placekitten.com/809/800',
        'https://placekitten.com/810/800',
      ],
      index: null,
    };
  },
};
</script>
