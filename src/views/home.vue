<template>
  <div>
    <div
      class="container bg-red-700 h-24 w-8/12 mx-auto mt-10 rounded-lg minimo md:pt-4 pt-7"
    >
      <h1 class="md:text-6xl text-4xl font-bold text-amber-100 text-center">
        All Saved Stuff
      </h1>
    </div>
    <div class="w-8/12 mt-10 mx-auto">
      <h1 class="text-left font-md text-slate-200">-- Saved Classes--</h1>
    </div>
    <classes :classes="saved_classes" :isSearch="false" :haveFound="false" />
    <div class="w-8/12 mt-10 mx-auto">
      <h1 class="text-left font-md text-slate-200">-- Saved Spells--</h1>
    </div>
    <spells :spells="saved_spells" :isSearch="false" :haveFound="false" />
    <div class="w-8/12 mt-10 mx-auto">
      <h1 class="text-left font-md text-slate-200">-- Saved Monsters--</h1>
    </div>
    <monsters :monsters="saved_monsters" :isSearch="false" :haveFound="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import spells from "@/components/spells.vue";
import monsters from "@/components/monsters.vue";
import classes from "@/components/classes.vue";

export default {
  components: {
    spells,
    monsters,
    classes,
  },
  name: "home-view",
  data() {
    return {
      page_name: "Home",
      saved_spells: [],
      saved_classes: [],
      saved_monsters: [],
    };
  },
  mounted() {
    this.saved_spells = this.$store.getters.spells;
    this.saved_classes = this.$store.getters.classes;
    this.saved_monsters = this.$store.getters.monsters;
  },
  methods: {},
};
</script>

<style>
.back-image {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../public/fundo_madeira.jpg");
  background-size: 150px;
}
</style>
