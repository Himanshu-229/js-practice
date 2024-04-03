

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log('Promise task 1 complete');
       resolve() // resolve is use for connect then to promise function
    },3000)
    
})

promiseOne.then(()=>{
    console.log('Promise connect to then');
})


// Promise two

new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log('Promise task 2 complete ');
       resolve() // resolve is use for connect then to promise function
    },3000)
    
}).then(()=>{
    console.log('Promise connect to then 2');
})

// Promise three

const promisethree = new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username: 'himanshu',email: 'himanshu110322@gmail.com'})
     },1000)
})

promisethree.then(function(user){
    console.log(user);
})       

// Promise Four


const promiseFour = new Promise(function(resolve,reject){
     let error = true
     setTimeout(function(){
    if(!error){
      resolve({username: "Himanshu 3 ", email: 'himanshu110322@gmail.com'})
    }else{
        reject('Error something went wrong')
    }},1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
})


const promiseFive = new Promise(function(resolve,reject){
    let error = true
    setTimeout(function(){
   if(!error){
     resolve({username: "JavaScript ", password: '1234'})
   }else{
       reject('Error something went wrong')
   }},500)
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{ 
    console.log(data);
}).catch((error)=>console.log(error))