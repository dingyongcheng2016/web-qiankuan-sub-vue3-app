import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const instance = createApp(App).use(store).use(router);
// @ts-ignore
function render(props) {
  const { container } = props;
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
  console.log("[vue3] props from main framework", props);
  render(props);
}
// @ts-ignore
export async function unmount(props) {
  instance.unmount();
}
