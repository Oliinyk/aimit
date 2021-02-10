<template>
  <section class="specialization">
    <div class="container">
      <div class="hidden">{{ content }}</div>
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.title_section[0].text }}
        </h2>

        <ul class="item-holder">
          <li
            v-for="item in content.services"
            :key="item.id"
            class="services-item"
          >
            <h5 class="item-title">
              {{ content.services[0].service_name.text }}
            </h5>
            <p>
              <!-- {{ content.services.service_text.text }} -->
            </p>
            <div class="icon-holder">
              <img :src="content.services[0].service_image.url" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Specialization',
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
