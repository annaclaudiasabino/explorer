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
    el.minus.disabled = false;
    el.minus.style.opacity = "1";
    return;
  }

  if(seconds < 5) {
    el.minus.disabled = true; // Desabilita o botão de decremento
    el.minus.style.opacity = "0.5";
  }

  updateDisplay(minutes, seconds)
  setTimeout(() => countDown(), 1000)
}

export function increment() {
  if(state.isPlay) {
    state.isPlay = false;
    document.documentElement.classList.remove('running');
  }
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  
  seconds += 5;
  if(seconds >= 59) {
    let rest = seconds % 5
    seconds = rest
    minutes++
  } 

  if(minutes === 0 && seconds > 5) {
    el.minus.disabled = false; // Desabilita o botão de decremento
    el.minus.style.opacity = "1"; 
  }

  updateDisplay(minutes, seconds)
}

export function decrement() {
  let minus = el.minus
  if(state.isPlay) {
    state.isPlay = false;
    document.documentElement.classList.remove('running');
  }
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds -= 5;
  if(seconds < 0) {
    let rest = seconds % 60;
    seconds = 60 + rest;
    minutes--;
  }

  if (minutes === 0 && seconds < 5) {
    minus.disabled = true; 
    minus.style.opacity = "0.5";
    updateDisplay(minutes, seconds); 
    return;
  }

  updateDisplay(minutes, seconds);
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