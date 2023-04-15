const store = {
  state: {
    role: "",
    prefix: "",
  },
  setRole(newValue) {
    this.state.role = newValue;
  },
  clearRole() {
    this.state.role = "";
  },
  setPrefix(newValue) {
    this.state.prefix = newValue;
  },
  clearPrefix() {
    this.state.prefix = "";
  },
};

export default store;
