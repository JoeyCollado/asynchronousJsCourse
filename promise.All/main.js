
//promse.all() = useful when we got a lot of promises that we want to fire off

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

Promise.all([promise1, promise2])
.then((data) => console.log(data[0], data[1]));
