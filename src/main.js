import { createApp } from "vue";
import App from "./App.vue";
import ui from "../lib/SchedulingTable.umd.min.js";
import "../lib/SchedulingTable.css";

createApp(App).use(ui).mount("#app");
