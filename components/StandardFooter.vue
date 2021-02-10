<template>
  <div>
    {{ props.tagline }}
    <hr />
    <ul>
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
    {{ props.copyrightLine }}
  </div>
</template>

<script>
export default {
  name: 'StandardFooter',
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
};
</script>
