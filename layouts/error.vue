<template>
  <div>
    <h1>Error page!</h1>
    <div>{{ message }}</div>
    <p v-if="statusCode === 404">
      <NuxtLink to="/">Index</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || "<%= messages.client_error %>";
    },
  },

  head() {
    return {
      title: this.message,
    };
  },
};
</script>
