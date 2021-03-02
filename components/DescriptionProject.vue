<template>
  <section class="description">
    <div class="container">
      <!-- <div class="hidden">{{ content }}</div> -->
      <div class="inner-wrap">
        <div class="text-holder">
          <h2
            v-if="
              content.description_title && content.description_title[0].text
            "
            class="section-title"
          >
            {{ content.description_title[0].text }}
          </h2>

          <a :href="content.project_link.url" class="link">
            {{ content.project_link.url }}
          </a>

          <div class="list-holder">
            <p
              v-if="
                content.description_text && content.description_text[0].text
              "
              class="description-text"
            >
              {{ content.description_text[0].text }}
            </p>
            <ul
              v-if="
                content.description_list && content.description_list.length > 0
              "
              class="description-list"
            >
              <li v-for="item in content.description_list" :key="item.id">
                {{ item.text }}
              </li>
            </ul>
            <!-- <ul class="list-description">
              <li class="list-item">
                {{ item.description_list }}
              </li>
            </ul> -->
          </div>

          <h2
            v-if="
              content.technologies_title && content.technologies_title[0].text
            "
            class="section-title"
          >
            {{ content.technologies_title[0].text }}
          </h2>

          <ul class="icon-holder">
            <li
              v-for="item in content.technology_icons"
              :key="item.id"
              class="icon-item"
            >
              <img
                v-if="item.technology_ico && item.technology_ico.url"
                :src="item.technology_ico.url"
                :alt="item.technology_ico.alt"
              />
            </li>
          </ul>
        </div>

        <div class="img-holder">
          <div class="img-inner">
            <img
              :class="{ disabled: !content.isimageinlaptop }"
              src="../assets/img/laptop.png"
              class="img-wrap"
              alt="laptop"
            />
            <img
              v-if="content.description_image && content.description_image.url"
              :src="content.description_image.url"
              :alt="content.description_image.alt"
              class="preview"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'DescriptionProject',
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
