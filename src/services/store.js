import { createStore } from "vuex";

const spellObj = JSON.parse(localStorage.getItem("spells"));
const classesObj = JSON.parse(localStorage.getItem("classes"));
const monstersObj = JSON.parse(localStorage.getItem("monsters"));
const magicItemsObj = JSON.parse(localStorage.getItem("magicItems"));

const store = createStore({
  state: {
    spells: spellObj || [],
    classes: classesObj || [],
    monsters: monstersObj || [],
    maginItems: magicItemsObj || [],
  },
  mutations: {
    storeSpell(state, data) {
      if (
        state.spells.find((element) => element.name === data.name) !== undefined
      )
        return;
      state.spells.push(data);
      localStorage.setItem("spells", JSON.stringify(state.spells));
    },
    removeSpell(state, data) {
      const spell = state.spells.findIndex(
        (element) => element.name === data.name
      );
      state.spells.splice(spell, 1);
      localStorage.setItem("spells", JSON.stringify(state.spells));
    },
    storeClasses(state, data) {
      if (
        state.classes.find((element) => element.name === data.name) !==
        undefined
      )
        return;
      state.classes.push(data);
      localStorage.setItem("classes", JSON.stringify(state.classes));
    },
    removeClasses(state, data) {
      const Class = state.classes.findIndex(
        (element) => element.name === data.name
      );
      state.classes.splice(Class, 1);
      localStorage.setItem("classes", JSON.stringify(state.classes));
    },
    storeMonster(state, data) {
      if (
        state.monsters.find((element) => element.name === data.name) !==
        undefined
      )
        return;
      state.monsters.push(data);
      localStorage.setItem("monsters", JSON.stringify(state.monsters));
    },
    removeMonster(state, data) {
      const monster = state.monsters.findIndex(
        (element) => element.name === data.name
      );
      state.monsters.splice(monster, 1);
      localStorage.setItem("monsters", JSON.stringify(state.monsters));
    },
  },
  getters: {
    spells(state) {
      return state.spells;
    },
    classes(state) {
      return state.classes;
    },
    monsters(state) {
      return state.monsters;
    },
  },
  actions: {},
});

export default store;
