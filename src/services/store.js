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
  },
  getters: {
    spells(state) {
      return state.spells
    }
  },
  actions: {
    
  }
});

export default store;
