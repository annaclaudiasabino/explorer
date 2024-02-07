import { soundTarget } from '../elements.js';

soundTarget.forEach(item => {
  item.addEventListener('click', () => {
    soundTarget.forEach(element => {
      element.classList.remove('active-sound');
    });
    item.classList.add('active-sound');
  });
});