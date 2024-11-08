//variables


let btn =document.querySelector('#new-quote');
let quote=document.querySelector('.qoute');
let person =document.querySelector('.person');
  

const qoutes =[{
    quote:`“Be yourself; everyone else is already taken.”`,
    person:`Oscar Wilde`
},{
     quote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
     person:`Marilyn Monroe`

},{
    quote:`“So many books, so little time”`,
    person:`Frank Zappa`

},{
    quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person:`Albert Einstein`

},{
    quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person:`Bernard M. Baruch`

},{
    quote:`“Be the change that you wish to see in the world.”`,
    person:`Mahatma Gandhi`

}

];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*qoutes.length);


    quote.innerText =qoutes[random].quote;
    person.innerText=qoutes[random].person;

})
