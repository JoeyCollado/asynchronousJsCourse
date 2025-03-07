//callback = 


function task1(callback){
setTimeout(() => {
    console.log("1")
    callback();
}, 1000); 
}

function task2(callback){
    setTimeout(() => {
        console.log("3")
        callback();
    }, 2000);
}

function task3(callback){
    setTimeout(() => {
        console.log("2")
        callback();
    }, 4000);
}

function task4(callback){
    setTimeout(() => {
        console.log("4")
        callback()
    }, 5000);
}

function task5(callback){
    setTimeout(() => {
        console.log("5")
        callback()
    }, 3000);
}

function task6(callback){
    setTimeout(() => {
        console.log("6")
        callback()
    }, 6000);
}

//callback hell
//this callback method will run the code syncronously
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        
                    })
                })
            })
        })
    })
})

