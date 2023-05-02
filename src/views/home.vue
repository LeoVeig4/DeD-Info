<template>
  <navbar />
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
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import spells from "@/components/spells.vue";
import monsters from "@/components/monsters.vue";
import classes from "@/components/classes.vue";

export default {
  components: {
    navbar,
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
