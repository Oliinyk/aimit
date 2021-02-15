<template>
  <section class="form-section">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.form_title[0].text }}
        </h2>

        <div>
          <!-- <form class="layout-form">
            <div
              class="form-group"
              :class="{ error: validation.hasError('email') }"
            >
              <div class="label">* Email</div>
              <div class="content">
                <input v-model="email" type="text" class="form-control" />
              </div>
              <div class="message">{{ validation.firstError('email') }}</div>
            </div>
            <div class="form-group">
              <div class="actions">
                <button type="button" class="btn btn-primary" @click="submit">
                  Submit
                </button>
              </div>
            </div>
          </form> -->
        </div>
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
