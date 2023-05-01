<template>
  <nav class="bg-red-800 border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0"
    >
      <a
        href="https://dnd.wizards.com/pt-BR"
        target="_blanck"
        class="flex items-center"
      >
        <img
          src="../../public/DeD_logo.png"
          class="h-8 mr-3"
          alt="D&D 5 Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >D&D 5</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm force_color rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="DisplayDropdown()"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          ref="list_ul"
          class="font-medium flex flex-col p-6 md:p-5 mt-4 border border-gray-100 rounded-lg bg-red-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-red-950"
        >
          <li v-for="navpage in navpages" :key="navpage.name">
            <router-link
              :to="navpage.route"
              class="cursor-pointer block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-800 md:p-0"
              >{{ navpage.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "navbar-home",
  data() {
    return {
      navpages: [
        {
          name: "Home",
          route: "/home",
        },
        {
          name: "Classes",
          route: "/classes",
        },
        {
          name: "Spells",
          route: "/spells",
        },
        {
          name: "Monsters",
          route: "/monsters",
        },
        {
          name: "My Hero",
          route: "/myhero",
        },
      ],
      pageActive: this.actualTitle,
      dropdown: "none",
    };
  },
  methods: {
    DisplayDropdown() {},
    goto(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style>
body {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../public/fundo_pedra.webp");
  position: relative;
}
nav a.router-link-exact-active {
  color: white;
}
</style>
