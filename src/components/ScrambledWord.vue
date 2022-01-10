<template>
  <v-container>
        <v-row class="mt-1 mb-2" justify="center">    
            <h2 id="scrambled-word">{{scrambledSentence}}</h2>
        </v-row>
        <div class="content">
            <v-row justify="center">
                <p>Guess the sentence! Start typing</p>
            </v-row>
            <v-row justify="center" class="mt-n3">
                <p>The yellow blocks are meant for spaces</p>
            </v-row>
        </div>
    <Score v-if="renderComponents" />

  </v-container>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import axios from 'axios';
    import Score from '../components/Score.vue';

  
    @Component({
        components: {
            Score,
        }
    })
    export default class ScrambledWord extends Vue {
        @Prop({ }) readonly sentenceNumber: any;
        private sentence : any = "";
        private scrambledSentence : any = "";
        private counter : any = 1;
        private renderComponents: any = false;
       

        mounted(){
            axios
                .get(`https://api.hatchways.io/assessment/sentences/${this.sentenceNumber}`) //Api call using axios
                .then(response => {
                    this.sentence = response.data.data.sentence;
                    this.scramble(); //Function to scramble the sentence
                });

        }
        
        scramble(){
            const wordsArray = this.sentence.split(" "); //Splits sentence into word array
            for ( let index =0; index <wordsArray.length; index++){
                if(wordsArray[index].length >2) {
                    const characterArray = wordsArray[index].split(""); //Splits each word in to array of characters
                    for(let ch = characterArray.length-2; ch>0; ch--) {
                        const scrCh = Math.floor(Math.random() * (ch-1))+1; //Get Scrambled character using random function
                        const temp=characterArray[ch];
                        characterArray[ch] = characterArray[scrCh];
                        characterArray[scrCh]= temp; // Swap the character with jumbled one
                    }
                    wordsArray[index]= characterArray.join(""); //Join the characters to form scrambled word and replace in words array
                }
            }
            this.scrambledSentence = wordsArray.join(" "); //Join the words to form scrambled sentence
            this.$store.dispatch("setSentence", this.sentence);
            this.$store.dispatch("setCorrectCount", (this.sentence.length));
            this.renderComponents=true;
        }
    
    }

</script>

<style>
#scrambled-word{
    font-size: 2.5rem;
    color: rgb(55, 101, 131);
}
.content{
  font-size: 1.3rem;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>