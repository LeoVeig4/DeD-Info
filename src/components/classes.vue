<template>
  <div
    class="container-fluid flex bg-red-700 h-24 w-8/12 mx-auto mt-10 rounded-lg"
  >
    <div class="h-24 w-4/12 bg-red-900 rounded-lg">
      <h1 class="text-stone-200 text-base sm:text-xl font-bold mt-7 sm:mt-9">
        Search for <span class="text-amber-300">{{ this.page_name }}</span>
      </h1>
    </div>
    <div class="w-8/12 m-auto">
      <input
        v-model="searchString"
        class="h-10 w-8/12 rounded-lg m-auto text-base text-center bg-stone-300"
      />
      <span class="ml-3 cursor-pointer" @click="handleSearch"
        ><img class="h-6 w-6 inline" src="../../public/search-icon.svg"
      /></span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/services/api.js";

export default {
  name: "search-component",
  props: {
    url_base: String,
    page_name: String,
  },

  data() {
    return {
      searchString: "",
      searchInformation: "",
    };
  },
  methods: {
    async handleSearch() {
      try {
        const newString = this.searchString.toLowerCase().replaceAll(" ", "-");
        const { data } = await api.get(`${this.url_base}/${this.searchString}`);
        if (data) this.$emit("DisplayInfo", data);
        else this.$emit("DisplayNone");
      } catch (error) {
        console.log(error);
        this.$emit("DisplayNone");
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
