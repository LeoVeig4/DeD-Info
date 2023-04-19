//import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./services/store";

import { library } from "@fortawesome/fontawesome-svg-core";

import "./style.css";
/* import font awesome icon component */

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

createApp(App).use(router, store).mount("#app");

//import "bootstrap/dist/js/bootstrap.js";
