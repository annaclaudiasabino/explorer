import { soundTarget } from '../elements.js';
import * as audio from './sounds.js'

soundTarget.forEach(item => {
  item.addEventListener('click', () => {
    soundTarget.forEach(element => {
      element.classList.remove('active-sound');
    });
    item.classList.add('active-sound');

    audio.audioTree.pause();
    audio.audioRain.pause();
    audio.audioCoffe.pause();
    audio.audioFire.pause();

    if(item.id === 'tree') {
      audio.audioTree.play();
    } else if(item.id === 'rain') {
      audio.audioRain.play();
    } else if(item.id === 'coffe') {
      audio.audioCoffe.play();
    } else if(item.id === 'fire') {
      audio.audioFire.play();
    }
  });
});