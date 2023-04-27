<template>
  <navbar />
  <search
    :page_name="page_name"
    :url_base="base_url"
    @DisplayNone="showNone()"
    @DisplayInfo="(data) => showInfo(data)"
  />
  <div
    v-if="found_search"
    class="bg-white border-4 border-red-700 rounded-xl w-4/12 mt-5 mx-auto"
  >
    <p>The search have no response</p>
  </div>
  <div
    v-for="(item, index) in search_data"
    :key="item.index"
    :index="index"
    class="relative w-8/12 mx-auto mt-12 rounded-lg shadow-sm shadow-slate-500 border-4 border-double border-red-100 text-left back-image"
  >
    <button
      @click="SaveSpell(index)"
      class="absolute text-yellow-900 bg-stone-100 rounded-lg font-bold hover:bg-yellow-900 hover:text-stone-100 p-1 mt-2 mr-4 top-0 right-0"
    >
      Save
    </button>
    <p class="mt-1 ml-1 text-white text-lg font-bold">
      {{ item.name }}
    </p>
    <p class="mt-3 ml-1 text-white">
      <span class="font-bold">Description:</span> {{ item.desc[0] }}
    </p>
    <p class="mt-1 ml-1 text-white">
      <span class="font-bold">Range:</span> {{ item.range[0] }}
    </p>
    <p class="mt-1 ml-1 text-white">
      <span class="font-bold">Components:</span>
      {{ item.components.toString() }}
      <span class="font-bold ml-2">Ritual:</span>
      {{ item.ritual }}
      <span class="font-bold ml-2">Concentration:</span>
      {{ item.concentration }}
      <span class="font-bold ml-2">Casting Time:</span>
      {{ item.casting_time }}
      <span class="font-bold ml-2">Level:</span>
      {{ item.level }}
      <span class="font-bold ml-2">Attack type:</span>
      {{ item.attack_type }}
    </p>
    <p class="mt-1 ml-1 text-white">
      <span class="font-bold">Material:</span>
      {{ item.material }}
    </p>
    <p class="mt-1 ml-1 text-white">
      <span class="font-bold">Components:</span>
      {{ item.components.toString() }}
    </p>
    <p class="mt-1 ml-1 text-white">
      <span class="font-bold">Damage by Slot Level:</span>
      {{ formatDamageBySlot(item.damage.damage_at_slot_level) }}
    </p>
    <p class="mt-1 ml-1 text-white">
      <span class="font-bold">Scholl:</span>
      {{ item.school.name }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import search from "@/components/search.vue";

export default {
  components: {
    navbar,
    search,
  },
  name: "home-view",
  data() {
    return {
      page_name: "Home",
      base_url: "spells",
      found_search: false,
      search_data: [
        {
          index: "acid-arrow",
          name: "Acid Arrow",
          desc: [
            "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
          ],
          higher_level: [
            "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
          ],
          range: "90 feet",
          components: ["V", "S", "M"],
          material: "Powdered rhubarb leaf and an adder's stomach.",
          ritual: false,
          duration: "Instantaneous",
          concentration: false,
          casting_time: "1 action",
          level: 2,
          attack_type: "ranged",
          damage: {
            damage_type: {
              index: "acid",
              name: "Acid",
              url: "/api/damage-types/acid",
            },
            damage_at_slot_level: {
              2: "4d4",
              3: "5d4",
              4: "6d4",
              5: "7d4",
              6: "8d4",
              7: "9d4",
              8: "10d4",
              9: "11d4",
            },
          },
          school: {
            index: "evocation",
            name: "Evocation",
            url: "/api/magic-schools/evocation",
          },
          classes: [
            { index: "wizard", name: "Wizard", url: "/api/classes/wizard" },
          ],
          subclasses: [
            { index: "lore", name: "Lore", url: "/api/subclasses/lore" },
            { index: "land", name: "Land", url: "/api/subclasses/land" },
          ],
          url: "/api/spells/acid-arrow",
        },
      ],
    };
  },
  mounted() {},
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
      console.log(this.search_data);
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
