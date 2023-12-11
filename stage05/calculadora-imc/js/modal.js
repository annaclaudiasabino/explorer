export const modal = {
    open: document.getElementById('dialog'),
    close: document.getElementById('fechar-modal'),
    message: document.getElementById('modal-message'), 
}

modal.close.addEventListener('click', () => {
    modal.close(); 
});