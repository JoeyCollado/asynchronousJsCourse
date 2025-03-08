//

const showMessage = (callback) => {
    console.log(callback)

}

const firstMessage = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
} 

const secondMessage = () => {
    showMessage((`world`))
};