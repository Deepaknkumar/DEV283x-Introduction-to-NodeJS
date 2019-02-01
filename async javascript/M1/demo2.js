function slowTask(){
    var now = new Date().getTime();
    while(new Date().getTime() < now + 2000){
        // processing some task
    }
    console.log("Slow task finished");
}

function asyncSlowTask(val){
    setTimeout(()=>{
        console.log(`async slow task ${val} finished`);
    },2000)
}

function fastTask(){
    console.log("fast task finished!");
}

function runSyncTasks(){
    fastTask();
    slowTask();
    fastTask();
    slowTask();
}

function runAsyncTasks(){
    fastTask();
    asyncSlowTask(1);
    fastTask();
    asyncSlowTask(2);
}

if(process.argv[2]){
    var startTime = new Date().getTime();
    runSyncTasks();
    var endTime = new Date().getTime();
    console.log("Time taken for Sync tasks: " + (endTime-startTime) + "ms")
}else{
    var startTime = new Date().getTime();
    runAsyncTasks();
    var endTime = new Date().getTime();
    console.log("Time taken for Async tasks: " + (endTime-startTime) + "ms")
}