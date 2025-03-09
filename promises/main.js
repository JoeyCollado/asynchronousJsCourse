// A promise is an assurance or guarantee that something will happen in  
// the future. A person can promise another person a specific outcome or  
// result. A Promise is an object that holds the future value of an async  
// operation.  

// Example: Requesting some data from a server, the promise, promises us  
// to get that data which we can use in future.


const showMessage = (callback) => {
    console.log(callback)

}

const firstMessage = (callback) => {
    setTimeout(() => {
        showMessage("hello")
        callback();
    }, 2000);
} 

const secondMessage = () => {
    showMessage((`world`))
};

firstMessage(secondMessage)