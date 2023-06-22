<template>
  <teleport to="body">
    <div
      class="minimo fixed z-10 overflow-y-auto inset-0 bg-black bg-opacity-50"
    >
      <div
        ref="especificDiv"
        @click="handleClickInside"
        class="mx-auto mt-32 w-8/12 rounded-lg shadow-sm shadow-slate-500 border-4 border-black text-left back-image"
      >
        <h3 class="text-white text-center text-xl font-bold">{{ text }}</h3>
        <img
          class="mx-auto mb-3 mt-1 w-11/12 object-contain border-2 rounded-lg"
          :src="link"
          alt="Monster Photo"
          :key="link"
        />
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
  },
  data() {
    return {
      click: false,
    };
  },
  emits: ["close"],
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$refs.especificDiv.contains(event.target) && this.click) {
        this.$emit("close");
        document.removeEventListener("click", this.handleClickOutside);
      }
      this.click = true;
    },
  },
};
</script>
