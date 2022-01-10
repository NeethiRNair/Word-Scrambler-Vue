<template>
  <v-app >
    <v-main class="app">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';


  @Component({
     components: {
        
      }
  })
  export default class App extends Vue {
  }

</script>
<style>
.app{
  background-color: #e1e1e1;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
</style>