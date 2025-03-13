//async await = makes it easier to work with asynchronus code

const preHeatOven = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const preHeatOven = true;

      if(preHeatOven){
        resolve("preheat oven to 180 deg")
      }else{
        reject("failed task")
      }
     }, 1000)
  })
}

const addSugar = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const addSugar = true;

      if(addSugar){
        resolve("added sugar")
      }else{
        reject("failed task")
      }
     }, 1000)
  })
}

const addFlour = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const preHeatOven = true;

      if(addFlour){
        resolve("added flour")
      }else{
        reject("failed task")
      }
     }, 1000)
  })
}

const mix = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const mix = true;

      if(mix){
        resolve("mix ingredients")
      }else{
        reject("failed task")
      }
     }, 1000)
  })
}

//async function, writing asynchronous code in synchronouse manner, much more readable
const bake = async () => {

  try{
    const task1 = await preHeatOven();
    console.log(task1);
    const task2 = await addSugar();
    console.log(task2)
    const task3 = await addFlour();
    console.log(task3)
    const task4 = await mix();
    console.log(task4)
  
    console.log("enjoy")
  }
  catch(error){
    console.log(error)
  }

}

bake();