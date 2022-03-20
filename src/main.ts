import "./public-path";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./registerServiceWorker";
import routes from "./routes";
import store from "./store";

let instance: any = null;
let router: any = null;
let history: any = null;

// @ts-ignore
function render(props) {
  const { container } = props;
  history = createWebHistory(
    // eslint-disable-next-line
    // @ts-ignore
    window.__POWERED_BY_QIANKUN__ ? "/sub-app-vue3" : process.env.BASE_URL
  );

  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(store);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[vue3] react app bootstraped");
}
// @ts-ignore
export async function mount(props) {
  console.log("[vue3] props from main framework", "mount", props);
  render(props);
}
// @ts-ignore
export async function unmount(props) {
  console.log("[vue3] props from main framework", "unmount", props);
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
}
