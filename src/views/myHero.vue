<template>
  <div
    v-if="!ComponentSignUp && !ComponentForgot"
    class="bg-white border-4 border-red-700 rounded-xl w-6/12 mt-8 mx-auto container-login"
  >
    <img
      src="../../public/DeD_logo.png"
      class="h-28 mx-auto mt-3 mb-3 border-4 rounded-full"
      alt="D&D 5 Logo"
    />
    <div class="mb-4 mt-5">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        class="shadow mx-3 appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelLogin.email"
        type="email"
        placeholder="Email"
      />
    </div>
    <div class="mb-6">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-10/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelLogin.password"
        type="password"
        placeholder="******************"
      />
    </div>
    <p v-if="displayError()" class="text-red-500 italic text-sm">
      {{ this.hasError }}
    </p>
    <div class="flex items-center justify-between">
      <button
        class="bt-background m-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="HandleSignIn"
      >
        Sign In
      </button>
      <div class="m-3">
        <button @click="openForgot()">
          <a
            class="text-color inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </button>

        <button @click="openSignUp()">
          <a
            class="text-color inline-block m-3 align-baseline font-bold text-sm text-blue-700 hover:text-blue-800"
            href="#"
          >
            Sign Up
          </a>
        </button>
      </div>
    </div>
  </div>
  <div
    v-if="ComponentForgot"
    class="bg-white border-4 border-red-700 rounded-xl w-6/12 mt-8 mx-auto container-login"
  >
    <div class="textBack absolute m-4 cursor-pointer" @click="goBack()">
      <i class="fa-solid fa-arrow-left"></i>Voltar
    </div>
    <img
      src="../../public/DeD_logo.png"
      class="h-28 mx-auto mt-3 mb-3 border-4 rounded-full"
      alt="D&D 5 Logo"
    />
    <div class="mb-4 mt-5">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        class="shadow mx-3 appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelSignForgot.email"
        type="email"
        placeholder="Email"
      />
    </div>

    <p v-if="displayError()" class="text-red-500 italic text-sm">
      {{ this.hasError }}
    </p>
    <div class="flex items-center justify-center">
      <button
        class="bt-background m-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="HandleForgot"
      >
        Send Email
      </button>
    </div>
  </div>
  <div
    v-if="ComponentSignUp"
    class="bg-white border-4 border-red-700 rounded-xl w-6/12 mt-8 mx-auto container-login mb-6"
  >
    <div class="textBack absolute m-4 cursor-pointer" @click="goBack()">
      <i class="fa-solid fa-arrow-left"></i>Voltar
    </div>
    <img
      src="../../public/DeD_logo.png"
      class="h-28 mx-auto mt-3 mb-3 border-4 rounded-full"
      alt="D&D 5 Logo"
    />
    <div class="mb-4 mt-5">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="shadow mx-3 appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelSignUp.name"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-4">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        class="shadow mx-3 appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelSignUp.email"
        type="email"
        placeholder="Email"
      />
    </div>
    <div class="mb-4">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="username">
        Confirm Email
      </label>
      <input
        class="shadow mx-3 appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelSignUp.emailConfirm"
        type="email"
        placeholder="Email"
      />
    </div>
    <div>
      <label class="block text-stone-200 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-10/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelSignUp.password"
        type="password"
        placeholder="******************"
      />
    </div>
    <div class="mb-6">
      <label class="block text-stone-200 text-sm font-bold mb-2" for="password">
        Confirm Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-10/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        v-model="modelSignUp.passwordConfirm"
        type="password"
        placeholder="******************"
      />
    </div>
    <p v-if="displayError()" class="text-red-500 italic text-sm">
      {{ this.hasError }}
    </p>
    <div class="flex items-center justify-center">
      <button
        class="bt-background m-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="HandleSignup()"
      >
        Sign up
      </button>
    </div>
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
      modelLogin: {
        email: "",
        password: "",
      },
      modelSignUp: {
        email: "",
        emailConfirm: "",
        name: "",
        password: "",
        passwordConfirm: "",
      },
      modelSignForgot: {
        email: "",
      },
      hasError: "",
      ComponentSignUp: false,
      ComponentForgot: false,
      toastId: "",
    };
  },
  methods: {
    goBack() {
      this.hasError = "";
      this.ComponentSignUp = false;
      this.ComponentForgot = false;
    },
    openSignUp() {
      this.ComponentSignUp = true;
      this.ComponentForgot = false;
    },
    openForgot() {
      this.ComponentSignUp = false;
      this.ComponentForgot = true;
    },
    displayError() {
      if (this.hasError != "") return true;
      return false;
    },
    async HandleForgot() {
      this.toastId = this.$toast.loading("Sending Email!", {
        toastId: "customId",
        theme: "dark",
        autoClose: false,
        position: this.$toast.POSITION.BOTTOM_CENTER,
      });
      try {
        const { data } = await apiprivate.post("/forgot", this.modelForgot);
        this.$store.commit("storeToken", data.token);
        this.$store.commit("storeRole", "simple-user");
        this.$router.push("/logged/myhero");
        this.$toast.update(this.toastId, {
          render: "Email Sent!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          theme: "dark",
          type: "success",
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
        this.hasError = "something went wrong!";
        if (error.e)
          if (error.e.data)
            if (error.e.data.message)
              this.hasError = error.response.data.message;
        this.$toast.update(this.toastId, {
          render: "Error!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          type: "error",
          theme: "dark",
          isLoading: false,
        });
      }
    },
    async HandleSignup() {
      this.toastId = this.$toast.loading("Creating Warrior", {
        toastId: "customId",
        theme: "dark",
        autoClose: false,
        position: this.$toast.POSITION.BOTTOM_CENTER,
      });
      if (this.modelSignUp.password !== this.modelSignUp.passwordConfirm) {
        this.hasError = `passwords don't match!`;
        return;
      }
      if (this.modelSignUp.email !== this.modelSignUp.emailConfirm) {
        this.hasError = `Emails don't match!`;
        return;
      }
      const model = {
        name: this.modelSignUp.name,
        email: this.modelSignUp.email,
        password: this.modelSignUp.password,
      };
      try {
        await apiprivate.post("/users", model);
        this.$toast.update(this.toastId, {
          render: "User Created!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          theme: "dark",
          type: "success",
          isLoading: false,
        });
        this.goBack();
      } catch (error) {
        console.log(error);
        this.hasError = "something went wrong!";
        if (error.e)
          if (error.e.data)
            if (error.e.data.message)
              this.hasError = error.response.data.message;
        this.$toast.update(this.toastId, {
          render: "Error!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          type: "error",
          theme: "dark",
          isLoading: false,
        });
      }
    },
    async HandleSignIn() {
      this.toastId = this.$toast.loading("Logging In", {
        toastId: "customId",
        theme: "dark",
        autoClose: false,
        position: this.$toast.POSITION.BOTTOM_CENTER,
      });
      this.$gtag.event("login", {
        event_category: "interaction",
        event_label: "login",
        value: "login",
      });
      try {
        const { data } = await apiprivate.post("/auth", this.modelLogin);
        this.$store.commit("storeToken", data.token);
        this.$store.commit("storeRole", "simple-user");
        this.$router.push("/logged/myhero");
        this.$toast.update(this.toastId, {
          render: "Logged In!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          theme: "dark",
          type: "success",
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
        this.hasError = "something went wrong!";
        if (error.e)
          if (error.e.data)
            if (error.e.data.message)
              this.hasError = error.response.data.message;
        this.$toast.update(this.toastId, {
          render: "Error!",
          autoClose: 2000,
          closeOnClick: true,
          closeButton: true,
          type: "error",
          theme: "dark",
          isLoading: false,
        });
      }
    },
  },
};
</script>

<style>
.floaters {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
}

.textBack {
  color: #b91c1c;
}

.textBack:hover {
  color: #ebd6a7;
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
    url("../../public/fundo_madeira.jpg");
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
