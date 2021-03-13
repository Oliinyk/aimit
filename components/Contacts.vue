<template>
  <section class="contacts">
    <div class="container">
      <div class="inner-wrap">
        <div class="hero">
          <div class="text-holder">
            <h1 class="title">
              {{ content.hero_title1[0].text }}
              <span>{{ content.hero_title2[0].text }}</span>
            </h1>
          </div>
          <div class="img-holder">
            <img :src="content.hero_image.url" :alt="content.hero_image.alt" />
          </div>
        </div>

        <div class="info-holder">
          <div class="info-row">
            <img :src="content.contact[0].icon.url" alt="" />
            <a :href="'tel:' + content.contact[0].contacttext">
              {{ content.contact[0].contacttext }}
            </a>
          </div>
          <div class="info-row">
            <img :src="content.contact[1].icon.url" alt="" />
            <a :href="'mailto:' + content.contact[1].contacttext">
              {{ content.contact[1].contacttext }}
            </a>
          </div>
        </div>

        <div class="main-holder">
          <h2 class="section-title">
            {{ content.subtitle[0].text }}
          </h2>

          <ButtonsBlock
            :buttons="content.tipe_of_project"
            :title="content.blocktitle1"
          />
          <ButtonsBlock
            :buttons="content.services"
            :title="content.blocktitle2"
          />
          <ButtonsBlock
            :buttons="content.estimated_budget"
            :title="content.blocktitle3"
          />

          <h4 class="item-title">Description</h4>
          <form novalidate="true" class="contact-form" @submit="checkForm">
            <div class="form-row">
              <div class="form-col area-col">
                <div class="form-group">
                  <textarea class="form-control" />
                </div>
              </div>
              <div class="form-col file-col">
                <label>
                  <span class="label-title">Add a file</span>
                  <input
                    id="file"
                    ref="file"
                    type="file"
                    multiple
                    @change="handleFileUpload"
                  />
                  <span class="file-btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.65823 17.4998H2.29164C1.02749 17.4998 0 16.4723 0 15.2081V2.29164C0 1.02749 1.02749 0 2.29164 0H11.8748C13.139 0 14.1665 1.02749 14.1665 2.29164V7.36656C14.1665 7.71156 13.8865 7.99156 13.5415 7.99156C13.1965 7.99156 12.9165 7.71156 12.9165 7.36656V2.29164C12.9165 1.71748 12.449 1.24998 11.8748 1.24998H2.29164C1.71748 1.24998 1.24998 1.71748 1.24998 2.29164V15.2081C1.24998 15.7823 1.71748 16.2498 2.29164 16.2498H7.65823C8.00322 16.2498 8.28322 16.5298 8.28322 16.8748C8.28322 17.2198 8.00322 17.4998 7.65823 17.4998ZM14.5832 19.9998C11.5965 19.9998 9.16657 17.5698 9.16657 14.5832C9.16657 11.5966 11.5965 9.16661 14.5832 9.16661C17.5698 9.16661 19.9998 11.5966 19.9998 14.5832C19.9998 17.5698 17.5698 19.9998 14.5832 19.9998ZM14.5832 10.4166C12.2857 10.4166 10.4166 12.2857 10.4166 14.5832C10.4166 16.8807 12.2857 18.7498 14.5832 18.7498C16.8806 18.7498 18.7498 16.8807 18.7498 14.5832C18.7498 12.2857 16.8806 10.4166 14.5832 10.4166ZM14.5832 17.4998C14.2382 17.4998 13.9582 17.2198 13.9582 16.8748V15.2082H12.2915C11.9465 15.2082 11.6665 14.9282 11.6665 14.5832C11.6665 14.2382 11.9465 13.9582 12.2915 13.9582H13.9582V12.2916C13.9582 11.9466 14.2382 11.6666 14.5832 11.6666C14.9282 11.6666 15.2082 11.9466 15.2082 12.2916V13.9582H16.8748C17.2198 13.9582 17.4998 14.2382 17.4998 14.5832C17.4998 14.9282 17.2198 15.2082 16.8748 15.2082H15.2082V16.8748C15.2082 17.2198 14.9282 17.4998 14.5832 17.4998ZM3.12497 7.91662H11.0415C11.3865 7.91662 11.6665 7.63662 11.6665 7.29163C11.6665 6.94663 11.3865 6.66664 11.0415 6.66664H3.12497C2.77997 6.66664 2.49997 6.94663 2.49997 7.29163C2.49997 7.63662 2.77997 7.91662 3.12497 7.91662ZM7.70824 11.2499H3.12497C2.77997 11.2499 2.49997 10.9699 2.49997 10.6249C2.49997 10.2799 2.77997 9.99994 3.12497 9.99994H7.70824C8.05323 9.99994 8.33323 10.2799 8.33323 10.6249C8.33323 10.9699 8.05323 11.2499 7.70824 11.2499ZM3.12497 4.58335H6.87491C7.21991 4.58335 7.49991 4.30335 7.49991 3.95835C7.49991 3.61336 7.21991 3.33336 6.87491 3.33336H3.12497C2.77997 3.33336 2.49997 3.61336 2.49997 3.95835C2.49997 4.30335 2.77997 4.58335 3.12497 4.58335Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </label>
                <p class="file-name">
                  {{ file.name }}
                </p>
                <p class="file-text">Any info about your project (optional)</p>
              </div>

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
                <div class="form-group text-right">
                  <button type="submit" class="btn">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Notification :class="{ show: removeTimeError }" />
  </section>
</template>
<script>
import Notification from '~/components/Notification.vue';
import ButtonsBlock from '~/components/ButtonsBlock.vue';
export default {
  name: 'Contacts',
  components: {
    ButtonsBlock,
    Notification,
  },
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
      file: '',
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
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file.name);
    },
  },
};
</script>
