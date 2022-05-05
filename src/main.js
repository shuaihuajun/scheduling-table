import { createApp } from "vue";
import App from "./App.vue";

import ui from "../packages/index";

// import ui from "../lib/SchedulingTable.common.js";
// import "../lib/SchedulingTable.css";

createApp(App)
  .use(ui)
  .mount("#app");
