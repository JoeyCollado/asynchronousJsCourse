
//promse.all() = useful when we got a lot of promises that we want to fire off
//useful to see if all promises are resolved
//if some promises is rejected it is going to be displayed instead of those that are resolved
//will only display if all promises are resolved

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved")
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved")
  }, 1500);
})

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 3 rejected")
//   }, 1500);
// })

Promise.all([promise1, promise2])
.then((data) => console.log(data[0], data[1]));
