<template>
  <navbar :actualTitle="page_name" />
  <img src="../../public/comingSoon.jpg" class="rounded-xl m-auto mt-10" />
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  components: {
    navbar,
  },
  name: "my-hero-view",
  data() {
    return {
      is_muted: false,
      page_name: "My Hero",
    };
  },
  methods: {},
};
</script>

<style>
.floaters {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
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
