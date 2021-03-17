export const uyari=(mesaj)=>{
    const span=document.createElement('span');
    span.textContent=mesaj;
    span.classList.add('alert_dialog');

    return span;
}