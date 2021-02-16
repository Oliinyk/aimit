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
                <label
                  class="label placeholder"
                  :class="{ active: focusedName }"
                >
                  Your name*
                </label>
                <input
                  type="text"
                  class="form-control"
                  @focus="focusedName = true"
                  @blur="focusedName = false"
                />
              </div>
              <div class="form-group">
                <label
                  class="label placeholder"
                  :class="{ active: focusedEmail }"
                >
                  Your email
                </label>
                <input
                  type="text"
                  class="form-control"
                  @focus="focusedEmail = true"
                  @blur="focusedEmail = false"
                />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-col area-col">
              <div class="form-group">
                <label class="label">Tell us about your project</label>
                <textarea class="form-control" />
              </div>
            </div>
          </div>
          <div class="form-row justify-content-end">
            <div class="form-group">
              <button type="button" class="btn btn-white">Send</button>
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
    return {
      focusedName: false,
      focusedEmail: false,
    };
  },
  methods: {
    onFocus() {
      this.focusedName = true;
      this.focusedEmail = true;
    },
    onBlur() {
      this.focusedName = false;
      this.focusedEmail = false;
    },
  },
};
</script>
