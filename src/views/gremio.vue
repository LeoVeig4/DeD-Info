<template>
  <navbar />
  <nav class="text-3xl"><span>ALOOOOOOOOOOOOOOO</span></nav>
  <div><h1 class="font-bold">Hello Wordl</h1></div>
  <div><h1 class="font-bold">Hello Wordl</h1></div>
  <div><h1 class="font-bold">Hello Wordl</h1></div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  components: {
    navbar,
  },
  name: "gremio-view",
  data() {
    return {
      is_muted: false,
    };
  },
  methods: {
    mute() {
      this.is_muted = !this.is_muted;
      document.getElementById("music").muted = this.is_muted;
      console.log(document.getElementById("music").muted, this.is_muted);
    },
    goto() {
      window.location.href = "https://arenapoa.com.br/ingressos/";
    },
  },
};
</script>

<style>
audio {
  margin-top: 2rem;
  margin-bottom: -1rem;
}

@media only screen and (min-width: 600px) {
  body {
    background-color: rgb(0, 0, 0);
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

h1 {
  font-size: 100px;
}

span {
  font-size: 25px;
}

.logo {
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 50%;
}

.small {
  display: relative;
  height: 30px;
}

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

.estrela1 {
  color: yellow;
  position: absolute;
  margin-top: 25px;
}

.estrela2 {
  color: yellow;
  position: absolute;
  margin-left: 93px;
}

.estrela3 {
  color: yellow;
  position: absolute;
  margin-top: 25px;
  margin-left: 186px;
}

.agrup-content {
  border-radius: 10px;
  min-width: 500px;
  width: 60vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0.956),
      rgba(0, 0, 0, 0.708)
    ),
    url("../../public/fundo_pedra.webp");
  background-size: 1300px 1000px;
  background-position: center;
  background-attachment: fixed;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.caixa {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.875);
  width: 400px;
  height: 430px;
  margin: 50px;
}

.caixa-img {
  border-radius: 10%;
  height: 200px;
  height: 200px;
  filter: drop-shadow(0px 20px 5px #000003);
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
}

p {
  font-size: 14px;
  margin: 15px;
}

.bot-grande {
  width: 50vw;
  height: 120px;
  margin: auto;
  border-radius: 40px;
  background: #f2f2f2;
  border-color: rgb(0, 102, 168);
  border-width: 5px;
  margin-bottom: 2rem;

  transition-duration: 0.4s;
}
@media screen and (min-width: 801px) {
  .bot-grande {
    font-size: 35px;
  }
  .bot-grande:hover {
    background-color: rgb(0, 102, 168); /* Green */
    color: #f2f2f2;
    border-width: 25px;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 800px) {
  .bot-grande {
    font-size: 20px;
  }
  .bot-grande:hover {
    background-color: rgb(0, 102, 168); /* Green */
    color: #f2f2f2;
    border-width: 10px;
  }
}

.bot-grande:hover {
  background-color: rgb(0, 102, 168); /* Green */
  color: #f2f2f2;
  border-width: 25px;
}
.ingresso span img {
  width: 90px;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
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
