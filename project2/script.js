// variabless


let openBtn =document.getElementById('open-btn');
let modalContainer =document.getElementById('model-container')
let coloseBtn = document.getElementById('close-btn')


openBtn.addEventListener('click',function(){
    modalContainer.style.display='block';
});

coloseBtn.addEventListener('click',function(){
    modalContainer.style.display='none';
});
window.addEventListener('click',function(e){
if(e.target===modalContainer){
    modalContainer.style.display='none';
}
});