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