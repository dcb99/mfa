import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";
import ToastService from "primevue/toastservice";
import config from "@/clientAppConfig.json";
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";

const oktaAuth = new OktaAuth({
  issuer: `${config.okta.oidc.issuer}/oauth2/default`,
  clientId: config.okta.oidc.clientId,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: config.okta.oidc.scopes,
});

const app = createApp(App);

app
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(OktaVue, {
    oktaAuth,
    onAuthRequired: (oktaAuth: any) => {
      router.push({ path: "/Login" });
    },
  })
  .mount("#app");
