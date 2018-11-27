class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();
    }
    
    renderMainPage()
    {
        this.v.showHeader("#body");
        this.m.getTasksFromLoc();
        //this.v.showOfferedTasks("#body");

    }

    retrieveTasks(tasks)
    {
        console.log("tasks are ready!");
        this.v.showOfferedTasks("#body", tasks);
    }
}
