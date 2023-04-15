<template>
  <div>
    <button type="button" class="btn btn-light-outline d-flex" @click="mute">
      <i class="fa-solid fa-volume-high text-white" v-if="!this.is_muted"></i
      ><i class="fa-solid fa-volume-xmark text-white" v-else></i>
    </button>
    <h1 class="text-white">Grêmio</h1>
    <div class="m-4">
      <i class="fa-solid fa-star fa-2xl estrela1 floaters"></i>
      <i class="fa-solid fa-star fa-2xl estrela2 floaters"></i>
      <i class="fa-solid fa-star fa-2xl estrela3 floaters"></i>

      <img class="floaters logo" src="../assets/gremio.png" />
    </div>
  </div>
  <div>
    <img class="small m-2 floaters" src="../assets/rs.jpg" />
    <span class="text-white">O Maior tricolor do Mundo</span>
    <span><img class="small m-2 floaters" src="../assets/rs.jpg" /></span>
  </div>
  <audio controls id="music">
    <source src="../assets/audio/hino-gremio-rs.mp3" type="audio/mpeg" />
  </audio>
  <div class="agrup-content">
    <div class="caixa">
      <div>
        <img class="caixa-img" src="../assets/camisa_marrom.jpg" />
        <h2 class="m-2"><b>Camisa Original</b></h2>
        <p class="text-black font-10">
          Originalmente, o uniforme do clube deveria ser havana (uma espécie de
          marrom), branco e preto. Mas como a cor era difícil de encontrar, a
          diretoria mudou para o azul.
        </p>
      </div>
    </div>
    <div class="caixa">
      <img class="caixa-img" src="../assets/getulio.jpg" />
      <h2 class="m-2"><b>Getúlio e o Grêmio</b></h2>
      <p class="text-black font-10">
        O Grêmio levou o Campeonato Gaúcho de 1930 antes do torneio terminar.
        Com a revolução que levou Getúlio Vargas à presidência do país, a
        disputa foi interrompida e o time consagrado campeão por ter a melhor
        campanha.
      </p>
    </div>
    <div class="caixa">
      <img class="caixa-img" src="../assets/bonde.jpg" />
      <h2 class="m-2"><b>O hino</b></h2>
      <p class="text-black font-10">
        Lupicínio compôs o verso “Até a pé nós iremos” inspirado em uma greve
        dos condutores de bonde em Porto Alegre. Sem transporte público, os
        torcedores do Grêmio tiveram que ir a pé para o Estádio dos Eucaliptos
        acompanhar um clássico contra o Internacional.
      </p>
    </div>
    <div class="caixa">
      <img class="caixa-img" src="../assets/lancheria.webp" />
      <h2 class="m-2"><b>Coca Cola Azul</b></h2>
      <p class="text-black font-10">
        Muitos anos mais tarde a Coca-Cola chegou a lançar uma latinha azul para
        ser comercializada em Porto Alegre. A questão da cor é séria mesmo: na
        Hamburgueria 1903, lanchonete oficial do Grêmio, o catchup recebe um
        aviso: “Infelizmente ainda não conseguimos mudar a cor”.
      </p>
    </div>
    <div class="caixa">
      <img class="caixa-img" src="../assets/grenal.png" />
      <h2 class="m-2"><b>Grenal</b></h2>
      <p class="text-black font-10">
        Um dos maiores clássicos do mundo é Grêmio x Internacional, apelidado
        por Gre-Nal. A disputa centenária ocorreu pela primeira vez no dia 18 de
        julho de 1909 e o Grêmio venceu a partida por 10 a 0.
      </p>
    </div>
    <div class="caixa">
      <img class="caixa-img" src="../assets/avalanche.gif" />
      <h2 class="m-2"><b>Avalanche</b></h2>
      <p class="text-black font-10">
        No antigo Estádio Olímpico, a torcida gremista tinha o ritual de
        comemorar os gols do clube com uma avalanche nas arquibancadas.
      </p>
    </div>
  </div>
  <div class="ingresso">
    <span><img class="floaters2" src="../assets/ingresso.png" alt="" /></span>
    <button class="bot-grande" @click="goto()">
      <b>Esteja por dentro do jogo</b>
    </button>
    <span><img class="floaters2" src="../assets/ingresso.png" alt="" /></span>
  </div>
  <div>
    <img src="../assets/mosqueteiro.png" alt="" />
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
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
      console.log(document.getElementById("music").muted, this.is_muted)
    },
    goto() {
      window.location.href = "https://arenapoa.com.br/ingressos/";
    },
  },
};
</script>

<style>
audio {
  margin-top:2rem;
  margin-bottom:-1rem;
}

@media only screen and (min-width: 600px) {
  body {
    background-color: rgb(0, 0, 0);
  }
}
body {
  background: linear-gradient(to bottom, black, #0066a8, #0066a8, #f2f2f2);
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
    url("../assets/Arena-Grêmio-.jpg");
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
