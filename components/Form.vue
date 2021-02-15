<template>
  <section class="form-section">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.form_title[0].text }}
        </h2>
        <form class="form">
          <div class="form-row">
            <div class="form-col input-col">
              <div class="form-group">
                <div class="label">Your name*</div>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <div class="label">Your email</div>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-col area-col">
              <div class="form-group">
                <div class="label">Tell us about your project</div>
                <textarea class="form-control" />
              </div>
            </div>
          </div>
          <div class="form-row justify-content-end">
            <div class="form-group">
              <button type="button" class="btn" @click="submit">Send</button>
            </div>
          </div>
        </form>
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
