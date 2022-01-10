<template>
  <v-container>
      <v-row justify="center">
        <h2 class="score">Score: {{score}}</h2>
      </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';


  @Component({})
  export default class Score extends Vue {
      
      get score(){
        return this.$store.getters.getScore;
      }
  }

</script>
<style>
.score{
    font-size: 2rem;
}
</style>