import * as el from '../elements.js';
import * as actionsSouds from './actions-controls.js';

export function registerControls() {
  const controlsTarget = el.controls.getElementsByTagName('button');
  const controlsTargetArray = [...controlsTarget];

  controlsTargetArray.forEach(item => {
    item.addEventListener('click', (event) => {
      const targetConstrol = event.target.closest('button');
      const action = targetConstrol.dataset.action;
      actionsSouds[action]();
    });
  });
};
