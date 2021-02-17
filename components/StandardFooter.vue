<template>
  <div class="footer">
    <div class="container">
      <!-- {{ content.socials }} -->
      <div class="img-row">
        <a href="/" class="footer-logo">
          <img
            v-if="content.footer_logo"
            :src="content.footer_logo.url"
            alt=""
          />
        </a>
      </div>

      <div class="content">
        <div class="text-holder">
          <div>
            <p
              v-if="
                content.footer_description && content.footer_description[0].text
              "
              class="description"
            >
              {{ content.footer_description[0].text }}
            </p>

            <div class="social-items">
              <h4 class="f-title">Follow us</h4>
              <ul class="img-holder">
                <li
                  v-for="item in content.socials"
                  :key="item.id"
                  class="social-item"
                >
                  <a
                    v-if="item.social_ico && item.social_ico.url"
                    :href="item.social_ico.alt"
                  >
                    <img
                      :src="item.social_ico.url"
                      :alt="item.social_ico.alt"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ul class="footer-navigation">
              <li
                v-for="item in content.footer_nav"
                :key="item.id"
                class="nav-item"
              >
                <a :href="'/' + item.nav_item[0].text">
                  {{ item.nav_item[0].text }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form novalidate="true" class="form" @submit="checkForm">
          <!-- <div v-if="errors.length" class="error-holder">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul>
          </div> -->

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
                  <option value="value1">Значение 1</option>
                  <option value="value2">Значение 2</option>
                  <option value="value3">Значение 3</option>
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

      <div class="copyright">
        {{ currentDate.getFullYear() }}
        All rights reserved by Aim it
      </div>
    </div>

    <!-- <div class="notification" :class="{ show: errors.length }">-->
    <div class="notification" :class="{ show: removeTimeError }">
      <div v-if="errors.length" class="error-holder">
        <p>Please fix the errors indicated</p>
        <!-- <p>Please correct the following error(s):</p>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul> -->
      </div>
    </div>
  </div>
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
      // this.focusedName = false;
      // this.focusedEmail = false;

      if (!this.name) {
        this.focusedName = false;
        this.nameError = true;
      } else {
        this.focusedName = true;
        this.nameError = false;
      }

      // if (!this.email) {
      //   this.focusedEmail = false;
      // } else {
      //   this.focusedEmail = true;
      // }
    },
    onBlurMail() {
      if (!this.email) {
        this.focusedEmail = false;
        this.mailError = true;
        // this.isMailErrorMessage.push('Please enter your email address.');
      } else if (!this.validEmail(this.email)) {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = true;
        // this.errors.push('Please enter a valid email address.');
      } else {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = false;
      }
    },
    checkForm(e) {
      // validation after click on submit button
      this.errors = [];
      // if (!this.name) this.errors.push('Please enter your name.');
      if (!this.name) {
        this.errors.push('Name');
        this.removeTimeError = true;
      }
      if (!this.email) {
        // this.errors.push('Please enter your email address.');
        this.errors.push('Email address');
        this.removeTimeError = true;
      } else if (!this.validEmail(this.email)) {
        // this.errors.push('Please enter a valid email address.');
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
        // this.isMailErrorMessage.push('Please enter your email address.');
      } else if (!this.validEmail(this.email)) {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = true;
        // this.errors.push('Please enter a valid email address.');
      } else {
        this.focusedEmail = true;
        this.mailError = false;
        this.mailValidError = false;
      }

      e.preventDefault();
    },
    validEmail(email) {
      // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const re = /^[\w-/\\/g.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return re.test(email);
    },
  },
};
</script>
