import App from "./App/App.svelte";

const appElement = document.querySelector("#app");
const myApp = new App({
  target: appElement || document.body,
});
