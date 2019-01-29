
<template>
  <Page ref="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <GridLayout class='login'>
      <LoginMain ref="loginMain"></LoginMain>
    </GridLayout>
  </Page>
</template>

<script>
  import LoginMain from "./components/LoginMain.vue"
//   import {setScreenName} from "~/utils/analytics-util";
  // import * as enums from "tns-core-modules/ui/enums";

  export default {
    components: {
      LoginMain
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    .logo-container {
      horizontal-align: center;
      height: 80;
    }
  }
</style>