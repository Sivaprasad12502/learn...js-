// let myAge = 25;
// console.log(myAge)
// let year = 2019; 
// console.log(age,year)
// age = 30;
// console.log(age)
// const points = 100;
// points =50;
// console.log(points);
 


// var num =75;
// console.log(num);

// strigns
// console.log('hello,world')
// let email= 'mario@thenetninja.co.uk';
// console.log(email )
// string concatination

// let firstName = 'Brandon';
// let lastName  = 'Sanderson';
// let fullName  = firstName + ' '+ lastName;
// console.log(fullName)
// getting characters
// console.log(fullName[3]);
// strin length 
// console.log(fullName.length);
// string metods 

//  console.log(fullName.toUpperCase());
//  let result =fullName.toLocaleLowerCase();
//  console.log(result);
//  let index = email.indexOf('@');
//  console.log(index)  
// //  common string metods 
// let email = 'mario@thenetninja.co.uk';
// let result = email.lastIndexOf('n');
// console.log(result)
// let email = 'mario@thenetninja.co.uk';
// console.log(email)
// let result = email.lastIndexOf('n');
// let result =email.slice(2,5);
// let result=email.substring(4,10);
// let result =email.replace('n','w')
// console.log(result);





// numberss
// let radius =10;
// const pi =3.14;
// console.log(radius,pi);

// math operators +,-,*,/,**/,%
// console.log(10/2)
//  let result =radius % 3;

// let result = pi * radius**2;
// oder of operation
// let result = 5* (10-3)**2;
 
//  console.log(result);
//  let likes =10;
//  likes =  likes+1;
// likes--
// likes+=5
//  console.log(likes)
  

// nan
// console.log(5/'hello')
  


// let result ='the blog has '+ likes + 'likes';
// console.log(result)

// const title = 'Best reads of 2019';
// const author =  'mario';
// const likes  = 30;
// concatintion way 
// let result = 'The blog called ' + title +'by' + author + 'has' + likes + 'likes';
// console.log(result)
// template string way

// let result = `The bolg called ${title}  by ${author} has ${likes} likes `;
// console.log(result);
// creating html templates
// let html =`
//     <h2>${title}</h2>
//     <p>${author}<p>
//     <span>This blog has ${likes}likes </span>`;
//     console.log(html)


    // arayss

    // let ninjas =['shaun','ryu', 'chu-li'];
    // ninjas[1] ='ken';
    // console.log(ninjas[1])
//  let ages = [20,25,30,35];
//  console.log(ages [2]);
//  let random =['shaun','crystal',30,20];
//  console.log(random);
// let ninjas =['suuii','ryii','we'];
// console.log(ninjas.length);
    // arayy methods

    // let result = ninjas .join('-')
    // let result = ninjas.indexOf('chu-li');\
    // let result = ninjas.concat(['ken','crystal'])
    // let result =ninjas .push('ken');
    // result =ninjas.pop();
    // console.log(result);








    // let age =10;
    // console.log(age,age  +3,`the age is ${age}`);



    // console.log(true,false, "true","false");

    // methods can retrun boolean


    // let eamil = 'luigi@thenetninja.co.uk'
    // let names =['mario','luigi','toad'];
    // let result =email.includes('@');
    // let result = names.includes('browser');
    // console.log(result);


    //coparison operators

    // let age = 25;
    // console.log(age==25);
    // console.log(age==30);
    // console.log(age!=30);
    // console.log(age<30);
    // console.log(age>30);
    // loose  compaeison (different types can still be equal)

    // console.log(age !=25);
    // console.log(age =='25');

    // let name ='shaun';
    // console.log(name =='shaun');


    // type conversioon
    // let score = '100';
    // score =Number(score);

    // console.log(score+ 1 );
    // console.log(typeof score);
    // let result = String(50);
    // let result = Boolean(-10);
    // console.log(result,typeof result);




    // loops


    // for loops
    //  for(let i = 0; i<5; i++){
    //         console.log('in loop:',i)
    //  }
    //         console.log('loop finsihed');


//     const names = ['shaun','mario','luigi'];
//     // for(let i =0; i<names.length ; i++){
//     //     // console.log(names[i]); 

//     //     let html = `<div>${names[i]}</div>`;
//     //     console.log(html);
//     // }  
//     // while loop
//     // let i = 0; 
//     //  while(i <5){
//     //     console.log('in loop:',i);
//     //     i++;
//     //  }
    
//     // do while loops
//     // let i =3;
//     // do{
//     //     console.log('val of i is :',i);
//     //     i++; 
//     // } while(i<5);


//     // if statements


//     // const age = 21;
//     // if(age >20){
//     //     console.log('you are over 20 years old');
//     // }
//     // const ninjas = ['shaun','ryu','chun-li','yoshi'];
//     // if (ninjas.length >3){
//     //     console.log("that's a lot of ninjas")
//     // }




//     // logical operators - OR || and AND  &&
// const password ='passjjjjjjj fffdl';
// if (password.length >=12 &&  password.includes('@')){
//     console.log('that password is might strong');
// }
//   else if(password.length>=8  || password.includes('@') && password.length >=5){
//     console.log('that password is long enough!');
// }else{
//     console.log('password is not long enough')
// }


// // logical NOT (!)

// let user = false;
// if (!user){
//     console.log('kjdkjsfkjdskfj')

// }

// console.log(!true);
// console.log(!false)


// //break and continue
 

// const score =[50,25,0,30,100,20,10];
// for (let i =0;i<score.length;i++){
//     if(score[i]===0){
//         continue;
//     }
//     console.log('your score:',score[i]);
//     if (score[i]===100){
//         console.log('congrats, you got the top score!')
//         break;
//     }

// }
    //switch statements


    // const grade ='f';
    // switch(grade){
    //     case 'a':
    //         console.log('you got an A!');
    //         break;
    //     case 'b':
    //         console.log('you got an b!');
    //         break;
    //     case 'c':
    //         console.log('you got an c!');
    //         break;
    //     case 'd':
    //         console.log('you got an e!');
    //         break;
    //     case 'e':
    //         console.log('you got an f!');
    //         break;
    //     case 'f':
    //         console.log('you got an f!');
    //         break;
    //      default:
    //             console.log('not a  valid grade');
    // }
    
    // // using if statements 
     
    // // if(grade === 'A'){}
    // //     else if(grade === 'B'){}
    // //     else if (grade == 'C'){}
    // //     else if (grade == 'D'){}
    // //     else if (grade == 'E'){}
    // //     else{}

        
    // //variables & block scope
    // let age =30;
    

    // if(true){ 
    //    let age=40;
    //    let name ='shaun'
    //     console.log('iside 1st code block:',age,name)

    //     if(true){
    //         let age=50;
    //        console.log('inside 2nd code block:',age)
    //     }
    // }

    // console.log('outside code block:',age,name); 














    // //function declartion

    // // function greet(){
    // //     console.log('hello there');
    // // }

    // // // function expression
    // // const speak = function ( name='luigi',time='night'){
    // //     console.log(`good day ${name} ${time}`);

    // // };

    // // speak();
    // // speak('shaun');




    // // returning values
      

    // // const calcArea = function(radius){
    // //     let area = 3.14 * radius**2;
    // //     console.log(area);
    // //     return area;
    // // };

    // // const area =calcArea(5);
    // // console.log(area);


    // // const calcVol = function(area){

    // // };
    // // calcVol(area)




    // // arow functioonn
    // // const calcArea =(radius)=> {
    // //     return 3.14 * radius**2;
    // // };

    // // const area = calcArea(5);
    // // console.log('area is:',area);




    // // practice arrow function


    // // const greet = function(){
    // //     return 'hello, world';

    // // };
    // // const gre =()=>'hello,wordliii';
    // // const result = gre();
    // // console.log(result)




    // // const bill =function(products,tax){
    // //     let total =0;
    // //     for(let i = 0; i<products.length; i++){
    // //         total += products[i]+ products[i]*tax;
    // //     }
    // //     return total;
    // // }
    
    // // const bill=(products,tax)=>{
    // //     let total =0;
    //     for(let i = 0; i<products.length; i++){
    //         total += products[i]+ products[i]*tax;
    //     }
    //     return total;

    // }
    // console.log(bill([10,15,30],0.2));



    // const name ='shaun'


    //functions
    

    // const greett =()=>'hello';
    // let resultOne=greett();
    // console.log(resultOne)



    //methods 
    // greett.toUpperCase



  // callbacks & foreach



//   const MyFunc=(callbackFunc)=>{
//     //do something
//     let value=50;
//     console.log(value);
//     callbackFunc(value)
//   };

// MyFunc(value =>{
//     //don somthing
//     console.log(value);
// });
    


// let people=['mario','lugi','dive'];

// const logPerson =(person,index)=>{
//  console.log(`${index}-hello ${person}`);   
// }
// people.forEach(logPerson)
// people.forEach((person,index) => {
//     console.log(index,person);
// });


//get a reference to the 'ul'
// const ul = document.querySelector('.people');
// const  people =['mario','luigi','mo','lugi',];
// let html =``;
// people.forEach(function(person){
//     html += `<li style="color:purple">${person}</li>`;
// })
// people.forEach(functon(person){
//     //create html template
//     html += `<li style="color:purple">${person}</li>`;
// });



// console.log(html);
// ul.innerHTML =html; 




//object literals 
// const blogs = [
//     {title:'why mac & cheese rules',likes:30},
//     {title:'10 things to make with marmite',likes:50}
// // ];
// console.log(blogs);
// let user = {
//    name:'crystal',
//    age:30,
//    email:'crystal@thenetninja.co.uk',
//    loction:'berlin',
//    blogs:[{title:'why mac & cheese rules',likes:30},
//     {title:'10 things to make with marmite',likes:50}],
//    login:function(){
//     console.log('the user logged in')
//    },
//    logout:function(){
//     console.log('the user logged out')
//    },
//    logBlogs:function(){
//     console.log({title:'why mac & cheese rules',likes:30},
//         {title:'10 things to make with marmite',likes:50});
//     this.blogs.forEach(blog =>{
//         console.log(blog.title,blog.likes);
//     })
//    }
// };
// user.logBlogs();
// console.log(this)
// user.login();
// user.logout();
// const name ='mario'
// name.toUpperCase();
// console.log(user)
// console.log(user.name)
// user.age=35;
// console.log(user.age)
// console.log(user['email'])
// user['name']='chun-li';
// console.log(user.name)
// console.log(typeof user);



//Math object


// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

// const area =7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area))



// // random numbers 
// const random =Math.random();
// console.log(random);
// console.log(Math.round(random *1000))



// primitive values



// let scoreOne =50;
// let scoreTwo= scoreOne;
// console.log(`scoreOe:${scoreOne}`,`scoreTwo:${scoreTwo}`);
// scoreOne =100;
// console.log(`scoreOe:${scoreOne}`,`scoreTwo:${scoreTwo}`);

//reference values


// const userOne = {name:'ryu',age:30};
// const userTwo = userOne;
// console.log(userOne,userTwo);


// userOne.name='siv';
// console.log(userOne,userTwo);
// const para = document.querySelector('body > h1');
// console.log(para);

// const paras =document.querySelectorAll('p');
// const error =document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para)
// })


// console.log(error)




/// get an elemnent by id
// const title =document.getElementById('pagetitle');
// console.log(pagetitle)


// //get element by their class name

// const error = document.getElementsByClassName('error');
// console.log(error)
// console.log(error[0])


// // get element by their tag name

// const para =document.getElementsByTagName('p')
// console.log(para[0])


//const para =document.querySelector('p');
//console.log(para.innerText);
//para.innerText+='injas are awesome';
// const paras= document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText+='inner';
// });
// const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML='<h2> THIS IS A NEW H2</h2>'
// const people =['you','me','youee'];


// people.forEach(person=>{
//     content.innerHTML+=`<p>${person}</p>`;
// })

// const link =document.querySelector('a')

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.thenetninja.co.uk');
// link.innerText = 'the net ninja websiete';
// const mssg =document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class','sucsss');
// mssg.setAttribute('style','color:green;')




// const title =document.querySelector('h1')
// // title.setAttribute('style','margin:50px;');

// console.log(title.style);
// console.log(title.style.color);
// title.style.margin ='50px';
// title.style.color ='crimson';
// title.style.fontSize='60px';
// title.style.margin='';


// const content =document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('sucsss');



const paras= document.querySelectorAll('p');
paras.forEach(p=>{
  if(p.textContent.includes('error')){
    p.classList.add('error')
  }
  if(p.innerText.includes('success')){
    p.classList.add('sucsss')
  }
 });


const title= document.querySelector('.title');
title.classList.toggle('test');
title.classList.remove('test');
  
















function testSize(num){
    if (num<5){
        return "Tiny"
    }else if (num<15){
        return "Small"
    }
}
console.log(testSize(30));




 var names= ["Hele-ine one!","Eagle","Bridie","par","Bogery"];
 function golfScore(par,strokes){
    if (strokes ==1){
        return names[0]
    }else if  (strokes<=par-2){
        return names[1];
    }else if  (strokes<=par-1){
        return names[2];
    }else if  (strokes==para){
        return names[3];
    }else if  (strokes==par+1){
        return names[4];
    }
       

 }
 console.log(golfScore(4,3));






 function caseInSwitch(val){
    var answer ="";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
    }
    return answer;
 }



 console.log(caseInSwitch(1));




 function switchOfStuff(val){
    var answer ="";
    switch (val){
        case "a":
        answer ="apple";
        break;
        case "b":
        answer ="bird";
        break;
        case "c":
        answer ="cat";
        break;
        default:
            answer= "stuff";
        

    }
    return answer;
 }


 console.log(switchOfStuff("n"));


 function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
         answer ="Low";
         break;
        case 4:
        case 5:
        case 6:
          answer ="mid";
          break;
        case 7:
        case 8:
        case 9:
            answer ="Hig";
            break;  
    }
    return answer;
 }
 console.log(sequentialSizes(5));



 function isLess(a,b){
    return a<b;
 }
 console.log(isLess(12,1));





 function abTset(a,b){
    if (a<0||b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
 }
 console.log(abTset(-2,2));





 ///countngg caddsss


 var count =0;
 function cc(card){
    switch(card){
       
            case 2:

            case 3:

            case 4:

            case 5:

            case 6:
                count++;
                break;
                
            case 10:
                    
            case "j":
                        
            case "q":
            
            case "k":

            case "a":
                count--;
                break;


                            






    }


    var holdbet='hold'
    if (count >0){
        holdbet='bet'
    }

    return  count+""+ holdbet;

 }
 cc(2);cc(10)
 console.log(cc(5))
     


function phoneticLookup(val){
    var result ="";


 var lookup ={
    "alpha":"Adams",
    "bravo":"boston",
    "charlie":"chicago"
    
 };
 result =lookup[val];
 return result;
}

console.log(phoneticLookup("alpha"));



var myObj ={
    gift:"pony",
    pet :"kitten",
    bed:"sleigh",

};
function checkObj(checkprop){
    if(myObj.hasOwnProperty(checkprop)){
        return myObj[checkprop];

    }else{
        return "Not Found"
    }
}
console.log(checkObj("pet"))








var collection ={
    "2548":{
        "album":"slippery when wet",
        "artist":"bon jovi",
        "tracks":[
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"prince",
        "tracks":[
            "1999",
            "little red covette"
        ]
    },
    "1245":{
        "artist":"robert palmer",
        "tracks":[]
           
    },
    "5439":{
        "album":"abba gold"
    }
};
var collectionCopy =JSON.parse(JSON.stringify(collection));
function updateRecords(id,prop,value){
    if (value === ""){
        delete collection[id][prop];
    }else if (prop ==="tracks"){
        collection[id][prop]=collection[id][prop]||[];
        collection[id][prop].push(value);

    }else{
        collection[id][prop]=value;
    }
        
    return collection;
}
updateRecords(2468,"tracks","test"); 
console.log(updateRecords(5439,"artist","abba"));




var myAray =[];
 var i =0;
 while(i<10){
    myAray.push(i);
    i++;
 }
console.log(myAray);


var ourArray =[];
for(var i=10;i>0;i-=2){
    ourArray.push(i);
}
console.log(ourArray)



var ourArr=[9,10,11,12];
var ourtotal=0;
for(var i=0;i<ourArr.length;i++){
    ourtotal+=ourArr[i];

}

console.log(ourtotal)



var myArr =[2,3,4,5,6];
var total =0;
for(var i=0;i<myArr.length;i++){
    total+=myArr[i];

}
console.log(total)












function muliplyAll(arr){
    var product=1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }


    return product;
}
var product =muliplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product)





var MyArray=[];
var i=4;
do{
    myAray.push(i);
    i++;
}while(i<5)
    console.log(i,myAray)









    var randomNumberBetween0and19 = Math.floor(Math.random()*20);
        function randomWholeNum(){
            return Math.floor(Math.random()*10);
        }
    

     console.log(randomWholeNum());



//ternaryy operatorrr


     function checkSign(num){
        return num>0?"positive":num<0?"negative":"zero"
           
     }

    console.log(checkSign(10));





  //  scope of let and var keyword


  function checkScope(){
    let i ="function scope";
    if (true){
       let i="block scope";
        console.log("bolck scope i is:",i);
    }
    console.log("function scope i is:",i);
    return i;
  }

    checkScope();



    function freezeObj(){
        const MATH_CONSTANTS={
            PI:3.14
        };

    Object.freeze(MATH_CONSTANTS)

    try{
        MATH_CONSTANTS.PI=99;
    }   catch(ex){
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;

}
const PI =freezeObj();
console.log(PI)









// arrow functionn


// noermalll function
// var magic =function(){
//     return new Date();
// };


// arrow functionnn

const magic =()=> new Date();



var myConcat =function(arr1,arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,3],[2,4]));


// to arrow function/

var myConcat = (arr1,arr2)=>arr1.concat(arr2);
console.log(myConcat([1,2],[3,4]));



// higher order arrow fuction


const realNumberArray = [4,5.6,-9.8,42];
const squareList= (arr)=>{
const squaredIntegers=arr.filter(num=>Number.isInteger(num)&&num>0).map(x=>x*x);
return squaredIntegers;
};
const squaredIntegers=squareList(realNumberArray);
console.log(squaredIntegers);


const arr1 =['jan','feb','mar'];
let arr2;
(function(){
    arr2=[arr1];
    arr1[0]='potato'

})();
console.log(arr2);


const  LOCAT_FORECAST ={
    today :{min:72,max:83},
    tomorrow:{min:72.3,max:85.6}
};
function getMaxoftmrw(forecast){
    const{tomorrow:{max:maxofTomorrow}}=forecast;
    return maxofTomorrow;

}
console.log(getMaxoftmrw(LOCAT_FORECAST))


 
const stats ={
    max:56.78,
    standard_deviation:4.34,
    min:-0.75,
};
const half =(function(){
    return function half({max,min}){
    return (max+min)/2.0;
     }
}) ();
console.log(stats);
console.log(half(stats)); 



const createPerson=(name,age,gender)=>({name,age,gender});

console.log(createPerson("Zodiac Hasbro",56,"male"))


class SpaceShuttele{
    constructor(targetPlanet){
        this.targetPlanet= targetPlanet;
    }
}
var zeis =new SpaceShuttele('Jupiateer');
console.log(zeis.targetPlanet);


function makeClass(){
    class Vegetable{
        constructor(name){
        this.name=name;
        }
    }
   return Vegetable;
}
const Vegetable =makeClass();
const carrot =new Vegetable ('carrot');
console.log(carrot.name);




function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp=5/9*(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp=updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat =makeClass();
const thermos=new Thermostat(76);
let temp =thermos.temperature;
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);