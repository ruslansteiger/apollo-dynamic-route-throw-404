import { createHttpLink } from "apollo-link-http";
import Cookies from "js-cookie";

function encryptedCsrfToken() {
  return Cookies.get("XSRF-TOKEN") || "";
}

export default function({ $config: { apiURL } }) {
  return {
    defaultHttpLink: false,

    link: createHttpLink({
      uri: `${apiURL}/graphql`,

      credentials: "include",

      fetch: (uri, options) => {
        options.headers["X-XSRF-TOKEN"] = encryptedCsrfToken();

        return fetch(uri, options);
      },
    }),
  };
}
