// A promise is an assurance or guarantee that something will happen in  
// the future. A person can promise another person a specific outcome or  
// result. A Promise is an object that holds the future value of an async  
// operation.  

// Example: Requesting some data from a server, the promise, promises us  
// to get that data which we can use in future.

//three states of promise:
//pending = waiting
//fulfilled = resolved
//rejected = error

// const promise = new Promise((resolve, reject) => {
//     const bool = true;
//     //const bool = false;

//     if(bool){
//         resolve('get booled')
//     }else{
//         reject('not booled')
//     }
// })


const promise = new Promise((resolve, reject) => {
  //  const randomNum = Math.floor(Math.random() * 10);

  //  setTimeout(() => {
  //     if(randomNum < 4){
  //       resolve("resolved")
  //     }else{
  //       reject("rejected")
  //     }
  //  }, 2000);
  resolve("well done Promise 1 is resolved")
})


const promise2 = new Promise((resolve, reject) => {
  resolve("well done Promise 2 is resolved")
})

const promise3 = new Promise((resolve, reject) => {
  resolve("well done Promise 3 is resolved")
})

promise.then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
})