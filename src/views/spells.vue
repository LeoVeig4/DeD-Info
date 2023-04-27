<template>
  <navbar />
  <search
    :page_name="page_name"
    :url_base="base_url"
    @DisplayNone="showNone()"
    @DisplayInfo="(data) => showInfo(data)"
  />
  <spells :spells="search_data" :isSearch="true" :haveFound="found_search" />
  <div class="w-8/12 mt-10 mx-auto">
    <h1 class="text-left font-md text-slate-200">-- Saved --</h1>
  </div>
  <spells :spells="saved_data" :isSearch="false" :haveFound="found_search" />
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import search from "@/components/search.vue";
import spells from "@/components/spells.vue";

export default {
  components: {
    navbar,
    search,
    spells,
  },
  name: "home-view",
  data() {
    return {
      page_name: "Spells",
      base_url: "spells",
      found_search: false,
      saved_data: [],
      search_data: [],
    };
  },
  mounted() {
    this.saved_data = this.$store.getters.spells;
  },
  methods: {
    SaveSpell(index) {
      const spell = this.search_data[index];
      this.$store.commit("storeSpell", spell);
    },
    formatDamageBySlot(objString) {
      let result = "";
      for (let key in objString) result += `(${key}: ${objString[key]}), `;
      return result.slice(0, -2);
    },
    showNone() {
      this.found_search = true;
    },
    showInfo(data) {
      this.search_data.push(data);
      this.found_search = false;
    },
  },
};
</script>

<style>
.floaters {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
}
.back-image {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../public/fundo_madeira.jpg");
  background-size: 150px;
}
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }

  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-5px);
  }

  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.floaters2 {
  transform: translatey(0px);
  animation: float2 2s ease-in-out infinite;
}

@keyframes float2 {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-5px);
  }

  100% {
    transform: translatey(0px);
  }
}
</style>
