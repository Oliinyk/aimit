<template>
  <section class="specialization">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.section_title[0].text }}
        </h2>

        <ul class="item-holder">
          <li
            v-for="item in content.services"
            :key="item.id"
            class="services-item"
          >
            <div class="inner-item">
              <h5
                v-if="item.service_name && item.service_name[0].text"
                class="item-title"
              >
                {{ item.service_name[0].text }}
              </h5>
              <p v-if="item.service_text && item.service_text[0].text">
                {{ item.service_text[0].text }}
              </p>
              <div class="icon-holder">
                <img
                  v-if="item.service_image && item.service_image.url"
                  :src="item.service_image.url"
                  :alt="item.service_image.alt"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Specialization',
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
