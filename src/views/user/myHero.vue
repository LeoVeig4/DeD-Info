<template>
  <div
    class="bg-white border-4 border-red-700 rounded-xl w-6/12 mt-8 mx-auto container-login"
  >
    <img
      src="../../../public/DeD_logo.png"
      class="h-28 mx-auto mt-3 mb-3 border-4 rounded-full"
      alt="D&D 5 Logo"
    />
    <p class="text-3xl m-5 text-stone-200 font-bold">You are logged in!!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import apiprivate from "@/services/apiprivate.js";
export default {
  components: {},
  name: "my-hero-view",
  data() {
    return {
      page_name: "My Hero",
    };
  },
  async mounted() {
    try {
      const { data } = await apiprivate.get("/cards");
      this.$store.commit("storeSaved", data);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    displayError() {
      if (this.hasError != "") return true;
      return false;
    },
  },
};
</script>

<style>
.floaters {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
}

.bt-background {
  background-color: #b91c1c;
}

.bt-background:hover {
  background-color: #ebd6a7;
}

.text-color {
  color: #b91c1c;
}

.text-color:hover {
  color: #ebd6a7;
}

.container-login {
  max-width: 450px;
  min-width: 300px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../../public/fundo_madeira.jpg");
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
