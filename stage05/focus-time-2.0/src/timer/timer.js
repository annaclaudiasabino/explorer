import * as events from './click-controls.js';
import * as el from '../elements.js';
import state from './state.js';
import { actionStop } from './actions-controls.js'

export function countDown() {
  if(!state.isPlay) {
    return
  }
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--
  if(seconds < 0 ) {
    seconds = 59
    minutes--
  } else if(minutes === 0 & seconds === 0) {
    actionStop()
    return;
  }

  updateDisplay(minutes, seconds)
  setTimeout(() => countDown(), 1000)
}

export function increment() {
  if(state.isPlay) {
    state.isPlay = false;
  }
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  
  seconds += 5;
  if(seconds > 55) {
    let rest = seconds % 5
    seconds = rest
    minutes++
  } 
  updateDisplay(minutes, seconds)
}

export function decrement() {
  if(state.isPlay) {
    state.isPlay = false;
  }
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds -= 5;
  if(seconds > 5) {
    let rest = seconds % 5
    seconds = rest
    minutes--
  } 
  updateDisplay(minutes, seconds)
}


 export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;
  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
 }

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  updateDisplay()
  events.registerControls();
};