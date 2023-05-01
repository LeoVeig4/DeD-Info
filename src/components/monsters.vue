<template>
  <div
    v-if="haveFound && isSearch"
    class="bg-white border-4 border-red-700 rounded-xl w-4/12 mt-5 mx-auto"
  >
    <p>The search have no response</p>
  </div>
  <div
    v-for="(item, index) in monsters"
    :key="item.index"
    :index="index"
    class="minimo relative w-8/12 mx-auto mt-12 rounded-lg shadow-sm shadow-slate-500 border-4 border-black text-left back-image"
  >
    <div class="absolute mt-2 mr-4 top-0 right-0">
      <button
        @click="SeePicture(index)"
        class="text-yellow-900 bg-stone-100 rounded-lg font-bold hover:bg-yellow-900 hover:text-stone-200 p-1 mr-2"
      >
        Picture
      </button>
      <button
        @click="SaveMonster(index)"
        v-if="isSearch"
        class="text-yellow-900 bg-stone-100 rounded-lg font-bold hover:bg-yellow-900 hover:text-stone-200 p-1"
      >
        Save
      </button>
      <button
        @click="RemoveMonters(index)"
        v-else
        class="text-red-600 bg-stone-100 rounded-lg font-bold hover:bg-red-600 hover:text-stone-200 p-1"
      >
        Remove
      </button>
    </div>

    <p class="mt-4 ml-4 text-amber-500 text-lg font-bold">
      {{ item.name }}
    </p>
    <p class="mt-3 ml-4 mr-5 text-white flex justify-between flex-wrap">
      <span
        ><span class="font-bold">| STR: </span>
        <span class="text-stone-200">{{ item.strength }} |</span></span
      >
      <span
        ><span class="font-bold">| DEX: </span>
        <span class="text-stone-200">{{ item.dexterity }} |</span></span
      >
      <span
        ><span class="font-bold">| CONST: </span>
        <span class="text-stone-200">{{ item.constitution }} |</span></span
      >
      <span
        ><span class="font-bold">| INT: </span>
        <span class="text-stone-200">{{ item.intelligence }} |</span></span
      >
      <span
        ><span class="font-bold">| WIS: </span>
        <span class="text-stone-200">{{ item.wisdom }} |</span></span
      >
      <span
        ><span class="font-bold">| CHA: </span>
        <span class="text-stone-200">{{ item.charisma }} |</span></span
      >
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Hit Points: </span>
      <span class="text-stone-200"
        >{{ item.hit_points }} ({{ item.hit_points_roll }})</span
      >
    </p>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Speed: </span>
      <span class="text-stone-200"> {{ FormatSpeed(index) }}</span>
    </p>
    <div class="mt-3 text-white flex flex-wrap">
      <div>
        <span class="ml-4 font-bold">XP: </span>
        <span class="text-stone-200">{{ item.xp }}</span>
      </div>
      <div>
        <span class="ml-4 font-bold">Challenge: </span>
        <span class="text-stone-200">{{ item.challenge_rating }}</span>
      </div>
    </div>

    <div class="mt-3 text-white flex flex-wrap">
      <div>
        <span class="ml-4 font-bold">Size: </span>
        <span class="text-stone-200">{{ item.size }}</span>
      </div>
      <div>
        <span class="ml-4 font-bold">Type: </span>
        <span class="text-stone-200">{{ item.type }}</span>
      </div>
      <div>
        <span class="ml-4 font-bold">Alignment: </span>
        <span class="text-stone-200">{{ item.alignment }}</span>
      </div>
    </div>
    <p class="mt-3 ml-4 text-white">
      <span class="font-bold">Proficiencies: </span>
      <span class="text-stone-200"> {{ FormatProficiencies(index) }}</span>
    </p>

    <p class="mt-3 ml-4 text-white font-bold">Special Abilities:</p>
    <div class="flex flex-wrap justify-between">
      <div
        class="specialDiv m-2 border-2 rounded-lg bg-stone-700 w-4/12"
        v-for="abilities in item.special_abilities"
        :key="abilities.name"
      >
        <div class="text-center text-amber-200 font-bold">
          {{ abilities.name }}
        </div>
        <div class="text-sm text-center text-stone-300 m-1">
          {{ abilities.desc }}
        </div>
      </div>
    </div>
    <p class="mt-3 mx-4 text-white font-bold">Actions:</p>
    <div class="flex flex-wrap justify-between">
      <div
        class="specialDiv m-2 border-2 rounded-lg bg-stone-700 w-4/12"
        v-for="actions in item.actions"
        :key="actions.name"
      >
        <div class="text-center text-amber-200 font-bold">
          {{ actions.name }}
        </div>
        <div class="text-sm text-stone-300 m-2 text-center">
          {{ actions.desc }}
        </div>
      </div>
    </div>

    <p class="mt-3 ml-4 text-white font-bold">Legendary Actions:</p>
    <div class="flex flex-wrap justify-between">
      <div
        class="specialDiv m-2 border-2 rounded-lg bg-stone-700 w-4/12"
        v-for="legendary in item.legendary_actions"
        :key="legendary.name"
      >
        <div class="text-center text-amber-200 font-bold">
          {{ legendary.name }}
        </div>
        <div class="text-sm text-stone-300 m-2 text-center">
          {{ legendary.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/services/api.js";

export default {
  props: {
    monsters: Array,
    isSearch: Boolean,
    haveFound: Boolean,
  },
  name: "classes-component",
  data() {
    return {
      base_url: "monsters",
    };
  },
  mounted() {},
  methods: {
    async SeePicture(index) {
      if (this.monsters[index].image) {
        const url = this.monsters[index].image.slice(4);
        const { data } = await api.get(url);
        console.log(data);
      }
    },
    FormatSpecial(index) {
      let special = "";
      this.monsters[index].special_abilities.forEach((item) => {
        special += `${item.name} (${item.value}), `;
      });
      return special;
    },
    FormatProficiencies(index) {
      let proficiencies = "";
      this.monsters[index].proficiencies.forEach((item) => {
        proficiencies += `${item.proficiency.name} (${item.value}), `;
      });
      return proficiencies.slice(0, -2);
    },
    FormatSpeed(index) {
      let speed = "";
      for (let variable of Object.keys(this.monsters[index].speed)) {
        speed += `${variable}: ${this.monsters[index].speed[variable]}, `;
      }
      return speed.slice(0, -2);
    },

    RemoveMonters(index) {
      const monster = this.monster[index];
      this.$store.commit("removeMonster", monster);
    },
    SaveMonster(index) {
      const monster = this.monsters[index];
      this.$store.commit("storeMonster", monster);
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
.specialDiv {
  min-width: 300px;
  width: 50%;
  max-width: 400px;
}
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
