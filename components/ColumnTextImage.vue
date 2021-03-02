<template>
  <section class="column-text column-text-image">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.section_title[0].text }}
        </h2>

        <div class="text-holder">
          <div class="content-wrap">
            <div
              v-for="item in content.column_text_left"
              :key="item.id"
              class="content-item"
            >
              <p v-if="item.text_holder && item.text_holder[0].text">
                {{ item.text_holder[0].text }}
              </p>
              <img
                v-if="item.column_image && item.column_image.url"
                :src="item.column_image.url"
                :alt="item.column_image.alt"
              />
            </div>
          </div>

          <div class="content-wrap">
            <div
              v-for="item in content.column_text_right"
              :key="item.id"
              class="content-item"
            >
              <p v-if="item.text_holder && item.text_holder[0].text">
                {{ item.text_holder[0].text }}
              </p>
              <img
                v-if="item.column_image && item.column_image.url"
                :src="item.column_image.url"
                :alt="item.column_image.alt"
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
  name: 'ColumnTextImage',
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
