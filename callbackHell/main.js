//callback hell = can be messy to manage as you keep adding more functions

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