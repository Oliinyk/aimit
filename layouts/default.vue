<template>
  <div>
    <Nuxt />
    <script
      async
      defer
      src="https://static.cdn.prismic.io/prismic.js?new=true&repo=aimit"
    ></script>
  </div>
</template>
<script>
export default {
  beforeMount() {
    if (!localStorage.lang) {
      localStorage.lang = 'en-us';
    }
  },
};
</script>
