<template>
  <div class="bg-red-500"><p>teste</p></div>
</template>

<script>
// @ is an alias to /src
import api from "../services/api.js";

export default {
  name: "search-component",
  props: {
    url_base: String,
  },

  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    handleSearch() {
      try {
        const info = api.get(`${this.url_base}/${this.searchString}`);
        console.log(info);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
body {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../public/fundo_pedra.webp");
  position: relative;
}
nav a.router-link-exact-active {
  color: white;
}
</style>
