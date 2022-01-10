import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sentence : "",
    sentenceNumber: 1,
    score: 0,
    correctCount : 0,
    guessCount: 0,
  },
  mutations: {
    SET_SENTENCE(state: any, sentence: any) {
      state.sentence = sentence;
    },
    SET_SENTENCE_NUMBER(state: any, sentenceNumber: any) {
      state.sentenceNumber = sentenceNumber;
    },
    SET_SCORE(state: any, score: any) {
      state.score = score;
    },
    SET_CORRECT_COUNT(state: any, correct: any) {
      state.correctCount = correct;
    },
    SET_GUESS_COUNT(state: any, count: any) {
      state.guessCount = count;
      
    },
  },
  actions: {
    setSentence({ commit }: any, sentence: any) {
      commit('SET_SENTENCE', sentence);
    },
    setSentenceNumber({ commit }: any, sentenceNumber: any) {
      commit('SET_SENTENCE_NUMBER', sentenceNumber);
    },
    setScore({ commit }: any, score: any) {
      commit('SET_SCORE', score);
    },
    setCorrectCount({ commit }: any, correct: any) {
      commit('SET_CORRECT_COUNT', correct);
    },
    setGuessCount({ commit }: any, guessCount: any) {
      commit('SET_GUESS_COUNT', guessCount);
      
    },
  },
  modules: {
  },
  getters:{
    getSentence(state: any) {
      return state.sentence;
    },
    getSentenceNumber(state: any) {
      return state.sentenceNumber;
    },
    getScore(state: any) {
      return state.score;
    },
    getCorrectCount(state: any) {
      return state.correctCount;
    },
    getGuessCount(state: any) {
      return state.guessCount;
    }
  }

})
