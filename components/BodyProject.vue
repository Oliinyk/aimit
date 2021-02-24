<template>
  <section class="main-project">
    <div class="container">
      <!-- <div class="hidden">{{ content }}</div> -->
      <div class="inner-wrap">
        <div class="col-l">
          <div class="page-item">
            <h2
              v-if="content.page_title && content.page_title[0].text"
              class="section-title"
            >
              {{ content.page_title[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image && content.page_image.url"
                :src="content.page_image.url"
                :alt="content.page_image.alt"
                class="preview"
              />
            </div>
          </div>

          <div class="page-item">
            <h2
              v-if="content.page_title2 && content.page_title2[0].text"
              class="section-title"
            >
              {{ content.page_title2[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image2 && content.page_image2.url"
                :src="content.page_image2.url"
                :alt="content.page_image2.alt"
                class="preview"
              />
            </div>
          </div>

          <div class="page-item">
            <h2
              v-if="content.page_title4 && content.page_title4[0].text"
              class="section-title"
            >
              {{ content.page_title4[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image4 && content.page_image4.url"
                :src="content.page_image4.url"
                :alt="content.page_image4.alt"
                class="preview"
              />
            </div>
          </div>
        </div>

        <div class="col-r">
          <div class="page-item">
            <h2
              v-if="content.page_title1 && content.page_title1[0].text"
              class="section-title"
            >
              {{ content.page_title1[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image1 && content.page_image1.url"
                :src="content.page_image1.url"
                :alt="content.page_image1.alt"
                class="preview"
              />
            </div>
          </div>

          <div class="page-item">
            <h2
              v-if="content.page_title3 && content.page_title3[0].text"
              class="section-title"
            >
              {{ content.page_title3[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image3 && content.page_image3.url"
                :src="content.page_image3.url"
                :alt="content.page_image3.alt"
                class="preview"
              />
            </div>
          </div>

          <div class="page-item">
            <h2
              v-if="content.page_title5 && content.page_title5[0].text"
              class="section-title"
            >
              {{ content.page_title5[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image5 && content.page_image5.url"
                :src="content.page_image5.url"
                :alt="content.page_image5.alt"
                class="preview"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="page-item">
            <h2
              v-if="content.page_title6 && content.page_title6[0].text"
              class="section-title"
            >
              {{ content.page_title6[0].text }}
            </h2>
            <div class="img-holder">
              <img
                v-if="content.page_image6 && content.page_image6.url"
                :src="content.page_image6.url"
                :alt="content.page_image6.alt"
                class="preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BodyProject',
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
