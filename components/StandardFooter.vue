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
                <nuxt-link
                  :to="
                    '/' +
                    (item.nav_item[0].text === 'Home'
                      ? ''
                      : item.nav_item[0].text)
                  "
                >
                  {{ item.nav_item[0].text }}
                </nuxt-link>
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

              <!-- <i class="fas fa-universal-access"></i> -->
              <div class="form-group form-group-select">
                <select name="select">
                  <option value="skype">
                    skype
                    <!-- <i class="fab fa-skype"></i> -->
                    <!-- <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 7.16479 7.16479 0 16 0C24.8352 0 32 7.16479 32 16C32 24.8352 24.8352 32 16 32C7.16479 32 0 24.8352 0 16ZM20.3931 25.9375C21.8804 25.9375 23.2783 25.3591 24.3303 24.3066C25.3826 23.2554 25.9614 21.8564 25.9617 20.3689C25.9617 19.4187 25.7168 18.4849 25.2563 17.6592C25.3591 17.0994 25.4131 16.5264 25.4131 15.9539C25.4131 14.6838 25.1646 13.4519 24.6733 12.292C24.1995 11.1716 23.5215 10.1655 22.657 9.30151C21.7937 8.43774 20.7869 7.75952 19.667 7.28564C18.5076 6.79517 17.2754 6.54639 16.0056 6.54639C15.407 6.54639 14.8076 6.60278 14.2241 6.7146C14.2233 6.71493 14.2223 6.71503 14.2212 6.71514C14.2207 6.7152 14.2202 6.71525 14.2197 6.71533C13.4194 6.28979 12.519 6.0625 11.6079 6.0625C10.1204 6.0625 8.72168 6.64185 7.66968 7.69409C6.61816 8.74585 6.03857 10.1445 6.03857 11.6321C6.03857 12.5791 6.28198 13.5098 6.73926 14.3323C6.64648 14.8652 6.59766 15.4099 6.59766 15.9539C6.59766 17.2241 6.84619 18.4558 7.3374 19.616C7.81079 20.7366 8.48901 21.7422 9.35254 22.606C10.217 23.47 11.2227 24.1489 12.3438 24.6216C13.5032 25.113 14.7356 25.3621 16.0056 25.3621C16.5583 25.3621 17.1123 25.3115 17.6531 25.2156C18.4863 25.687 19.4297 25.9375 20.3931 25.9375ZM15.5771 14.3718L17.7773 14.8601C20.1877 15.3972 20.7988 16.8044 20.7988 18.1299C20.7988 20.1826 19.2231 21.7153 16.0432 21.7153C12.7009 21.7153 11.2058 20.072 11.2058 18.8406C11.2058 18.209 11.6721 17.7664 12.3147 17.7664C12.9192 17.7664 13.202 18.1332 13.5286 18.5568C13.9747 19.1355 14.5024 19.8201 16.0432 19.8201C17.4094 19.8201 18.1636 19.0784 18.1636 18.3191C18.1636 17.8625 17.9385 17.3564 17.0388 17.1348L14.0662 16.3926C11.6721 15.7922 11.2375 14.498 11.2375 13.2815C11.2375 10.7554 13.616 9.80688 15.8494 9.80688C17.9067 9.80688 20.332 10.9441 20.332 12.4595C20.332 13.1089 19.7698 13.4866 19.1274 13.4866C18.6229 13.4866 18.3652 13.1979 18.0629 12.8591C17.6339 12.3784 17.115 11.7969 15.6726 11.7969C14.4526 11.7969 13.7769 12.3494 13.7769 13.1401C13.7769 13.9292 14.7402 14.1812 15.5771 14.3718Z"
                        fill="white"
                      />
                    </svg> -->
                  </option>
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
