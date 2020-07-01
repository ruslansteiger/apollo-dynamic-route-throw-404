<template>
  <div>
    <h1>Dynamic Page!</h1>
    <NuxtLink to="/">Index</NuxtLink>
    <h2>{{ $route.params.subcategory }}</h2>
    <div v-if="$apolloData.queries.products.loading">
      Loading...
    </div>
    <div v-else>
      <div v-for="product in products" :key="product.title">
        <h3>{{ product.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import searchBySubcategoryQuery from "~/graphql/searchBySubcategory.graphql";

export default {
  apollo: {
    products: {
      query: searchBySubcategoryQuery,
      variables() {
        return {
          slug: this.$route.params.subcategory,
        };
      },
      update: (data) => data.searchBySubcategory,
      error({ message }) {
        console.log("🤷‍♂️", message);
        this.$nuxt.error({ statusCode: 404, message });
      },
    },
  },
};
</script>
