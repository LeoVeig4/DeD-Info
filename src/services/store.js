import { createStore } from "vuex";

const spellObj = JSON.parse(localStorage.getItem("spells"));
const classesObj = JSON.parse(localStorage.getItem("classes"));
const monstersObj = JSON.parse(localStorage.getItem("monsters"));
//const magicItemsObj = JSON.parse(localStorage.getItem("magicItems"));
const token = localStorage.getItem("userToken");
const user = localStorage.getItem("@Role");

const store = createStore({
  state: {
    spells: spellObj || [],
    classes: classesObj || [],
    monsters: monstersObj || [],
    //maginItems: magicItemsObj || [],
    token: token || null,
    role: user || null,
  },
  mutations: {
    storeSaved(state, data) {
      const spells = Object.values(data.spells);
      state.spells = spells;
      localStorage.setItem("spells", JSON.stringify(state.spells));
      if (!state.spells) localStorage.removeItem("spells");
      const classes = Object.values(data.classes);
      state.classes = classes;
      localStorage.setItem("classes", JSON.stringify(state.classes));
      if (!state.classes) localStorage.removeItem("classes");
      const monsters = Object.values(data.monsters);
      state.monsters = monsters;
      localStorage.setItem("monsters", JSON.stringify(state.monsters));
      if (!state.monsters) localStorage.removeItem("monsters");
    },
    storeRole(state, data) {
      state.role = data;
      localStorage.setItem("@Role", data);
    },
    removeRole(state) {
      state.role = null;
      localStorage.removeItem("@Role");
    },
    storeToken(state, data) {
      state.token = data;
      localStorage.setItem("userToken", data);
    },
    removeToken(state) {
      state.token = null;
      localStorage.removeItem("userToken");
    },
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
      if (state.spells === []) localStorage.removeItem("spells");
    },
    storeClasses(state, data, text) {
      console.log(text);
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
      if (state.classes === []) localStorage.removeItem("classes");
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
      if (state.monsters === []) localStorage.removeItem("monsters");
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
    token(state) {
      return state.token;
    },
    role(state) {
      return state.role;
    },
  },
  actions: {},
});

export default store;
