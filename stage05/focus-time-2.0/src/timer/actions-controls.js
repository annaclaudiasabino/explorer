import state from "./state.js";
import * as timer from "./timer.js"

export function tooglePlay() {
  state.isPlay = document.documentElement.classList.toggle('running')
  timer.countDown();
};

export function actionStop() {
  state.isPlay = document.documentElement.classList.remove('running')
  timer.updateDisplay();
};

export function actionMoreFive() {
  timer.increment();
};

export function actionMinusFive() {
  timer.decrement();
};


