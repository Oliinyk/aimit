<template>
  <div class="notification">
    <div class="error-holder">
      <p>Please fix the errors indicated</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notification',
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
