//callback = 


function task1(){
setTimeout(() => {
    console.log("1")
}, 1000); 
}

function task2(){
    setTimeout(() => {
        console.log("1")
    }, 2000);
}

function task3(){
    setTimeout(() => {
        console.log("2")
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


setTimeout(() => {
    console.log("5")
}, 2000);
