<template>
  <v-container>
    <v-row >
        <v-row justify="center" class="my-1" >
            <v-row class="my-2 mx-4" v-for="(word, index) in words" :key="index">
                    <v-col class="block mx-2 my-2" v-for="(char, charIndex) in word.correct" :key="charIndex">
                        <input type="text" maxlength="1"  :autofocus="index == 0"  :class="(word.correct[charIndex] == word.guess[charIndex]) ? 'correct-input-field' : 'input-field'" v-model="word.guess[charIndex]" @change="compareChar(word,char,words, charIndex, index )"/>
                    </v-col>
                    <v-col class="block space mx-2 my-2" v-if="index != words.length-1">
                        <input type="text" maxlength="1" :class="(spaceChar[index] == ' ') ? 'correct-input-field' : 'input-field'"  v-model="spaceChar[index]" @change="compareSpace(index)"/>
                    </v-col>
            </v-row> 
        </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component({
        components: {
        
        }
    })
    export default class GuessingBlocks extends Vue {
        @Prop({ }) readonly sentence: any;
        /* @Prop({ }) readonly scrambledSentence: any; */
        private wordsArray: any = [];
        private scrambledArray: any = [];
        private words: any = [];
        private guessCount = 0;
        private spaceChar: any = [];
        
        
        mounted(){
            this.wordsArray = this.sentence.split(" ");
            this.wordsArray = this.wordsArray.map((word: any) => {
                return word.split("")
            })
            this.wordsArray.map((word: any, index: any) => {
                this.words.push({"correct": word, "guess": [], "status": [] });
            })   
        }
        
        // Compares the guessed characters in the words with original ones
        compareChar(word: any, char: any, wordArr: any, charIndex: any, index: any){
            if(word.correct[charIndex] == word.guess[charIndex]) {
                word.status[charIndex] = true;
                this.guessCount = this.guessCount+1;
                this.$store.dispatch("setGuessCount", this.guessCount)
            }         
        }

        compareSpace(index: any){
            if(this.spaceChar[index] === " "){
                this.guessCount = this.guessCount+1;
            }
            
        }
    

  }

</script>
<style >
.block{
    height: 45px;
    padding: 3px;
    margin: 2px;
}
.space .input-field{
    text-align: center;
    background-color: #ffb74d;
}
.input-field{
    text-align: center;
    outline: none;
    height: inherit;
    align-items: center;
    width: inherit;
    padding: 10px;
    background-color: #e1e1e1;
    color: #a5a5a5;
    
}
.correct-input-field{
    text-align: center;
    outline: none;
    height: inherit;
    align-items: center;
    width: inherit;
    padding: 10px;
    background-color: green;
    color: white;
}
.input{
    outline: none; 
    background-color: #e1e1e1;
}
</style>