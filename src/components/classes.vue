<template>
  <div
    v-if="haveFound && isSearch"
    class="bg-white border-4 border-red-700 rounded-xl w-4/12 mt-5 mx-auto"
  >
    <p>The search have no response</p>
  </div>
  <div
    v-for="(item, index) in classes"
    :key="item.index"
    :index="index"
    class="minimo relative w-8/12 mx-auto mt-12 rounded-lg shadow-sm shadow-slate-500 border-4 border-black text-left back-image"
  >
    <button
      @click="SaveClass(index)"
      v-if="isSearch"
      class="absolute text-yellow-900 bg-stone-100 rounded-lg font-bold hover:bg-yellow-900 hover:text-stone-200 p-1 mt-2 mr-4 top-0 right-0"
    >
      Save
    </button>
    <button
      @click="RemoveClass(index)"
      v-else
      class="absolute text-red-600 bg-stone-100 rounded-lg font-bold hover:bg-red-600 hover:text-stone-200 p-1 mt-2 mr-4 top-0 right-0"
    >
      Remove
    </button>
    <p class="mt-4 ml-4 text-amber-500 text-lg font-bold">
      {{ item.name }}
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Hit die: </span>
      <span class="text-stone-200">{{ item.hit_die }}</span>
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Proficiencies Choices: </span>
      <span class="text-stone-200">{{ item.proficiency_choices[0].desc }}</span>
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Proficiencies: </span>
      <span class="text-stone-200">{{ FormatProficiencies(index) }}</span>
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold"
        >Starting Equipment <i class="fas fa-regular fa-circle-info"></i>:
      </span>
      <span class="text-stone-200">{{ FormatEquipment(index) }}</span>
    </p>
    <p class="mt-3 ml-4">
      <span class="font-bold text-white">Equipment choices: </span>
    </p>
    <li
      v-for="equipment in item.starting_equipment_options"
      :key="equipment.equipment"
      class="text-stone-200 ml-4"
    >
      {{ equipment.desc }}
    </li>
    <div class="mb-3" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    classes: Array,
    isSearch: Boolean,
    haveFound: Boolean,
  },
  name: "classes-component",
  data() {
    return {
      base_url: "classes",
    };
  },
  mounted() {},
  methods: {
    FormatEquipment(index) {
      let equipment = "";
      this.classes[index].starting_equipment.forEach((item) => {
        equipment += `${item.equipment.name} (${item.quantity}), `;
      });
      return equipment.slice(0, -2);
    },
    FormatProficiencies(index) {
      let proficiencies = "";
      this.classes[index].proficiencies.forEach((item) => {
        proficiencies += `${item.name}, `;
      });
      return proficiencies.slice(0, -2);
    },
    RemoveClass(index) {
      const Class = this.classes[index];
      this.$store.commit("removeClasses", Class);
    },
    SaveClass(index) {
      const Class = this.classes[index];
      this.$store.commit("storeClasses", Class);
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
