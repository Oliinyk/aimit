<template>
  <section class="gallery">
    <div class="container">
      <div class="hidden1">{{ content.gallery_list }}</div>

      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.section_title[0].text }}
        </h2>

        <img
          v-for="(item, i) in content.gallery_list"
          :key="i"
          :src="item.gallery_img.url"
          class="image"
          @click="index = i"
        />
        <!-- <client-only placeholder="Loading...">
          <vue-gallery-slideshow
            v-for="(item, i) in content.gallery_list"
            :key="i"
            :images="item.gallery_img.url"
            :index="index"
            @close="index = null"
          ></vue-gallery-slideshow>
        </client-only> -->
      </div>
    </div>
  </section>
</template>
<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
  name: 'Gallery',
  components: {
    // VueGallerySlideshow,
  },
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      // images: [
      //   'https://placekitten.com/801/800',
      //   'https://placekitten.com/802/800',
      //   'https://placekitten.com/803/800',
      //   'https://placekitten.com/804/800',
      //   'https://placekitten.com/805/800',
      //   'https://placekitten.com/806/800',
      //   'https://placekitten.com/807/800',
      //   'https://placekitten.com/808/800',
      //   'https://placekitten.com/809/800',
      //   'https://placekitten.com/810/800',
      // ],
      index: null,
    };
  },
};
</script>
