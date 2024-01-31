import * as el from './elements.js'
import * as actionsControls from './actions-controls.js'
import * as actionSounds from './actions-sounds.js'

// el.soundCoffeButton.addEventListener('click', () => {
//   el.soundTreeButton.classList.remove('active-sound')
//   el.soundRainButton.classList.remove('active-sound')
//   el.soundFireButton.classList.remove('active-sound')
//   el.soundCoffeButton.classList.add('active-sound')
//   audio.audioCoffe.play()
//   audio.audioFire.pause()
//   audio.audioRain.pause()
//   audio.audioTree.pause()
// })

// el.soundTreeButton.addEventListener('click', () => {
//   el.soundTreeButton.classList.add('active-sound')
//   el.soundRainButton.classList.remove('active-sound')
//   el.soundFireButton.classList.remove('active-sound')
//   el.soundCoffeButton.classList.remove('active-sound')
//   audio.audioTree.play()
//   audio.audioFire.pause()
//   audio.audioRain.pause()
//   audio.audioCoffe.pause()
// })

// el.soundRainButton.addEventListener('click', () => {
//   el.soundTreeButton.classList.remove('active-sound')
//   el.soundRainButton.classList.add('active-sound')
//   el.soundFireButton.classList.remove('active-sound')
//   el.soundCoffeButton.classList.remove('active-sound')
//   audio.audioRain.play()
//   audio.audioFire.pause()
//   audio.audioTree.pause()
//   audio.audioCoffe.pause()
// })

// el.soundFireButton.addEventListener('click', () => {
//   el.soundTreeButton.classList.remove('active-sound')
//   el.soundRainButton.classList.remove('active-sound')
//   el.soundFireButton.classList.add('active-sound')
//   el.soundCoffeButton.classList.remove('active-sound')
//   audio.audioFire.play()
//   audio.audioRain.pause()
//   audio.audioTree.pause()
//   audio.audioCoffe.pause()
// })

export function registerControls() {
  const controlsTarget = el.controls.getElementsByTagName('button');
  const controlsTargetArray = [...controlsTarget]

  controlsTargetArray.forEach(item => {
    item.addEventListener('click', (event) => {
      const targetConstrol = event.target.closest('button');
      const action = targetConstrol.dataset.action;
      actionsControls[action]();
    })
  })
}

export function registerAudios() {
  const soundTarget = el.sounds.getElementsByTagName('button');
  const soundTargetArray = [...soundTarget]

  soundTargetArray.forEach(item => {
    item.addEventListener('click',(event) => {
      const targetSound = event.target.closest('button');
      const dataSound = targetSound.dataset.sound;
      actionSounds[dataSound]();
    });
  });
};

registerControls()
registerAudios()