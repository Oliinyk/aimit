<template>
  <section class="main-project">
    <div class="container">
      <!-- <div class="hidden">{{ content }}</div> -->
      <div class="inner-wrap">
        <div class="col-l">
          <div class="page-item">
            <h2
              v-if="content.page_title && content.page_title[0]"
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
              v-if="content.page_title2 && content.page_title2[0]"
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
              v-if="content.page_title4 && content.page_title4[0]"
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
              v-if="content.page_title1 && content.page_title1[0]"
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
              v-if="content.page_title3 && content.page_title3[0]"
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
              v-if="content.page_title5 && content.page_title5[0]"
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
              v-if="content.page_title6 && content.page_title6[0]"
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
      <div>
        <h2>{{ content.using_colors }}</h2>
        <div v-for="color in content.colors" :key="color.id">
          <div></div>
          <span>{{ color.color }}</span>
        </div>
        <h2>{{ content.using_fonts }}</h2>
        <div v-for="font_img in content.using_fonts1" :key="font_img.id">
          <img :src="font_img.font_img.url" alt="" />
        </div>
        <h2>{{ content.using_fonts }}</h2>
        <p>{{ content.using_grid_val }}</p>
        <svg
          v-if="content.using_grid_val"
          width="871"
          height="80"
          viewBox="0 0 871 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M434.866 0H436.866V80H434.866V0ZM2.86719 24L2.86719 80H0.867191L0.867188 24H2.86719ZM219.867 80V24H217.867V80H219.867ZM653.864 24V80H651.864V24H653.864ZM111.368 80V24H109.368V80H111.368ZM545.365 24V80H543.365V24H545.365ZM328.366 80V24H326.366V80H328.366ZM762.365 24V80H760.365V24H762.365ZM57.1164 80L57.1164 40H55.1164L55.1164 80H57.1164ZM491.116 40V80H489.116V40H491.116ZM274.116 80V40H272.116V80H274.116ZM708.115 40V80H706.115V40H708.115ZM165.616 80V40H163.616V80H165.616ZM599.615 40V80H597.615V40H599.615ZM382.616 80V40H380.616V80H382.616ZM816.615 40V80H814.615V40H816.615ZM870.865 80V24H868.865V80H870.865Z"
            fill="#174354"
          />
        </svg>
        <h2>{{ content.logotitle }}</h2>
        <div v-for="logo in content.logo" :key="logo.id">
          <p>{{ logo.aboutlogo }}</p>
          <img :src="logo.logo_img.url" alt="" />
        </div>
        <div
          v-for="(item, index) in content.titleandimage"
          :key="item.id"
          :class="'blok-' + index"
        >
          <h2>{{ item.title }}</h2>
          <div>
            <img v-if="item.image" :src="item.image.url" alt="" />
            <img v-if="item.otherimage2" :src="item.otherimage2.url" alt="" />
            <img v-if="item.otherimage3" :src="item.otherimage3.url" alt="" />
            <img v-if="item.otherimage4" :src="item.otherimage4.url" alt="" />
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
