import { createStore } from "vuex";
const store = createStore({
  state: {
    spells: [],
    classes: [],
    monsters: [],
    maginItems: [],
  },
  mutations: {
    storeSpell(state, data) {
      if (
        state.spells.find((element) => element.name === data.name) === undefined
      )
        return;
      state.spells.push(data);
    },
    removeSpell(state, data) {
      const spell = state.spells.findIndex(
        (element) => element.name === data.name
      );
      state.spells.splice(spell, 1);
    },
  },
  getters: {},
});

export default store;
