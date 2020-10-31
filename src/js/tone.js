import * as Tone from "tone";

const synth = new Tone.Synth().toMaster();

window.addEventListener('mousedown', playSound);
window.addEventListener('touchstart', playSound);
window.addEventListener('keydown', playSound);

function playSound(e) {

  var chord = e.target.dataset.chord;

  if (typeof chord === "undefined"){
    return;
  }

  synth.triggerAttackRelease(chord, '2n');
}
