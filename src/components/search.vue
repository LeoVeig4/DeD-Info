<template>
  <div class="container-fluid flex bg-red-700 h-24 w-8/12 mx-auto mt-10 rounded-lg minimo">
    <div class="h-24 w-4/12 bg-red-900 rounded-lg">
      <h1 class="text-stone-200 text-base sm:text-xl font-bold mt-7 sm:mt-9">
        Search for <span class="text-amber-300">{{ this.page_name }}</span>
      </h1>
    </div>
    <div class="w-8/12 m-auto">
      <input v-model="searchString" class="h-10 w-8/12 rounded-lg m-auto text-base text-center bg-stone-300" />
      <span class="ml-3 cursor-pointer" @click="handleSearch"><img class="h-6 w-6 inline"
          src="../../public/search-icon.svg" /></span>
      <span class="mx-2 cursor-pointer" @click="handleInfo"><i
          class="text-white fas fa-regular fa-xl fa-circle-info"></i></span>
    </div>
  </div>
  <div v-if="error" class="bg-white border-4 border-red-700 rounded-xl w-4/12 mt-5 mx-auto">
    <p class="text-center">You must right something before interacting</p>
  </div>
  <div v-if="guide_visible"
    class="container text-center bg-stone-300 border-8 border-red-700 w-8/12 mx-auto mt-3 rounded-lg minimo">
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
      toastId: "",
    };
  },
  mounted() { },
  methods: {
    async handleInfo() {
      this.$gtag.event(`search_info_${this.url_base}`, { 'event_category': 'engagement', 'event_label': 'method' });
      this.toastId = this.$toast.loading("Searching", {
        toastId: "customId",
        autoClose: false,
        position: this.$toast.POSITION.BOTTOM_CENTER,
      });

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
        console.log("oi");
        this.$toast.update(this.toastId, {
          render: "Search Completed!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          type: "success",
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
        this.$toast.update(this.toastId, {
          render: "Error!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          type: "error",
          isLoading: false,
        });
      }
    },

    async handleSearch() {
      this.$gtag.event(`search_for${this.url_base}`, { 'event_category': 'engagement', 'event_label': 'method' });
      this.toastId = this.$toast.loading("Searching", {
        toastId: "customId",
        autoClose: false,
        position: this.$toast.POSITION.BOTTOM_CENTER,
      });
      try {
        const newString = this.searchString.toLowerCase().replaceAll(" ", "-");
        this.guide_visible = false;
        if (newString.length !== 0) {
          const { data } = await api.get(`${this.url_base}/${newString}`);
          if (data) this.$emit("DisplayInfo", data);
          else this.$emit("DisplayNone");
          this.error = false;
          this.$toast.update(this.toastId, {
            render: "Search Completed!",
            autoClose: 2000,
            closeOnClick: true,
            closeButton: true,
            theme: "dark",
            type: "success",
            isLoading: false,
          });
        } else {
          this.$toast.update(this.toastId, {
            render: "Write Something!",
            autoClose: 2000,
            closeOnClick: true,
            closeButton: true,
            type: "error",
            theme: "dark",
            isLoading: false,
          });
          this.error = true;
        }
      } catch (error) {
        this.$toast.update(this.toastId, {
          render: "Error!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          theme: "dark",
          type: "error",
          isLoading: false,
        });
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
  background-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
    url("../../public/fundo_pedra.webp");
  position: relative;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
