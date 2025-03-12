
//promse.all() = useful when we got a lot of promises that we want to fire off

const promise1 = new promise1((resolve, reject) => {

  setTimeout(() => {
    resolve("promise 1 resolved")
  }, 2000);
})