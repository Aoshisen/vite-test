import { App } from "./Apps";

const appElement = document.querySelector("#app");
const myApp = new App({
  target: appElement || document.body,
});
