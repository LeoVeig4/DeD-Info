//import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueGtag } from "vue-gtag";
import store from "./services/store.js";

import { library } from "@fortawesome/fontawesome-svg-core";

import "./style.css";
/* import font awesome icon component */

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

createApp(App)
    .use(VueGtag, { config: { id: "374945176" } }, router)
    .use(router)
    .use(store)
    .mount("#app");

//import "bootstrap/dist/js/bootstrap.js";
