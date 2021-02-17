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
          <div v-if="errors.length" class="error-holder">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul>
          </div>

          <div class="form-row">
            <div class="form-col input-col">
              <div
                :class="{ 'is-valid': validate, 'is-invalid': !validate }"
                class="form-group"
              >
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
                  @focus="focusedName = true"
                  @blur="onBlur"
                />
                <!-- <p v-if="name">Name required</p> -->
                <!-- <span v-if="msg.nameIn">{{ error.name }}</span> -->
              </div>
              <div class="form-group">
                <label
                  class="label placeholder"
                  :class="{ active: focusedEmail }"
                >
                  Your email
                </label>
                <input
                  id="email"
                  v-model="email"
                  name="email"
                  type="text"
                  class="form-control"
                  @focus="focusedEmail = true"
                  @blur="onBlur"
                />
                <!-- <span v-if="msg.email">{{ msg.email }}</span> -->
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

    <!-- <ul>
      <li v-for="group in props.nav" :key="group.title">
        <strong>{{ group.title }}</strong>
        <ul>
          <li v-for="link in group.links" :key="link.link_label">
            <prismic-link :field="link.link">
              {{ link.link_label }}
            </prismic-link>
          </li>
        </ul>
      </li>
    </ul>
    <hr />
    {{ props.copyrightLine }} -->
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
      // nameIn: null,
    },
  },
  data() {
    return {
      errors: [],
      name: null,
      // nameError: null,
      email: null,
      focusedName: false,
      focusedEmail: false,
      currentDate: new Date(),
    };
  },
  methods: {
    onFocus() {
      this.focusedName = true;
      this.focusedEmail = true;
    },
    onBlur() {
      // this.focusedName = false;
      // this.focusedEmail = false;

      if (!this.name) {
        this.focusedName = false;
      } else {
        this.focusedName = true;
      }

      if (!this.email) {
        this.focusedEmail = false;
      } else {
        this.focusedEmail = true;
      }
    },
    checkForm(e) {
      this.errors = [];
      // if (!this.name) this.nameError.push('Name required.');
      if (!this.name) this.errors.push('Name required.');

      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Enter a valid email address');
      }
      if (!this.errors.length) return true;
      e.preventDefault();

      // if (!this.name) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
    validEmail(email) {
      // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const re = /^[\w-/\\/g.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return re.test(email);
    },
  },
};
</script>
