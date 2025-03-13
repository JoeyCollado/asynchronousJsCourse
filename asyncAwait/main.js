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
        resolve("preheat oven to 180 deg")
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
        resolve("preheat oven to 180 deg")
      }else{
        reject("failed task")
      }
     }, 1000)
  })
}