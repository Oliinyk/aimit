<template>
  <section class="form-section">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.form_title[0].text }}
        </h2>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Form',
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
