<template>
  <div
    class="container-fluid flex bg-red-700 h-24 w-8/12 mx-auto mt-10 rounded-lg minimo"
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
      <span class="mx-2 cursor-pointer" @click="handleInfo"
        ><i class="text-white fas fa-regular fa-xl fa-circle-info"></i
      ></span>
    </div>
  </div>
  <div
    v-if="error"
    class="container bg-stone-300 h-10 border-8 border-red-700 w-4/12 mx-auto mt-3 rounded-lg minimo"
  >
    <p class="text-center">Deve-se preencher algo antes de pesquisar</p>
  </div>
  <div
    v-if="guide_visible"
    class="container text-center bg-stone-300 border-8 border-red-700 w-8/12 mx-auto mt-3 rounded-lg minimo"
  >
    <p class="font-bold text-black">Search Example:</p>
    <span class="text-yellow-800"> {{ formatSearchGuide }}</span>
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
  emits: ["DisplayInfo", "DisplayNone"],

  data() {
    return {
      searchString: "",
      searchInformation: "",
      guide_visible: false,
      guideSearch: [],
      formatSearchGuide: "",
      error: false,
    };
  },
  methods: {
    async handleInfo() {
      try {
        const { data } = await api.get(`${this.url_base}`);
        this.guideSearch = data;
        let search = "";
        data.results.forEach((item) => {
          search += `${item.name}, `;
        });
        this.formatSearchGuide = search.slice(0, -2);
        this.guide_visible = true;
        this.error = false;
      } catch (error) {
        console.log(error);
      }
    },

    async handleSearch() {
      try {
        const newString = this.searchString.toLowerCase().replaceAll(" ", "-");
        this.guide_visible = false;
        if (newString.length !== 0) {
          const { data } = await api.get(`${this.url_base}/${newString}`);
          if (data) this.$emit("DisplayInfo", data);
          else this.$emit("DisplayNone");
          this.error = false;
        } else {
          this.error = true;
        }
      } catch (error) {
        console.log(error);
        this.$emit("DisplayNone");
      }
    },
  },
};
</script>

<style>
.minimo {
  min-width: 350px;
}
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
