import SchedulingTable from "./SchedulingTable.vue";

const components = {
  SchedulingTable,
};

const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;
  Object.keys(components).forEach((key) => Vue.component(key, components[key]));
};

export default {
  install,
};
