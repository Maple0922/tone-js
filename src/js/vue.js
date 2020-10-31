import Vue from 'vue/dist/vue.esm.js';

export const app = new Vue({
  el: '#app',
  data: {
    title: ' Tone.js',
    message: 'Chords',
    chords: [
      "C4", "D4", "E4", "F4", "G4", "A4", "B4"
    ]
  }
});
