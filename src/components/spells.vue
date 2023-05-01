<template>
  <div
    v-if="haveFound && isSearch"
    class="bg-white border-4 border-red-700 rounded-xl w-4/12 mt-5 mx-auto"
  >
    <p>The search have no response</p>
  </div>
  <div
    v-for="(item, index) in spells"
    :key="item.index"
    :index="index"
    class="minimo relative w-8/12 mx-auto mt-12 rounded-lg shadow-sm shadow-slate-500 border-4 border-black text-left back-image"
  >
    <button
      @click="SaveSpell(index)"
      v-if="isSearch"
      class="absolute text-yellow-900 bg-stone-100 rounded-lg font-bold hover:bg-yellow-900 hover:text-stone-200 p-1 mt-2 mr-4 top-0 right-0"
    >
      Save
    </button>
    <button
      @click="RemoveSpell(index)"
      v-else
      class="absolute text-red-600 bg-stone-100 rounded-lg font-bold hover:bg-red-600 hover:text-stone-200 p-1 mt-2 mr-4 top-0 right-0"
    >
      Remove
    </button>
    <p class="mt-4 ml-4 text-amber-500 text-lg font-bold">
      {{ item.name }}
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Description: </span>
      <span class="text-stone-200">{{ item.desc[0] }}</span>
    </p>
    <p class="mt-1 ml-4 text-white">
      <span class="font-bold">Range: </span>
      <span class="text-stone-200">{{ item.range[0] }}</span>
    </p>
    <p class="mt-1 ml-4 text-white">
      <span class="font-bold">Components: </span>
      <span class="text-stone-200">{{ item.components.toString() }}</span>
      <span class="font-bold ml-2">Ritual: </span>
      <span class="text-stone-200">{{ item.ritual }} </span>
      <span class="font-bold ml-2">Concentration: </span>
      <span class="text-stone-200">{{ item.concentration }}</span>
      <span class="font-bold ml-2">Casting Time: </span>
      <span class="text-stone-200">{{ item.casting_time }}</span>
      <span class="font-bold ml-2">Level: </span>
      <span class="text-stone-200">{{ item.level }}</span>
      <span class="font-bold ml-2">Attack type: </span>
      <span class="text-stone-200">{{ item.attack_type }}</span>
    </p>
    <p class="mt-1 ml-4 text-white">
      <span class="font-bold">Material: </span>
      <span class="text-stone-200">{{ item.material }}</span>
    </p>
    <p class="mt-1 ml-4 text-white">
      <span class="font-bold">Components: </span>
      <span class="text-stone-200">{{ item.components.toString() }}</span>
    </p>
    <p class="mt-1 ml-4 text-white">
      <span class="font-bold">Damage by Slot Level: </span>
      <span class="text-stone-200">{{ formatDamageBySlot(index) }}</span>
    </p>
    <p class="mt-1 ml-4 mb-4 text-white">
      <span class="font-bold">Scholl: </span>
      <span class="text-stone-200">{{ item.school.name }}</span>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    spells: Array,
    isSearch: Boolean,
    haveFound: Boolean,
  },
  name: "spells-component",
  data() {
    return {
      base_url: "spells",
    };
  },
  mounted() {},
  methods: {
    RemoveSpell(index) {
      const spell = this.spells[index];
      this.$store.commit("removeSpell", spell);
    },
    SaveSpell(index) {
      const spell = this.spells[index];
      this.$store.commit("storeSpell", spell);
    },
    formatDamageBySlot(index) {
      let result = "";
      if (this.spells[index].damage) {
        for (let key in this.spells[index].damage.damage_at_slot_level)
          result += `(${key}: ${this.spells[index].damage.damage_at_slot_level[key]}), `;
      }

      return result.slice(0, -2);
    },
    showNone() {
      this.found_search = true;
    },
    showInfo(data) {
      this.search.push(data);
      console.log(this.search_data);
      this.found_search = false;
    },
  },
};
</script>

<style>
.minimo {
  min-width: 350px;
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
</style>
