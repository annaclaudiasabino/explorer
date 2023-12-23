import state from './state.js';

export function toggleTimer() {
    state.isRunnig = document.documentElement.classList.toggle('running');
};

export function modifyTimer() {
    
};

export function resetTimer() {
    state.isRunnig = false;
    document.documentElement.classList.remove('running');
};

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');
};