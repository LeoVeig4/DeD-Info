//import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./services/store.js";

import { library } from "@fortawesome/fontawesome-svg-core";

import "./style.css";
/* import font awesome icon component */

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import VueGtag from "vue-gtag";

import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";
/* add icons to the library */
library.add(faUserSecret);

const app = createApp(App);

app.config.globalProperties.$toast = toast;

app.use(router);
app.use(store);
app.use(Vue3Toastify);
app.use(VueGtag, {
    config: { id: "xxxxxxxx" },
}, router);
app.mount("#app");

//import "bootstrap/dist/js/bootstrap.js";
