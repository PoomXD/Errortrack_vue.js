import AppExample from "./cores/AppExample";

const ComponentPlugin = {
  install(Vue, options) {
    [AppExample].forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

export default ComponentPlugin;
