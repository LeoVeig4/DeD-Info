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
          class="h-8 mr-3 border-2 rounded-full"
          alt="D&D 5 Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >D&D 5</span
        >
      </a>
      <button
        ref="teste"
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

      <div
        class="w-full md:block md:w-auto"
        :class="{ hidden: dropNav }"
        id="navbar-default"
      >
        <ul
          ref="list_ul"
          class="font-medium flex flex-col p-6 md:p-5 mt-4 border border-gray-100 rounded-lg bg-red-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-red-950"
        >
          <li v-for="navpage in navpages" :key="navpage.name">
            <div
              @click="goto(navpage)"
              :class="{
                'text-white': navpage.route == $route.path,
                'text-slate-400': navpage.route != $route.path,
              }"
              class="font-bold cursor-pointer block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-800 md:p-0"
            >
              {{ navpage.name }}
            </div>
          </li>
          <li>
            <div
              class="font-bold cursor-pointer block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-800 md:p-0"
            >
              <button @click="handleSignOut()">Sign out</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ Component, route }">
    <Transition mode="out-in" :name="slide">
      <div :key="route.name" class="teste">
        <component :is="Component" />
      </div>
    </Transition>
  </router-view>
</template>

<script>
// @ is an alias to /src

export default {
  name: "navbar-home",
  data() {
    return {
      dropNav: true,
      slide: "right",
      teste: true,
      navpages: [
        {
          name: "Home",
          route: "/logged/home",
          number: 0,
        },
        {
          name: "Classes",
          route: "/logged/classes",
          number: 1,
        },
        {
          name: "Spells",
          route: "/logged/spells",
          number: 2,
        },
        {
          name: "Monsters",
          route: "/logged/monsters",
          number: 3,
        },
        {
          name: "My Hero",
          route: "/logged/myhero",
          number: 4,
        },
      ],
      pageActive: {},
      dropdown: "none",
      toastId: "",
    };
  },
  mounted() {
    this.pageActive = this.navpages.find(
      (page) => page.route === window.location.pathname
    );
  },
  methods: {
    handleSignOut() {
      // leo@mail.com
      this.$store.commit("removeRole");
      this.$store.commit("removeToken");
      this.$store.commit("removeCards");
      this.toastId = this.$toast.success(
        "Logged Out! Until next time Warrior!",
        {
          position: this.$toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
          theme: "dark",
        }
      );
      setTimeout(() => this.$router.push("/"), 3000);
    },
    DisplayDropdown() {
      this.dropNav = !this.dropNav;
    },
    goto(page) {
      if (page.number > this.pageActive.number) this.slide = "right";
      else this.slide = "left";
      this.pageActive = page;
      this.$router.push(page.route);
    },
  },
};
</script>

<style>
.hidden {
  display: block;
}

@media screen and (max-width: 768px) {
  .hidden {
    display: none;
  }
}

.right-enter-active,
.right-leave-active {
  animation: 1s slide-left-in;
  transition: animation 1s;
}

.right-enter-from,
.right-leave-to {
  animation: 1s slide-right-out;
  transition: animation 1s;
}

.left-enter-active,
.left-leave-active {
  animation: 1s slide-right-in;
  transition: animation 1s;
}

.left-enter-from,
.left-leave-to {
  animation: 1s slide-left-out;
  transition: animation 1s;
}

@keyframes slide-right-in {
  from {
    margin-left: -100%;
    margin-right: 100%;
    opacity: 0%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes slide-right-out {
  to {
    margin-left: -100%;
    margin-right: 100%;
    opacity: 0%;
  }

  from {
    margin-left: 0%;
  }
}

@keyframes slide-left-in {
  from {
    margin-left: 100%;
    margin-right: -100%;
    opacity: 0%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes slide-left-out {
  to {
    margin-left: 100%;
    margin-right: -100%;
    opacity: 0%;
  }

  from {
    margin-left: 0%;
  }
}

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
