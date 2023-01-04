<template>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
</template>

<script>
import OktaSignIn from "@okta/okta-signin-widget";
import config from "@/clientAppConfig.json";

export default {
  created() {
    let welcomeMessage = document.getElementById("welcome-message");

    if (welcomeMessage) {
      welcomeMessage.style.display = "none";
    }
  },
  async mounted() {
    this.$nextTick(function () {
      const { issuer, clientId, redirectUri, scopes } = config.okta.oidc;
      this.widget = new OktaSignIn({
        baseUrl: issuer.split("/oauth2")[0],
        clientId: clientId,
        redirectUri: redirectUri,
        i18n: {
          en: {
            "primaryauth.title": "Sign in to Maas Dashboard",
          },
        },
        authParams: {
          issuer,
          scopes,
        },
        useInteractionCodeFlow: true,
      });

      this.widget
        .showSignInAndRedirect({
          el: "#okta-signin-container",
          scopes,
        })
        .then(async (tokens) => {
          this.$auth.handleLoginRedirect(tokens);
        });
    });
  },

  unmounted() {
    // Remove the widget from the DOM on path change
    this.widget.remove();
  },
};
</script>
