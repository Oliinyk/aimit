<template>
  <section class="column-text">
    <div class="container">
      <div class="inner-wrap">
        <h2
          v-if="content.title_column && content.title_column[0].text"
          class="section-title"
        >
          {{ content.title_column[0].text }}
        </h2>

        <div class="text-holder" :class="{ active: showMore }">
          <div class="content-wrap">
            <div
              v-for="item in content.column_text_left"
              :key="item.id"
              class="content-item"
            >
              <p v-if="item.text_holder && item.text_holder[0].text">
                {{ item.text_holder[0].text }}
              </p>
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
            </div>
          </div>
        </div>

        <div class="btn-holder">
          <button
            type="button"
            class="btn"
            :class="{ more: showMore }"
            @click="showMore = !showMore"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ColumnText',
  components: {},
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showMore: false,
    };
  },
  computed: {
    buttonText() {
      return this.showMore ? 'Less' : 'More';
    },
  },
  methods: {
    toggleText() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
