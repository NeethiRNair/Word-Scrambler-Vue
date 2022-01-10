<template>
  <v-container class="home-container">
    <v-row v-if="!winningScore" class="content">
      <ScrambledWord v-if="renderComponent" :sentenceNumber="sentenceNumber" />
      <v-row justify="center" class="pb-5" v-if="renderComponent && !winningScore">
        <v-btn  color="#388e3c" dark  @click="incrementScore" class="my-3" :class="(correctCount== guessCount)? '' : 'disable-events'">Next</v-btn>
      </v-row>
    </v-row>
    <div v-if="winningScore" class="win-outer" >
      <v-row  class="content win-container " align="center" justify="center">
          <h4>You Win!</h4>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ScrambledWord from '../components/ScrambledWord.vue';
 
  
  @Component({
     components: {
        ScrambledWord,
        
      }
  })
  export default class Home extends Vue {
    private score: any = 0;
    private sentence: any = ''; 
    private renderComponent: any = true;
    private maxScore: any = 2;
    
    get sentenceNumber(){
      return this.$store.getters.getSentenceNumber;
    }
    
    incrementScore(){
      this.score = this.score+1;
      this.$store.dispatch("setScore", this.score);
      this.$store.dispatch("setSentenceNumber", this.sentenceNumber+1);
      this.forceRerender();
    } 
    
    forceRerender() {      
        // Remove component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          //Add the component back in
          this.renderComponent = true;
        });
    }

    get correctCount(){
      return this.$store.getters.getCorrectCount;
    }

    get guessCount(){
      return this.$store.getters.getGuessCount;
    }

    get winningScore(){
      if(this.score === this.maxScore){
        return true;
      }
      else{
        return false;
      }
    }

  }

</script>
<style >
.home-container{
  
  height: 100vh;
  border-radius: 8px;
  margin-top: 50px;
}
.content{
  background-color: #fff;
  vertical-align: middle;
  border-radius: 8px;
}
.win-container{
  height: 80px;
  border-radius: 8px;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 1.5rem;
  
}
.disable-events {
  pointer-events: none;
}
.win-outer{
  height: 80vh;  
   display: flex;
  justify-content: center;
  align-items: center;
}

</style>