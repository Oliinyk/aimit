<template>
  <section class="form-section">
    <div class="container">
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.form_title[0].text }}
        </h2>
        <form novalidate="true" class="form" @submit="checkForm">
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
                  id="name"
                  v-model="name"
                  name="name"
                  type="text"
                  class="form-control"
                  :class="{ error: nameError }"
                  @focus="focusedName = true"
                  @blur="onBlurName"
                />
                <p v-if="nameError" class="error-text">
                  Please enter your name.
                </p>
              </div>
              <div class="form-group">
                <label
                  class="label placeholder"
                  :class="{ active: focusedEmail }"
                >
                  Your email*
                </label>
                <input
                  id="email"
                  v-model="email"
                  name="email"
                  type="text"
                  class="form-control"
                  :class="{ error: mailError }"
                  @focus="focusedEmail = true"
                  @blur="onBlurMail"
                />
                <p v-if="mailError" class="error-text">
                  Please enter your email address.
                </p>
                <p v-if="mailValidError" class="error-text">
                  Please enter a valid email address.
                </p>
              </div>

              <div class="form-group form-group-select">
                <select name="select">
                  <option value="skype">skype</option>
                  <option value="whatsapp">whatsapp</option>
                  <option value="telegram">telegram</option>
                  <option value="viber">viber</option>
                </select>
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
              <button type="submit" class="btn btn-white">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="notification" :class="{ show: removeTimeError }">
      <div v-if="errors.length" class="error-holder">
        <p>Please fix the errors indicated</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'StandardFooter',
  components: {},
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      nameError: false,
      mailError: false,
      mailValidError: false,
      focusedName: false,
      focusedEmail: false,
      currentDate: new Date(),
      removeTimeError: false,
    };
  },
  methods: {
    onFocus() {
      this.focusedName = true;
      this.focusedEmail = true;
    },
    onBlurName() {
      if (!this.name) {
        this.focusedName = false;
        this.nameError = true;
      } else {
        this.focusedName = true;
        this.nameError = false;
      }
    },
    onBlurMail() {
      if (!this.email) {
        this.focusedEmail = false;
        this.mailError = true;
      } else if (!this.validEmail(this.email)) {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = true;
      } else {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = false;
      }
    },
    checkForm(e) {
      // validation after click on submit button
      this.errors = [];
      if (!this.name) {
        this.errors.push('Name');
        this.removeTimeError = true;
      }
      if (!this.email) {
        this.errors.push('Email address');
        this.removeTimeError = true;
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Email address not valid');
        this.removeTimeError = true;
      }
      if (!this.errors.length) return true;
      setTimeout(() => (this.removeTimeError = false), 3000);
      // END validation after click on submit button

      if (!this.name) {
        this.focusedName = false;
        this.nameError = true;
      } else {
        this.focusedName = true;
        this.nameError = false;
      }

      if (!this.email) {
        this.focusedEmail = false;
        this.mailError = true;
      } else if (!this.validEmail(this.email)) {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = true;
      } else {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = false;
      }

      e.preventDefault();
    },
    validEmail(email) {
      const re = /^[\w-/\\/g.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return re.test(email);
    },
    sendEmail() {},
  },
};
</script>
