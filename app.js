//Dom manipulation



//GetElementBId()
// const title =document.getElementById('main-heading');
// console.log(title);

//GetElementByClassName()

// const listItem =document.getElementsByClassName('list-iems');
// console.log(listItem);

//GetElementByTagName()

// const listItem =document.getElementsByTagName('li');
// console.log(listItem);

//querySelector()


// const container =document.querySelector('div');
// console.log(container)

//querySelectorAll

// const container =document.querySelectorAll('div');
// console.log(container)



// const title=document.querySelector('#main-heading');
// title.style.color='red';


// const listItem=document.querySelectorAll('.list-iems');

// for(i=0;i<listItem.length;i++){
//     listItem[i].style.fontSize ='2rem'
// }
// console.log(listItem)




//Creating Elements


// const ul =document.querySelector('ul');
// const li =document.createElement('li');


//adding elementss


// ul.append(li)

//Modifying the text

// li.innerText='X-men';

//Modifying Aattributes & Classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');


// const title =document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));


// li.classList.add('list-items');
// console.log(li.classList.contains('list-items'))

//Reomve Elements

// li.remove()

// const firstListItem=document.querySelector('.list-iems');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);



//Dom maninpulation
//Traversal the Dom
//parent node Traversal


// let ul =document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement)


// const html =document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement)
//child Node Traversal






// let ul=document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);

// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor='blue';


// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


//Sibling Node Traversal

// let ul=document.querySelector('ul');
// const div =document.querySelector('div');
// console.log(div.childNodes)


// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);





// eventt listnersss



//element.addEventListner("click",function);
const buttonTwo=document.querySelector('.btn-2');
function alertBtn(){
    alert('I also love javascript');
};
buttonTwo.addEventListener("click",alertBtn);





//Moouseover Event


const newBackgroundColor =document.querySelector('.box-3');
function changeBgcolor(){
    newBackgroundColor.style.backgroundColor='blue';
};
newBackgroundColor.addEventListener("mouseover",changeBgcolor);




//reveal event


const revealBtn =document.querySelector('.reverl-btn');
const hiddenContent =document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reverl-btn'))
    {
        hiddenContent.classList.remove('reverl-btn')
    }else{
        hiddenContent.classList.add('reverl-btn')
    }
}
revealBtn.addEventListener('click',revealContent);




// event probagationnn



// window.addEventListener("click",function(){
//     console.log('Window');
// },true);
// document.addEventListener("click",function(){
//     console.log('Document');
// },true);
// document.querySelector(".div2").addEventListener
// ("click",function(){
//     console.log('DIV 2');
// },true);
// document.querySelector(".div1").addEventListener
// ("click",function(){
//     console.log('DIV 1');
// },true);
// document.querySelector(".button").addEventListener
// ("click",function(e){
//     console.log(e.target.innerText='clicked!');
// },true);


// Event Delegation



// document.querySelector("#football").addEventListener
// ('click',function(e){
//     console.log('football is clicked');
//     const target =e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// document.querySelector("#basketball").addEventListener
// ('click',function(e){
//     console.log('basketball is clicked');
//     const target =e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// document.querySelector("#boxing").addEventListener
// ('click',function(e){
//     console.log('boxing is clicked');
//     const target =e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// document.querySelector("#football").addEventListener
// ('click',function(e){
//     console.log('football is clicked');
//     const target =e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })
// document.querySelector("#football").addEventListener
// ('click',function(e){
//     console.log('football is clicked');
//     const target =e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor='lightgrey'
//     }
// })

///event delegation

// it allows users to append a single evnet listener to 
// parent element that adds it  to all of its present 
// and future descendants that match a selector.

document.querySelector('#sports').addEventListener
('click',function(e){
    console.log(e.target.getAttribute('id')+'is clicked');
    const target =e.target;
    if(target.matches('li')){
        target.style.backgroundColor='red'
    }
});

const sports =document.querySelector('#sports');
const newSports =document.createElement('li');
newSports.innerText='rugby';
newSports.setAttribute('id','rugby');
sports.appendChild(newSports)


