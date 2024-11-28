// function submited(){
//     alert("hey your submiting your application sucessfully ")
// }
// function reseted(){
//     alert("everything gone")
// }

// function pora(){
//     alert("dont try to click the picture")
// }
// function raju(){
//     document.getElementById("somu").style.backgroundColor="red"
// }

// function changecolor(Element){
//     Element.style.backgroundColor="yellow";
// }
// function resetcolor(Element){
//     Element.style.backgroundColor="pink";
// }

// let newbutton=document.getElementById("raj")
// newbutton.addEventListener('click',uor)
// function uor(){
//     document.body.style.backgroundColor="grey"
// }
// let rewbutton=document.getElementById("raj")
// rewbutton.addEventListener('dblclick',bor)
// function bor(){
//     document.body.style.backgroundColor="blue"
// }

// setTimeout(function(){
//     alert("here a is new function")
// },7000);
// document.write("hello")


// setTimeout(function(pranaya){
//     alert("i love you",(pranaya))
// },5000,);
// console.log("pranaya")

// setTimeout(function(name){
//     alert("i love you "+name)
// },3000,"pranaya");
// console.log("here is my message")

// var counter=1
// var x=setInterval(rod,3000)

// function rod(){
//     alert("odiyamma heat"+counter)
//     counter++
//     if(counter>5){
//         clearInterval(x)
//     }
// }

// var birthdays=[1997,2003,1757,1970,2021]
// var ages=birthdays.map(function(pilla,index,arr){
//    let age= 2024-pilla
//     return age;
// })
// console.table(birthdays)
// console.table(ages)


// var marks=[45,65,88,12,45,56,78,98,44,32]
// var failes=marks.map(function(ele,arr){
//     let student=100-ele
//     return student;
// })

// console.table(marks)
// console.table(failes)

// const arr=[2,3,4,5,6,7,8]
//  const output=arr.map(x=> x*2)
//  console.log(output)


// const items=[
//     {name:"rice",price:10},
//     {name:"biryani",price:100},
//     {name:"pulav",price:250},
//     {name:"rice",price:370},
// ]

// let totalprice=0
// items.forEach(items => {
//     totalprice+=items.name
// })

// console.log(totalprice)


// var add =[10,20,30,40,50]

// function findsum(add){
//     let sum=0;
//     for (var i=0;i<add.length;i++){
//         sum=sum+add[i];
//     }
//     return sum;
        
// }

// document.write("sum of array is "+findsum(add));


// const persons = {
//     lappa : "Malcom",
//     dabba: "Reynolds",
//     firstname : "Kaylee", 
//     lastname: "Frye"
// }
//     // {firstname : "Jayne", lastname: "Cobb"};

//   for(let a in persons){
//     console.log(persons[a])
//   }

//   const newname=persons.map((x)=>x.firstname+x.lastname)
//   console.log(newname)

//   persons.map(getfullname)
//   function getfullname(item){
//   return [item.firstname,item.lastname].join("")
//   }

//   console.log(persons)

//   const arr=[1,3,5,7,9]
//   const newarray=arr.map((x)=> x*3)
//   console.log(newarray)


// var a="pranaya"
// console.log(`i love you ${a}`)


// var grapes=()=>{ document.write(`i like grape juice`)}
// grapes()

// var add=x=>x+x
// document.write(add(5))

// var bo=(x,y,z)=>x+y+z
// document.write(bo(7,8,9)+"<br>")

// const kar=numbers=>numbers.filter(num=>num%2==1);
// console.log(kar([1,2,3,4,5,6,7,8,9,10,11,12,13]))

// const loki=(name,age)=>({name:name,age:age});
// console.log(loki('pothu',25))


// // function pak(name,...collection){
// // let myvalue=0;

// // for(let i in collection){
// //     myvalue+=collection[i]
// // }
// // document.write(name,myvalue)
// // }

// // pak("sunny ",1,2,3,4,5,6,6,777,7,78887,44,5454345,4,5345,34,45,43,34," kohli")



function callme(raju,...rani){
    let value=0;
    for(var i in rani){
        value+=rani[i]
    }
        document.write(raju,value)
    }
    callme("ram",1,2,3,4,5,6,7,8,9,10,"sunny")


    const ant=[1,2,3,4,5,6]
    for(let a of ant ){
        document.write(a*20+"<hr>")
    }



//     const sample=[1,2,3,4,5,6,7,8,8,89]
//     // document.write(sample[7])

//     const[a,b,c,d,e,f,g,h,i]=sample
//     document.write(e+"<br>")


//     const fullname={
//         fname:"rayudu",
//         lname:"ambati"
//     }
//     const {fname,lname}=fullname
//     document.write(fname,lname)


// console.log("nenu pedda erripappa ni")
// console.log("nenu pedda erripappa ni")
// setTimeout(()=>{
//     console.log("pikudu gadu vachadmmo")
// }
// ,3000)
// console.log("nenu pedda erripappa ni")
// console.log("nenu pedda erripappa ni")


var yesgreetings=()=>{
    setTimeout(()=>{
        console.log("hi andi")
    },1000)
}

var yesname=()=>{
    setTimeout(()=>{
        console.log("hello guys")
    },3000)
}
var yesplace=()=>{
    setTimeout(()=>{
        console.log("well come to my world")
    },4000)
}
var yesgoa=()=>{
    setTimeout(()=>{
        console.log("thank you for visting")
    },2000)
}

// yesgreetings(function(){
//     yesname(function(){


//     yesname(function(){
//         console.log("pora chekka na kodaka")
//     })

// })
// })

yesgreetings()
    yesname()
yesplace()
yesgoa()


// const firstname()=>{
//     setTimeout(()=>{
//         console.log("hi pranaya pottadu")
//     })
// }
