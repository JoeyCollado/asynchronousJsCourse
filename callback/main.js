//callback = 


function task1(callback){
setTimeout(() => {
    console.log("1")
    callback();
}, 1000); 
}

function task2(callback){
    setTimeout(() => {
        console.log("1")
        callback();
    }, 2000);
}

function task3(callback){
    setTimeout(() => {
        console.log("2")
        callback();
    }, 4000);
}

function task4(){
    setTimeout(() => {
        console.log("3")
    }, 5000);
}

function task5(){
    setTimeout(() => {
        console.log("4")
    }, 3000);
}

function task6(){
    setTimeout(() => {
        console.log("5")
    }, 2000);
}

