export default {
  publicRuntimeConfig: {
    apiURL: process.env.API_URL || "http://localhost:1080",
  },

  components: true,

  buildModules: ["@nuxtjs/apollo"],

  apollo: {
    clientConfigs: {
      default: "~/apollo/client.config.js",
    },
  },
};
