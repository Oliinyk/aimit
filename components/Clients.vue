<template>
  <section class="clients">
    <div class="container">
      <!-- <div class="hidden1">{{ content.clients }}</div> -->
      <div class="inner-wrap">
        <h2 class="section-title">
          {{ content.clients_title[0].text }}
        </h2>

        <ul class="item-holder">
          <li
            v-for="item in content.clients"
            :key="item.id"
            class="clients-item"
          >
            <img :src="item.clients_item.url" :alt="item.clients_item.alt" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Clients',
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
