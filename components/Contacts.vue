<template>
  <section class="contacts">
    <div class="container">
      <div class="inner-wrap">
        <div class="text-holder">
          <h1 class="title">
            {{ content.hero_title1[0].text }}
            <span>{{ content.hero_title1[0].text }}</span>
            {{ content.hero_title2[0].text }}
          </h1>
        </div>
        <div>
          <div>
            <img :src="content.contact[0].icon.url" alt="" />
            <p>{{ content.contact[0].contacttext }}</p>
          </div>
          <div>
            <img :src="content.contact[1].icon.url" alt="" />
            <p>{{ content.contact[1].contacttext }}</p>
          </div>
        </div>
        <h2>{{ content.subtitle[0].text }}</h2>
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
      </div>
    </div>
  </section>
</template>
<script>
import ButtonsBlock from '~/components/ButtonsBlock.vue';
export default {
  name: 'Contacts',
  components: {
    ButtonsBlock,
  },
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
